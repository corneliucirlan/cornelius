import { useRef } from "react"

import { useIsInViewport } from "../../utils/transitions"

export default ({ detail, index, className, listClasses }) => {

	const detailRef = useRef()

	return (
		<article
			className={`opacity-0 fade-in-delay-${index + 1} ${useIsInViewport(detailRef) ? 'fade-in' : ''} ${className}`}
			ref={detailRef}
		>
			<h4 className="text-uppercase">{detail.title}</h4>
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
