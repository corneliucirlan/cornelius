import { useEffect, useState } from 'react'
import Select from 'react-select'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

import styles from '../sass/modules/Contact.module.sass'

export default () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [service, setService] = useState('')
	const [budget, setBudget] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState({})

	// useEffect(() => {
	// 	console.log(errors)
	// 	console.log(service)
	// })

	const handleSubmit = async (event) => {

		// Prevent page reload
		event.preventDefault()

		// Validate inputs
		let isValidForm = handleValidation()

		let serviceType = ''
		switch (service) {
			case 'oneoff':
				serviceType = 'One-off project'
				break
			case 'longterm':
				serviceType = 'Long-term partnership'
				break
			case 'fulltime':
				serviceType = 'Hire me full-time'
				break
			case 'sayhi':
				serviceType = 'Just wanted to say Hi!'
				break
			default: 
				serviceType = 'No services required'
				break
		}
		let budgetAllocation = ''
		switch (budget) {
			case '1000':
				budgetAllocation = '$1000 - $2500'
				break
			case '2500':
				budgetAllocation = '$2500 - 5000'
				break
			case '5000':
				budgetAllocation = '$5000 - $10000'
				break
			case '10000':
				budgetAllocation = '$10000 or more'
				break
			default:
				budgetAllocation = 'I have no budget'
				break
		}

		// Send email if all fields are validated
		if (handleValidation()) {
			
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					name: name,
					service: serviceType,
					budget: budgetAllocation,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			})
	
			const { error } = await res.json()
			if (error) {
				console.log(error)
				return
			}
		}
	}

	// Validate input fields
	const handleValidation = () => {
		let tempErrors = {}
		let isValid = true

		// let fields = {
		// 	'name': name, 
		// 	'email': email, 
		// 	'service': service, 
		// 	'budget': budget, 
		// 	'message': message
		// }

		// Validate all fields
		// for (let key in fields) {
		// 	console.log(key + ": " + fields.key)
		// 	if (!fields.key) {
		// 		tempErrors[key] = true
		// 		isValid = false
		// 	}
		// }

		if (!name) {
			tempErrors['name'] = true
			isValid = false
		}
		if (!email) {
			tempErrors['email'] = true
			isValid = false
		}
		if (!service) {
			tempErrors['service'] = true
			isValid = false
		}
		if (!budget) {
			tempErrors['budget'] = true
			isValid = false
		}
		if (!message) {
			tempErrors['message'] = true
			isValid = false
		}

		setErrors({...tempErrors})
		return isValid
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
			border: 0
		}),
		
		menuList: styles => ({
			...styles,
			cursor: 'pointer',
			border: 0
		}),
		
		option: (styles, state) => ({
			...styles,
			borderColor: 'red',
			cursor: 'pointer',
			fontSize: '1.6rem',
			transition: backgroundTransition,
			backgroundColor:  state.isFocused ? hovercolor : null,
			color: null,
		})
	}
		
		// Input Focus
	const handleOnFocus = event => event.target.classList.contains('.form-control') ? event.target.classList.remove('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')

	// Input Blur
	const handleOnBlur = event => !event.target.value ? event.target.classList.add('is-invalid') : event.target.classList.remove('is-invalid')

	return (
		<div className='container'>

			<Header />

			<main className={`row d-flex align-items-center justify-content-center ${styles.contact}`}>

				<div className='col-12 col-md-5'>
					<h4 className='text-uppercase'>Contact</h4>
					<h1>Get in touch - <br/>let's work together</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo</p>

					<Button classes=' btn-footer btn-email-me' href='mailto:corneliu@corneliucirlan.com' text='corneliu@corneliucirlan.com' icon={true} />
				</div>

				<div className='col-12 col-md-5 offset-md-1'>
					<form action='' method='post' className='row' onSubmit={handleSubmit}>
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
						<div className='col-12 col-md-6'>
							<label htmlFor='service' className='form-label'>Service</label>
							<Select
								name='service'
								placeholder='How can I help?'
								className={`form-control form-control-select ${errors['service'] && 'is-invalid'}`}
								classNamePrefix='select'
								styles={selectStyles}
								id="select-service"
								instanceId="select-service"
								options={[
									{ value: 'oneoff', label: 'One-off project' },
									{ value: 'longterm', label: 'Long-term partnership' },
									{ value: 'fulltime', label: 'Hire me full-time' },
									{ value: 'sayhi', label: 'Just wanted to say Hi!' }
								]}
								onChange={option => setService(option.value)}
								onFocus={handleOnFocus}
								onBlur={event => !service ? event.target.closest('.form-control').classList.add('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')}
								/>
						</div>
						<div className='col-12 col-md-6'>
							<label htmlFor='budget' className='form-label'>Budget</label>
							<Select
								placeholder="What's your budget"
								className={`form-control form-control-select ${errors['budget'] && 'is-invalid'}`}
								classNamePrefix='select'
								id="select-budget"
								instanceId="select-budget"
								styles={selectStyles}
								options={[
									{ value: '1000', label: '$1000 - $2500' },
									{ value: '2500', label: '$2500 - 5000' },
									{ value: '5000', label: '$5000 - $10000' },
									{ value: '10000', label: '$10000 or more' }
								]}
								onChange={option => setBudget(option.value)}
								onFocus={handleOnFocus}
								onBlur={event => !budget ? event.target.closest('.form-control').classList.add('is-invalid') : event.target.closest('.form-control').classList.remove('is-invalid')}
							/>
						</div>
						<div className='col-12'>
							<label htmlFor='message' className='form-label'>Your message</label>
							<textarea
								rows='1'
								name='message'
								placeholder="What's your message?"
								className={`form-control ${errors['message'] && 'is-invalid'}`}
								onChange={e => {setMessage(e.target.value)}}
								onFocus={handleOnFocus}
								onBlur={handleOnBlur}
								></textarea>
						</div>

						<Button classes=' btn-footer btn-email-me' href='#' text='Send message' icon={true} submit={true} />
					</form>
				</div>
			</main>

			<Footer />
		</div>
	)
}
