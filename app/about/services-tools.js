"use client"

import { useRef } from "react"
import { useIsInViewport } from "../../utils/transitions"
import { aboutCopy } from "../../components/data/site-copy"
import styles from "../../sass/modules/about.module.sass"

export default () => {
	const servicesRef = useRef()
	const toolsRef = useRef()

	return (
		<section className="row">
			<div
				className={`col-12 offset-md-1 col-md-4 opacity-0 ${
					styles.services
				} ${useIsInViewport(servicesRef) && "fade-in"}`}
				ref={servicesRef}
			>
				<h4 className="text-uppercase">{aboutCopy.services.title}</h4>
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
				<h4 className="text-uppercase">{aboutCopy.tools.title}</h4>
				<ul className={styles.list}>
					{aboutCopy.tools.list.map((item, index) => (
						<li key={index} className={styles.item}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
