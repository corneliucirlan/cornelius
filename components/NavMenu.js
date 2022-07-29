export default ({menu}) => {
	return (
		<ul className='navbar-nav text-uppercase'>
			{menu.map((item, index) =>
				<li className='nav-item' key={index}>
					<a className='nav-link' target={item.target} href={item.url}>{item.title}</a>
				</li>
			)}
		</ul>
	)
}
