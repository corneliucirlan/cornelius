import Link from 'next/link'
import { Envelope } from './svg-icons'

export default ({ href, className = [], text, hasIcon = false, hasTarget = null, isFaded = false, delay }) => {

	return (
		<Link href={href} passHref>
			<a
				className={className.join(" ")}
				target={hasTarget && hasTarget}
			>
				{hasIcon && <Envelope />}
				<span>{text}</span>
			</a>
		</Link>
	)
}
