"use client"

import { useRef } from "react"
import Image from "next/image"

import { useIsInViewport } from "../../utils/transitions"

export default ({ id, image, containerClasses }) => {
	const photoRef = useRef()
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
