"use client"

import { useRef } from "react"
import { useIsInViewport } from "../../utils/transitions"
import Card from "../card"

export default ({ kicker, heading, projects }) => {
	const headerRef = useRef()

	return (
		<section className="row">
			<header
				className={`opacity-0 ${
					useIsInViewport(headerRef) ? "fade-in" : ""
				}`}
				ref={headerRef}
			>
				<h4 className="text-uppercase">{kicker}</h4>
				<h1>{heading}</h1>
			</header>
			{projects.map((project, key) => (
				<Card
					key={key}
					cardImage={{
						src: project.image.src,
						width: project.image.width,
						height: project.image.height,
						alt: project.title
							? project.title
							: "Latest Instagram posts",
						placeholder: "blur",
						blurDataURL: project.image.base64
					}}
					cardTitle={project.title}
					cardCaption={project.caption}
					cardHref={project.permalink}
					cardTarget={project.target}
					cardClasses={project.classes}
					cardSource={project.source}
				/>
			))}
		</section>
	)
}
