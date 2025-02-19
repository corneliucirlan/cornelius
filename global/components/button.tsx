"use client"

import { useRef, RefObject } from "react"
import Link from "next/link"

import { Envelope } from "@/global/data/svg-icons"

import { useIsInViewport } from "@/utils/transitions"
import ButtonProps from "@/utils/interface/button"

export default ({
	href,
	className = [],
	text,
	hasIcon = false,
	hasTarget = undefined,
	isFaded = false,
	delay
}: ButtonProps) => {
	const linkRef: RefObject<HTMLAnchorElement | null> = useRef(null)

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
