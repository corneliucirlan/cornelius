import React from 'react'

const Button = props => {

	return (
		<a href={props.href} className='btn btn-primary cta-contact' title={props.title}>{props.value}</a>
	)
}

export default Button
