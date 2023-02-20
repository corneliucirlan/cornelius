"use client"

import Link from "next/link"
import { useRef } from "react"
import { useIsInViewport } from "../utils/transitions"
import { Envelope } from "./data/svg-icons"

export default ({
	href,
	className = [],
	text,
	hasIcon = false,
	hasTarget = null,
	isFaded = false,
	delay
}) => {
	const linkRef = useRef()

	return (
		<Link
			ref={linkRef}
			href={href}
			className={`
				${className.join(" ")}
				${isFaded && "opacity-0 "}
				${isFaded && useIsInViewport(linkRef) ? "fade-in fade-in-delay-" + delay : ""}
			`}
			target={hasTarget && hasTarget}
		>
			{hasIcon && <Envelope />}
			<span>{text}</span>
		</Link>
	)
}
