import Select from 'react-select'

const isInvalidClass = 'is-invalid'

// Input
export const FormInput = ({ forLabel, type, name, value, classes, containerClasses, placeholder, setValue }) => {

	return (
		<div className={`col-12 col-md-6 opacity-0 ${containerClasses}`}>
			<label htmlFor={name} className='form-label'>{forLabel}</label>
			<input
				type={type}
				name={name}
				defaultValue={value}
				className={classes}
				placeholder={placeholder}
				onChange={event => setValue(event.target.value)}
				onFocus={event => event.target.classList.remove(isInvalidClass)}
				onBlur={event => !event.target.value && event.target.classList.add(isInvalidClass)}
				/>
		</div>
	)
}

// Textarea
export const FormTextare = ({ forLabel, name, value, classes, containerClasses, placeholder, setValue }) => {
	
	return (
		<div className={`col-12 opacity-0 ${containerClasses}`}>
			<label htmlFor={name} className='form-label'>{forLabel}</label>
			<textarea
				rows='1'
				name={name}
				defaultValue={value}
				className={classes}
				placeholder={placeholder}
				onChange={e => {setValue(e.target.value)}}
				onFocus={event => event.target.classList.remove(isInvalidClass)}
				onBlur={event => !event.target.value && event.target.classList.add(isInvalidClass)}
			/>
		</div>
	)
}

// Select
export const FormSelect = ({ forLabel, name, placeholder, classes, containerClasses, namePrefix, styles, value, id, options,setValue }) => {

	return (
		// <div className={`col-12 col-md-6 opacity-0 ${containerClasses}`}>
		<div className={`col-12 col-md-6`}>
			<label htmlFor={name} className='form-label'>{forLabel}</label>
			<Select
				name={name}
				placeholder={placeholder}
				className={classes}
				classNamePrefix={namePrefix}
				styles={styles}
				value={value}
				id={id}
				instanceId={id}
				options={options}
				onChange={event => setValue(event)}
				onFocus={event => event.target.closest('.form-control').classList.remove(isInvalidClass)}
				onBlur={event => !value ? event.target.closest('.form-control').classList.add(isInvalidClass) : event.target.closest('.form-control').classList.remove(isInvalidClass)}
			/>
		</div>
	)
}
