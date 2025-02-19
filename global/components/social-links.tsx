import Link from "next/link"
import { socialLinks } from "@/global/data/menus"

export default () => {
	return (
		<div className="d-flex justify-content-between">
			{socialLinks.map((link, key) => (
				<Link
					key={key}
					aria-label={link.title}
					href={link.url}
					target={link.target}
					rel={link.rel}
				>
					{link.svg}
				</Link>
			))}
		</div>
	)
}
