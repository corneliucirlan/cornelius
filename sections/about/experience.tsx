"use client"

import { useRef, RefObject } from "react"
import { useIsInViewport } from "../../utils/transitions"
import { aboutCopy } from "../../global/data/site-copy"
import styles from "../../sass/modules/about.module.sass"

export default () => {
	const experienceRef: RefObject<HTMLDivElement | null> = useRef(null)
	const experienceListRef: RefObject<HTMLDivElement | null> = useRef(null)

	return (
		<section className="row">
			<div
				className={`col-12 offset-md-2 col-md-8 opacity-0 ${
					useIsInViewport(experienceRef) ? "fade-in" : null
				} `}
				ref={experienceRef}
			>
				<span className="h4 text-uppercase">
					{aboutCopy.experience.kicker}
				</span>
				<h1>{aboutCopy.experience.title}</h1>
				<p>{aboutCopy.experience.caption}</p>
			</div>

			<div
				className={`col-12 offset-md-1 col-md-10 opacity-0 ${
					styles.experience
				} ${useIsInViewport(experienceListRef) ? "fade-in" : null} `}
				ref={experienceListRef}
			>
				{aboutCopy?.experience?.list?.map((item, index) => (
					<div
						key={index}
						className={`d-flex justify-content-between flex-column flex-md-row ${styles.item}`}
					>
						<span>{item.name}</span>
						<span>{item.title}</span>
						<span>{item.period}</span>
					</div>
				))}
			</div>
		</section>
	)
}
