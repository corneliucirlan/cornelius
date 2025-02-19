import Button from "@/global/components/button"

import NavigationMenuItem from "@/utils/interface/menu"

export default ({ menu }: { menu: Array<NavigationMenuItem> }) => (
	<ul className="navbar-nav text-uppercase">
		{menu?.map(item => (
			<li className="nav-item" key={item.url}>
				<Button
					href={item.url}
					className={["nav-link"]}
					text={item.title}
					hasTarget={item.target}
				/>
			</li>
		))}
	</ul>
)
