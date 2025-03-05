"use client"

import { useRef, RefObject } from "react"
import { useIsInViewport } from "@/utils/transitions"

import { Detail } from "@/utils/interface/case-study"

interface Details {
	detail: Detail
	index: number
	className: string
	listClasses: string
}

export default ({ detail, index, className, listClasses }: Details) => {
	const detailRef: RefObject<HTMLElement | null> = useRef(null)

	return (
		<article
			className={`opacity-0 fade-in-delay-${index + 1} ${
				useIsInViewport(detailRef) && "fade-in"
			} ${className}`}
			ref={detailRef}
		>
			{detail.title && (
				<span className="h4 text-uppercase">{detail.title}</span>
			)}
			{Array.isArray(detail.text) ? (
				<ul className={listClasses}>
					{detail.text.map((role, key) => (
						<li key={key} className="h4-project">
							{role}
						</li>
					))}
				</ul>
			) : (
				<span className="h4-project">{detail.text}</span>
			)}
		</article>
	)
}
