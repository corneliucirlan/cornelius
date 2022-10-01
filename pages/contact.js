import { useState, useRef } from 'react'
import parse from 'html-react-parser'

import Header from '../components/header'
import Footer from '../components/footer'
import Button from '../components/button'
import Caption from '../components/caption'

// Form inputs
import { FormInput, FormSelect, FormTextare } from '../utils/form-inputs'

// Select styles
import { selectStyles } from '../utils/select-styles'

// Btton states
import { buttonIsSending, buttonSuccess, buttonError, buttonDefault } from '../utils/button-states'

// Validation
import { validateInputs } from '../utils/input-validate'

// Select options
import { BudgetOptions, ServiceOptions } from '../utils/select-options'

// Contact page SASS module
import styles from '../sass/modules/Contact.module.sass'

export default () => {

	// Form inputs states
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [service, setService] = useState('')
	const [budget, setBudget] = useState('')
	const [message, setMessage] = useState('')

	const contactRef = useRef()

	// Form inputs validity
	const [isValid, setIsValid] = useState({})

	// Submit form button state
	const [submitButton, setSubmitButton] = useState({
		text: buttonDefault.text,
		classes: buttonDefault.classes.join(' '),
		disabled: buttonDefault.disabled
	})

	// Update button state
	const updateSubmitButton = button => {
		button.classes.push('btn-animate')
		setSubmitButton({
			text: button.text,
			classes: button.classes.join(' '),
			disabled: button.disabled
		})
		
		// Reset animation
		setTimeout(() => {
			button.classes.pop()
			setSubmitButton({
				text: button.text,
				classes: button.classes.join(' '),
				disabled: button.disabled
			})
		}, 200)
	}

	// Form submit
	const handleSubmit = async event => {

		// Prevent page reload
		event.preventDefault()

		// Validate form
		let isValid = await validateInputs(name, email, service, budget, message)

		// Update validity state
		setIsValid(isValid)
		
		// Form valid
		if (isValid['name'] && isValid['email'] && isValid['service'] && isValid['message'] && isValid['message']) {

			// Button sending state
			updateSubmitButton(buttonIsSending)

			// Send message to server
			let serverResponse = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					name: name,
					service: service,
					budget: budget,
					message: message
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			})

			// Get server response
			let { code, responseMessage } = await serverResponse.json()

			// Message was sent
			if (code == 200) {
				
				// Reset inputs
				setName('')
				setEmail('')
				setService('')
				setBudget('')
				setMessage('')

				// Button success state
				updateSubmitButton(buttonSuccess)
			} else {
				console.log(code, responseMessage)

				// Button error state
				updateSubmitButton(buttonError)
			}
	
			// Reset button to default
			setTimeout(() => {
				updateSubmitButton(buttonDefault)
			}, 3000)
		}
	}

	return (
		<div className='container'>

			<Header />

			<main className={`row align-items-center ${styles.contact}`}>

				<div className='col-12 col-md-5'>
					<Caption
						kicker='Contact'
						heading="Let's work together"
						caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero.'
					/>

					<Button
						href='mailto:corneliu@corneliucirlan.com'
						className={[ 'btn', 'btn-footer', 'btn-email-me', 'animate-in', 'animate-in-delay-3' ]}
						hasIcon={true}
						text='corneliu@corneliucirlan.com'
					/>
				</div>

				<div className='col-12 col-md-6 offset-md-1'>
					<form action='' method='post' className='row' onSubmit={handleSubmit}>

						{/* Name */}
						<FormInput
							forLabel='Name'
							type='text'
							name='name'
							value={name}
							classes={`form-control ${isValid['name'] === false && 'is-invalid'}`}
							placeholder="What's your name?"
							setValue={setName}
							/>

						{/* Email address */}
						<FormInput
							forLabel='E-mail address'
							type='email'
							name='email'
							value={email}
							classes={`form-control ${isValid['email'] === false && 'is-invalid'}`}
							placeholder="What's your e-mail address?"
							setValue={setEmail}
							/>
						
						{/* Service */}
						<FormSelect
							forLabel='Service'
							name='service'
							placeholder='How can I help?'
							classes={`form-control form-control-select ${isValid['service'] === false && 'is-invalid'}`}
							classNamePrefix='select'
							styles={selectStyles}
							value={service}
							id='select-service'
							options={ServiceOptions}
							setValue={setService}
							/>

						{/* Budget */}
						<FormSelect
							forLabel='Budget'
							name='budget'
							placeholder="What's your budget"
							classes={`form-control form-control-select ${isValid['budget'] === false && 'is-invalid'}`}
							classNamePrefix='select'
							styles={selectStyles}
							value={budget}
							id='select-budget'
							options={BudgetOptions}
							setValue={setBudget}
						/>
	
						{/* Message */}
						<FormTextare
							forLabel='Message'
							name='message'
							value={message}
							placeholder="What's your message?"
							classes={`form-control ${isValid['message'] === false && 'is-invalid'}`}
							setValue={setMessage}
						/>

						{/* Submit button */}
						<div className='col-12'>
							{/* <Button classes=' btn-footer btn-form-submit' href='#' text='Send message' icon={true} submit={true} />						 */}
						
							<button
								type="submit"
								className={submitButton.classes}
								disabled={submitButton.disabled}>
									{parse(submitButton.text)}
							</button>
						</div>
					</form>
				</div>
			</main>

			<Footer />
		</div>
	)
}
