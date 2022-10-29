import { useState, useEffect, useRef } from 'react'
import parse from 'html-react-parser'
import useDarkMode from 'use-dark-mode'
import { motion, useAnimation, useInView } from 'framer-motion'

import Header from '../components/header'
import Footer from '../components/footer'
import Button from '../components/button'
import FormField from '../utils/form-inputs'
import { selectStylesLight, selectStylesDark } from '../utils/select-styles'
import { buttonIsSending, buttonSuccess, buttonError, buttonDefault } from '../utils/button-states'
import { validateInputs } from '../utils/input-validate'
import { contactCopy } from '../components/data/site-copy'
import { animation } from '../utils/animation'

import styles from '../sass/modules/Contact.module.sass'

export default () => {

	// Dark mode
	const darkMode = useDarkMode()

	const [ selectStyles, setSelectStyles ] = useState(false)

	// Set select styles
	useEffect(() => darkMode.value ? setSelectStyles(selectStylesDark) : setSelectStyles(selectStylesLight), [ darkMode.value ])
	
	// Form inputs states
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [service, setService] = useState('')
	const [budget, setBudget] = useState('')
	const [message, setMessage] = useState('')

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

	const formInputs = [
		{
			type: 'text',
            forLabel: contactCopy.form.name.label,
			name: contactCopy.form.name.name,
			value: name,
			classes: `form-control ${isValid["name"] === false && "is-invalid"}`,
			placeholder: contactCopy.form.name.placeholder,
			setValue: setName
		},
		{
			type: 'email',
            forLabel: contactCopy.form.email.label,
			name: contactCopy.form.email.name,
			value: email,
			classes: `form-control ${isValid["email"] === false && "is-invalid"}`,
			placeholder: contactCopy.form.email.placeholder,
			setValue: setEmail
		},
		{
			type: 'select',
			forLabel: contactCopy.form.service.label,
            name: contactCopy.form.service.name,
			value: service,
			classes: `form-control form-control-select ${isValid["service"] === false && "is-invalid"}`,
			placeholder: contactCopy.form.service.placeholder,
			classNamePrefix: "select",
			styles: selectStyles,
			id: "select-service",
			options: contactCopy.form.service.options,
			setValue: setService
		},
		{
			type: 'select',
			forLabel: contactCopy.form.budget.label,
			name: contactCopy.form.budget.name,
            value: budget,
			classes: `form-control form-control-select ${isValid["budget"] === false && "is-invalid"}`,
			placeholder: contactCopy.form.budget.placeholder,
			classNamePrefix: 'select',
			styles: selectStyles,
			id:'select-budget',
			options: contactCopy.form.budget.options,
			setValue: setBudget
		},
		{
			type: 'textarea',
			forLabel: contactCopy.form.message.label,
			name: contactCopy.form.message.name,
			value: message,
			classes: `form-control form-control-textarea ${isValid["message"] === false && "is-invalid"}`,
			placeholder: contactCopy.form.message.placeholder,
            setValue: setMessage
		}
	]

	const contactControl = useAnimation()
	const contactFormControl = useAnimation()
	const contactRef = useRef()
	const contactFormRef = useRef()
	const contactInView = useInView(contactRef)
	const contactFormInView = useInView(contactFormRef)

	useEffect(() => {
		contactInView && contactControl.start('show')
	}, [ contactControl, contactFormControl, contactInView, contactFormControl, selectStyles ])
	
	useEffect(() => {
		if (selectStyles !== false)
			contactFormInView && contactFormControl.start('show')
	}, [ selectStyles, contactFormControl, contactFormInView ])

	return (
		<div className="container">
			<Header />

			<main className={`row align-items-center ${styles.contact}`}>
				<motion.section
					ref={contactRef}
					animate={contactControl}
					initial="hidden"
					variants={animation}
					className="col-12 col-md-5"
				>
					<h4 className="text-uppercase">{contactCopy.kicker}</h4>
					<h1>{parse(contactCopy.title)}</h1>
					<p className={styles.caption}>{contactCopy.caption}</p>

					<Button
						href={contactCopy.mail.href}
						className={["btn", "btn-footer", "btn-email-me"]}
						hasIcon={true}
						text={contactCopy.mail.text}
					/>
				</motion.section>

				<motion.section
					ref={contactFormRef}
					animate={contactFormControl}
                    initial="hidden"
					variants={animation}
					className="col-12 col-md-6 offset-md-1"
				>
					<form
						action=""
						method="post"
						className="row"
						onSubmit={handleSubmit}
					>
							{formInputs.map((input, key) =>
								<FormField
									key={key}
									delay={key}
									type={input.type}
									forLabel={input.forLabel}
									name={input.name}
									value={input.value}
									classes={input.classes}
									placeholder={input.placeholder}
									classNamePrefix={input.classNamePrefix}
									styles={input.styles}
									id={input.id}
									options={input.options}
									setValue={input.setValue}
								/>
							)}

						{/* Submit button */}
						<div
							className="col-12"
						>
							<button
								type="submit"
								className={submitButton.classes}
								disabled={submitButton.disabled}
							>
								{parse(submitButton.text)}
							</button>
						</div>
					</form>
				</motion.section>
			</main>

			<Footer />
		</div>
	)
}
