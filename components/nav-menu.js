import Link from 'next/link'

export default ({menu}) => {
	return (
		<ul className='navbar-nav text-uppercase'>
			{menu.map((item, index) =>
				<li className='nav-item' key={index}>
					<Link href={item.url}><a className='nav-link' target={item.target} >{item.title}</a></Link>
				</li>
			)}
		</ul>
	)
}
