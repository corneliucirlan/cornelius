import React from 'react'

import Icon from './Icon'

const IconLogo = props => {

	return (
		<a className='navbar-brand' href='/' aria-label='Corneliu C&icirc;rlan'>
			<Icon name='logo' class={props.class} />
		</a>
	)
}

export default IconLogo
