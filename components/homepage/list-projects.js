import Card from "../card"
import SectionHeader from "./section-header"

export default ({ kicker, heading, projects }) => {
	return (
		<section className="row">
			<SectionHeader kicker={kicker} heading={heading} />
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
