import React from 'react'

import icons from './sprite.svg'

const Icon = props => (
	<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={`icon icon-${props.name} ${props.class}`}>
		<use className={props.name} href={`${icons}#${props.name}`} />
	</svg>
)

export default Icon
