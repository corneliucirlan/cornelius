"use client"

import { useRef, RefObject } from "react"
import Image from "next/image"

import { useIsInViewport } from "../../utils/transitions"

interface Image {
	id: string
	image: string
	containerClasses: string
	delay: number
}

export default ({ id, image, containerClasses }: Image) => {
	const photoRef: RefObject<HTMLDivElement> = useRef(null)
	return (
		<div
			className={`opacity-0 ${containerClasses} ${
				useIsInViewport(photoRef) ? "fade-in" : ""
			}`}
			ref={photoRef}
		>
			<Image
				src={`/images/projects/${id}/${image}`}
				width="1920"
				height="1080"
				loading="lazy"
				className="case-study"
				alt=""
			/>
		</div>
	)
}
