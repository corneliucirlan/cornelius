import Link from 'next/link'

import Logo from './logo'
import NavMenu from './nav-menu'

import { headerMenu } from './data/menus'
import { useEffect, useState } from 'react'

export default () => {

	const [mobileMenu, setMobileMenu] = useState(false)

	useEffect(() => {

		// Disable scrolling when mobile menu is active
		if (mobileMenu) {
			document.body.style.overflow = 'hidden'
			document.body.style.height = '100%'
		}

		// Enable scrolling
		return () => {
			document.body.style.overflow = 'inherit'
			document.body.style.height = 'auto'
		}
	})

	return (
		<nav className={`navbar navbar-expand-md${mobileMenu ? ' menu-active' : ''}`}>
				<div className={`container`}>

				<Link href='/'>
					<a className='navbar-brand d-flex align-items-center'>
						<Logo />
						<span className='navbar-brand-text text-capitalize'>Corneliu Cîrlan</span>
					</a>
				</Link>

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
