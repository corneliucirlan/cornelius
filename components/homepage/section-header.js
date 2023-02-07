"use client"

import { useRef } from "react"
import { useIsInViewport } from "../../utils/transitions"

export default ({ kicker, heading }) => {
	const headerRef = useRef()

	return (
		<header
			className={`opacity-0 ${
				useIsInViewport(headerRef) ? "fade-in fade-in-delay-1" : null
			}`}
			ref={headerRef}
		>
			<h4 className="text-uppercase">{kicker}</h4>
			<h1>{heading}</h1>
		</header>
	)
}
