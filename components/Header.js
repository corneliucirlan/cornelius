import Logo from './logo'
import NavMenu from './nav-menu'

import { headerMenu } from './data/menus'
import { useState } from 'react'

export default () => {

	const [mobileMenu, setMobileMenu] = useState(false)

	return (
		<nav className={`navbar navbar-expand-md${mobileMenu ? ' menu-active' : ''}`}>
				<div className={`container`}>

				<a className='navbar-brand d-flex align-items-center' href='/'>
					<Logo />
					<span className='navbar-brand-text text-capitalize'>Corneliu Cîrlan</span>
				</a>
				
				<button className='navbar-toggler' type='button' onClick={() => mobileMenu ? setMobileMenu(false) : setMobileMenu(true)}>
					<span className='hamburger'></span>
				</button>
				
				<div className='collapse navbar-collapse justify-content-md-end' id='navbarSupportedContent'>
					<NavMenu menu={headerMenu} />
				</div>
			</div>
		</nav>
	)
}
