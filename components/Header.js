import headerMenu from './data/headerMenu'
import Logo from './Logo'

export default () => {
	return (
		<nav className='navbar navbar-expand-md bg-light text-uppercase'>
			<div className='container-fluid'>

				<a className='navbar-brand' href='/'>
					<Logo />
					<span className='navbar-brand-text text-capitalizem'>Corneliu Cîrlan</span>
				</a>
				
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				
				<div className='collapse navbar-collapse justify-content-md-end' id='navbarSupportedContent'>
					<ul className='navbar-nav'>
						{headerMenu.map((menuItem, index) =>
							<li className='nav-item' key={index}>
								<a className='nav-link' target={menuItem.target} href={menuItem.url}>{menuItem.title}</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}


