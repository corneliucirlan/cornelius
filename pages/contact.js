import { useEffect, useState } from 'react'
import Select from 'react-select'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

import styles from '../sass/modules/Contact.module.sass'

export default () => {

	// Form inputs states
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [service, setService] = useState('')
	const [budget, setBudget] = useState('')
	const [message, setMessage] = useState('')

	// Form inputs errors
	const [errors, setErrors] = useState({})

	// useEffect(() => {
	// 	console.log('Errors: ', errors)
	// })

	const handleSubmit = async (event) => {
		
		// Prevent page reload
		event.preventDefault()

		// Get submit button
		let submitButton = document.querySelector('button.btn-form-submit')

		// Get button inner HTML
		const submitButtonDefault = submitButton.innerHTML

		// Sending button HTML
		const buttonIsSending = `
			<div class='loader svg-icon'>
				<div class='circle'></div>
				<div class='ring'></div>
			</div>
			<span>Sending ...</span>`

		// Success button HTML
		const buttonSuccess = `
			<svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
				<path class='path' d="M18,8A10,10,0,1,0,28,18,10,10,0,0,0,18,8Zm0,1.935A8.065,8.065,0,1,1,9.935,18,8.06,8.06,0,0,1,18,9.935m5.653,5.253-.909-.916a.484.484,0,0,0-.684,0l-5.7,5.654L13.95,17.493a.484.484,0,0,0-.684,0l-.916.909a.484.484,0,0,0,0,.684l3.661,3.69a.484.484,0,0,0,.684,0l6.959-6.9A.484.484,0,0,0,23.653,15.188Z" transform="translate(-8 -8)"/>
			</svg>
			<span>Message sent</span>`

		// Error button state
		const buttonError = `
			<svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="17.778" viewBox="0 0 20 17.778">
				<path class='path' d="M19.775,15.278a1.668,1.668,0,0,1-1.444,2.5H1.668a1.668,1.668,0,0,1-1.444-2.5L8.556.833a1.668,1.668,0,0,1,2.887,0l8.331,14.445ZM10,12.292a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,10,12.292ZM8.483,6.55l.258,4.722a.417.417,0,0,0,.416.394h1.686a.417.417,0,0,0,.416-.394l.258-4.722a.417.417,0,0,0-.416-.439H8.9a.417.417,0,0,0-.416.439Z" transform="translate(0)"/>
			</svg>
			<span>Something's wrong, try again in a bit</span>`
		
		// Reset button animation
		const resetAnimation = () => {
			submitButton.classList.add('btn-animate')
			setTimeout(() => {
				submitButton.classList.remove('btn-animate')
			}, 200)
		}

		// Update button
		const updateSubmitButton = (innerHTML, removeClass, addClass, disabled = true) => {
			submitButton.innerHTML = innerHTML
			disabled ? submitButton.setAttribute('disabled', true) : submitButton.removeAttribute('disabled')
			removeClass && submitButton.classList.remove(...removeClass)
			addClass && submitButton.classList.add(addClass)
			resetAnimation()
		}

		// Send email if all fields are validated
		if (!handleValidation()) {

			// Button sending state
			updateSubmitButton(buttonIsSending, '', '')

			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					name: name,
					service: service.label,
					budget: budget.label,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			})

			// Get response from server
			let {code, responseMessage} = await res.json()

			// // Email sent, reset inputs
			if (code == 200) {
				setName('')
				setEmail('')
				setService('')
				setBudget('')
				setMessage('')

				// Button success state
				updateSubmitButton(buttonSuccess, 'btn-sending', 'btn-success')
			} else {
				console.log(code, responseMessage)

				// Button error state
				updateSubmitButton(buttonError, 'btn-success', 'btn-error')
			}

			// Reset button to default
			setTimeout(() => {
				updateSubmitButton(submitButtonDefault, ['btn-sending', 'btn-success', 'btn-error'], false, false)
			}, 3000)
		}
	}

	// Validate input fields
	const handleValidation = () => {
		let tempErrors = {}

		tempErrors['name'] = name === ''
		tempErrors['email'] = email === ''
		tempErrors['service'] = service === ''
		tempErrors['budget'] = budget === ''
		tempErrors['message'] = message === ''

		setErrors({...tempErrors})

		return tempErrors['name'] || tempErrors['email'] || tempErrors['service'] || tempErrors['budget'] || tempErrors['message']
	}

	const hovercolor = 'rgba(21, 21, 21, .1)'
	const backgroundTransition = 'background-color .2s linear'
	const selectStyles = {
		control: styles => ({
			...styles,
			border: 0,
			cursor: 'pointer',
			boxShadow: 'none',
			borderRadius: 0,
			transition: backgroundTransition,
			'&:hover': {
				backgroundColor: hovercolor
			}
		}),
		
		indicatorSeparator: styles => ({
			...styles,
			display: 'none'
		}),
		
		menu: styles => ({
			...styles,
			borderRadius: 0,
			cursor: 'pointer',
			marginTop: 0,
			marginBottom: 0,
			width: '100%',
			boxShadow: `0 4px 11px ${hovercolor}`,
			// boxShadow: '0 0 0 1px rgba(21, 21, 21, .1), 0 4px 11px rgba(21, 21, 21, .1)',
		}),
		
		menuList: styles => ({
			...styles,
			cursor: 'pointer',
			border: 0,
			padding: 0
		}),
		
		option: (styles, state) => ({
			...styles,
			cursor: 'pointer',
			fontSize: '1.6rem',
			transition: backgroundTransition,
			backgroundColor:  state.isFocused ? hovercolor : null,
			color: null,
			'&:active': {
				backgroundColor: hovercolor
			}
		})
	}

	// Input Focus
	const handleOnFocus = event => event.target.classList.contains('.form-control') ? event.target.classList.remove('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')

	// Input Blur
	const handleOnBlur = event => !event.target.value ? event.target.classList.add('is-invalid') : event.target.classList.remove('is-invalid')

	return (
		<div className='container'>

			<Header />

			<main className={`row align-items-center ${styles.contact}`}>

				<div className='col-12 col-md-5'>
					<h4 className='text-uppercase'>Contact</h4>
					<h1>Get in touch - <br/>let's work together</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo</p>

					<Button classes=' btn-footer btn-email-me' href='mailto:corneliu@corneliucirlan.com' text='corneliu@corneliucirlan.com' icon={true} />
				</div>

				<div className='col-12 col-md-6 offset-md-1'>
					<form action='' method='post' className='row' onSubmit={handleSubmit}>

						{/* Name */}
						<div className='col-12 col-md-6'>
							<label htmlFor='name' className='form-label'>Your name</label>
							<input
								type='text'
								name='name'
								value={name}
								className={`form-control ${errors['name'] && 'is-invalid'}`}
								placeholder="What's your name?"
								onChange={e => {setName(e.target.value)}}
								onFocus={handleOnFocus}
								onBlur={handleOnBlur}
								/>
						</div>
						
						{/* Email address */}
						<div className='col-12 col-md-6'>
							<label htmlFor='email' className='form-label'>Your email</label>
							<input
								type='email'
								name='email'
								value={email}
								className={`form-control ${errors['email'] && 'is-invalid'}`}
								placeholder="What's your email address?"
								onChange={e => {setEmail(e.target.value)}}
								onFocus={handleOnFocus}
								onBlur={handleOnBlur}
								/>
						</div>
						
						{/* Service */}
						<div className='col-12 col-md-6'>
							<label htmlFor='service' className='form-label'>Service</label>
							<Select
								name='service'
								placeholder='How can I help?'
								className={`form-control form-control-select ${errors['service'] && 'is-invalid'}`}
								classNamePrefix='select'
								styles={selectStyles}
								value={service}
								id="select-service"
								instanceId="select-service"
								options={[
									{ value: 'oneoff', label: 'One-off project' },
									{ value: 'longterm', label: 'Long-term partnership' },
									{ value: 'fulltime', label: 'Hire me full-time' },
									{ value: 'sayhi', label: 'Just wanted to say Hi!' }
								]}
								onChange={setService}
								onFocus={handleOnFocus}
								onBlur={event => !service ? event.target.closest('.form-control').classList.add('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')}
								/>
						</div>

						{/* Budget */}
						<div className='col-12 col-md-6'>
							<label htmlFor='budget' className='form-label'>Budget</label>
							<Select
								placeholder="What's your budget"
								className={`form-control form-control-select ${errors['budget'] && 'is-invalid'}`}
								classNamePrefix='select'
								id="select-budget"
								instanceId="select-budget"
								styles={selectStyles}
								value={budget}
								options={[
									{ value: '1000', label: '$1000 - $2500' },
									{ value: '2500', label: '$2500 - 5000' },
									{ value: '5000', label: '$5000 - $10000' },
									{ value: '10000', label: '$10000 or more' }
								]}
								onChange={setBudget}
								onFocus={handleOnFocus}
								onBlur={event => !budget ? event.target.closest('.form-control').classList.add('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')}
							/>
						</div>

						{/* Message */}
						<div className='col-12'>
							<label htmlFor='message' className='form-label'>Your message</label>
							<textarea
								rows='1'
								name='message'
								value={message}
								placeholder="What's your message?"
								className={`form-control ${errors['message'] && 'is-invalid'}`}
								onChange={e => {setMessage(e.target.value)}}
								onFocus={handleOnFocus}
								onBlur={handleOnBlur}
								></textarea>
						</div>

						{/* Submit button */}
						<div className='col-12'>
							<Button classes=' btn-footer btn-form-submit' href='#' text='Send message' icon={true} submit={true} />						
						</div>
					</form>
				</div>
			</main>

			<Footer />
		</div>
	)
}
