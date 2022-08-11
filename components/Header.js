import Logo from './logo'
import NavMenu from './nav-menu'

import { headerMenu } from './data/menus'

export default () => {
	return (
		<nav className='navbar navbar-expand-md bg-light'>
			<div className='container'>

				<a className='navbar-brand' href='/'>
					<Logo />
					<span className='navbar-brand-text text-capitalize'>Corneliu Cîrlan</span>
				</a>
				
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				
				<div className='collapse navbar-collapse justify-content-md-end' id='navbarSupportedContent'>
					<NavMenu menu={headerMenu} />
				</div>
			</div>
		</nav>
	)
}


