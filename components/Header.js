import next from 'next'
import headerMenu from './data/headerMenu'

export default () => {
	console.log(headerMenu)
	return (
		<nav className='navbar navbar-expand-md bg-light text-uppercase'>
			<div className='container-fluid'>

				<a className='navbar-brand' href='/'>
					<svg className='cc-logo' xmlns='http://www.w3.org/2000/svg' width='49' height='49' viewBox='0 0 49 49'>
						<g className='logo' data-name='Brand Logo' transform='translate(-10.143 -10.643)'>
							<circle className='cc-logo-bg' cx='24' cy='24' r='24' transform='translate(10.643 11.143)' />
							<g id='Group_49' data-name='Group 49' transform='translate(7.312 5.156)'>
								<g className='cc-logo-lower' transform='translate(16.764 24.515)'>
									<path id='Path_44' data-name='Path 44' d='M91.009,93.158H92.8c.1,0,.2,0,.3.01L96.927,90H80.059L79.03,93.158Z' transform='translate(-73.969 -90)' />
									<path id='Path_45' data-name='Path 45' d='M68.791,116.545a4.414,4.414,0,0,0,1.416-.264,6.031,6.031,0,0,0,1.5-.771,6.631,6.631,0,0,0,1.328-1.242,5,5,0,0,0,.887-1.6l2.725-8.042a3.811,3.811,0,0,0,.219-1.547c0-.007,0-.014,0-.022l-4.548,3.6a5.848,5.848,0,0,1-.273,1.071l-.959,2.848v.006l0,.006a4.974,4.974,0,0,1-1.361,2.123,3.626,3.626,0,0,1-2.459.818h-14.8l-1.011,3.015H68.792Z' transform='translate(-51.45 -101.185)' />
								</g>
								<g className='cc-logo-upper'>
									<path id='Path_42' data-name='Path 42' d='M47.208,132.94h-1.79c-.1,0-.2,0-.3-.01L41.29,136.1H58.157l1.029-3.158Z' transform='translate(-25.984 -102.252)' />
									<path id='Path_43' data-name='Path 43' d='M32.134,48a4.414,4.414,0,0,0-1.416.264,6.03,6.03,0,0,0-1.5.771,6.631,6.631,0,0,0-1.328,1.242,5,5,0,0,0-.887,1.6l-2.725,8.042a3.811,3.811,0,0,0-.219,1.547c0,.007,0,.014,0,.022l4.548-3.6a5.848,5.848,0,0,1,.273-1.071l.959-2.848v-.006l0-.006A4.974,4.974,0,0,1,31.2,51.834a3.626,3.626,0,0,1,2.459-.818h14.8L49.475,48H32.134Z' transform='translate(-11.211 -29.514)' />
								</g>
							</g>
						</g>
					</svg>
					{/* <span className='navbar-brand-text text-capitalizem h3'>Corneliu Cîrlan</span> */}
					<span className='navbar-brand-text text-capitalizem'>Corneliu Cîrlan</span>
					{/* <span>Corneliu Cîrlan</span> */}
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


