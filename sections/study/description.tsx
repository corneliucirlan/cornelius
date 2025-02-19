"use client"

import { useRef, RefObject } from "react"

import { useIsInViewport } from "../../utils/transitions"

interface Description {
	paragraph: string
	index: number
	className: string
}

export default ({ paragraph, index, className }: Description) => {
	const descriptionRef: RefObject<HTMLParagraphElement | null> = useRef(null)

	return (
		<p
			className={`opacity-0 ${className} fade-in-delay-${index + 1} ${
				useIsInViewport(descriptionRef) ? "fade-in" : ""
			}`}
			ref={descriptionRef}
		>
			{paragraph}
		</p>
	)
}
