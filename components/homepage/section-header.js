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
			<span className="h4 text-uppercase">{kicker}</span>
			<h1>{heading}</h1>
		</header>
	)
}
