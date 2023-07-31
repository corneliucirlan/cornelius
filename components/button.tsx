"use client"

import Link from "next/link"
import { useRef, RefObject } from "react"
import { useIsInViewport } from "../utils/transitions"
import { Envelope } from "./data/svg-icons"

import ButtonProps from "../utils/interface/button"

export default ({
	href,
	className = [],
	text,
	hasIcon = false,
	hasTarget = undefined,
	isFaded = false,
	delay
}: ButtonProps) => {
	const linkRef: RefObject<HTMLAnchorElement> = useRef(null)

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
