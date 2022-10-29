import Select from 'react-select'
import { motion } from 'framer-motion'
import { item } from './animation'

const isInvalidClass = 'is-invalid'

// Input
const formText = ( forLabel, type, name, value, classes, placeholder, setValue, delay ) =>
	<motion.div
		variant={item}
		className="col-12 col-md-6"
	>
		<label htmlFor={name} className="form-label">
			{forLabel}
		</label>
		<input
			type={type}
			name={name}
			defaultValue={value}
			className={classes}
			placeholder={placeholder}
			onChange={event =>
				setValue(event.target.value)
			}
			onFocus={event =>
				event.target.classList.remove(isInvalidClass)
			}
			onBlur={event =>
				!event.target.value &&
				event.target.classList.add(isInvalidClass)
			}
		/>
	</motion.div>

// Textarea
const formTextarea = ( forLabel, name, value, classes, placeholder, setValue, delay ) =>
	<div
		className="col-12"
	>
		<label htmlFor={name} className="form-label">
			{forLabel}
		</label>
		<textarea
			rows="1"
			name={name}
			defaultValue={value}
			className={classes}
			placeholder={placeholder}
			onChange={event => {
				setValue(event.target.value)
			}}
			onFocus={event =>
				event.target.classList.remove(isInvalidClass)
			}
			onBlur={event =>
				!event.target.value &&
				event.target.classList.add(isInvalidClass)
			}
		/>
	</div>

// Select
const FormSelect = ( forLabel, name, placeholder, classes, namePrefix, styles, value, id, options, setValue, delay ) =>
	<div
		className="col-12 col-md-6"
	>
		<label htmlFor={name} className="form-label">
			{forLabel}
		</label>
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
			onChange={event =>
				setValue(event)
			}
			onFocus={event =>
				event.target
					.closest(".form-control")
					.classList.remove(isInvalidClass)
			}
			onBlur={event =>
				!value
				? event.target
					.closest(".form-control")
					.classList.add(isInvalidClass)
				: event.target
					.closest(".form-control")
					.classList.remove(isInvalidClass)
			}
			/>
	</div>

export default ({ forLabel, type, name, value, classes, placeholder, namePrefix, styles, id, options, setValue, delay }) => {
	switch (type) {
		case 'text':
			return formText(forLabel, type, name, value, classes, placeholder, setValue, delay)
		case 'email':
			return formText(forLabel, type, name, value, classes, placeholder, setValue, delay)
		case 'textarea':
			return formTextarea(forLabel, name, value, classes, placeholder, setValue, delay)
		case 'select':
			return FormSelect(forLabel, name, placeholder, classes, namePrefix, styles, value, id, options, setValue, delay)
	}
}
