import Link from 'next/link'
import { useRef } from 'react'
import { useIsInViewport } from '../utils/transitions'
import { Envelope } from './svg-icons'

export default ({ href, className = [], text, hasIcon = false, hasTarget = null, isFaded = false, delay }) => {

	const linkRef = useRef()

	return (
		<Link href={href} passHref>
			<a
				ref={linkRef}
				className={`
					${className.join(" ")}
					${isFaded ? 'opacity-0' : ''}
					${isFaded && useIsInViewport(linkRef) ? 'fade-in fade-in-delay-'+delay : ''}
				`}
				target={hasTarget && hasTarget}
			>
				{hasIcon && <Envelope />}
				<span>{text}</span>
			</a>
		</Link>
	)
}
