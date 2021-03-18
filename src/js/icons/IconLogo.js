import React from 'react'
import { Event } from './../Tracking'

import Icon from './Icon'

const IconLogo = props => {

	const ClickHandler = event => {

		event.preventDefault()
	
		// Track event in Google Analytics
		Event('Homepage', 'Click', 'Logo')
	}

	return (
		<a className='navbar-brand' href='/' aria-label='Corneliu C&icirc;rlan' onClick={ClickHandler}>
			<Icon name='logo' class={props.class} />
		</a>
	)
}

export default IconLogo
