import React from 'react'

import Icon from './Icon'

const IconSocial = props => {

	return (
		<li className='social-icon'>
			<a href={props.href} title={props.title} target="_blank" rel='noopener noreferrer'>
				<Icon name={props.name} />
			</a>
		</li>
	)
}

export default IconSocial
