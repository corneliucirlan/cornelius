import React from 'react'

import icons from './../data/socialMediaData'
import IconSocial from './icons/IconSocial'
import IconLogo from './icons/IconLogo'
import BackdropSVG from './backdropSVG'

const Header = props => {

	return (

		<header className='header'>

			<BackdropSVG width={props.width} height={props.height} className='header-svg' />

			<IconLogo />

			<ul className='social-icons social-icons-header'>
				{icons.map(icon => <IconSocial key={icon.name} name={icon.name} href={icon.url} title={icon.title} />)}
			</ul>
            
		</header>
    )
}

export default Header
