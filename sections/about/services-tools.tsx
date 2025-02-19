"use client"

import { useRef, RefObject } from "react"
import { useIsInViewport } from "../../utils/transitions"
import { aboutCopy } from "../../global/data/site-copy"
import styles from "../../sass/modules/about.module.sass"

export default () => {
	const servicesRef: RefObject<HTMLDivElement> = useRef(null)
	const toolsRef: RefObject<HTMLDivElement> = useRef(null)

	return (
		<section className="row">
			<div
				className={`col-12 offset-md-1 col-md-4 opacity-0 ${
					styles.services
				} ${useIsInViewport(servicesRef) && "fade-in"}`}
				ref={servicesRef}
			>
				<span className="h4 text-uppercase">
					{aboutCopy.services.title}
				</span>
				<ul className={styles.list}>
					{aboutCopy.services.list.map((item, index) => (
						<li key={index} className={styles.item}>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div
				className={`col-12 offset-md-2 col-md-4 opacity-0 ${
					useIsInViewport(toolsRef) ? "fade-in" : null
				}`}
				ref={toolsRef}
			>
				<span className="h4 text-uppercase">
					{aboutCopy.tools.title}
				</span>
				<ul className={styles.list}>
					{aboutCopy?.tools?.list?.map((item, index) => (
						<li key={index} className={styles.item}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
