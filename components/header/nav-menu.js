import Button from "../button"

export default ({ menu }) => (
	<ul className='navbar-nav text-uppercase'>
		{menu.map((item, index) =>
			<li className='nav-item' key={index}>
				<Button
					href={item.url}
					className={['nav-link']}
					text={item.title}
					hasTarget={item.target}
				/>
			</li>
		)}
	</ul>
)
