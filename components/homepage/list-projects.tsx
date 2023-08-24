import Card from "../../utils/interface/card"
import CardComponent from "../card"
import SectionHeader from "./section-header"

export default ({
	kicker,
	heading,
	projects
}: {
	kicker: string
	heading: string
	projects: Array<Card>
}) => {
	return (
		<section className="row">
			<SectionHeader kicker={kicker} heading={heading} />
			{projects?.map((project, key) => (
				<CardComponent
					key={key}
					image={{
						src: project.image.src,
						width: project.image.width,
						height: project.image.height,
						alt: project.title
							? project.title
							: "Latest Instagram posts",
						blurDataURL: project.image.base64
					}}
					title={project.title}
					caption={project.caption}
					href={project.href}
					target={project.target}
					classes={project.classes}
					source={project.source}
				/>
			))}
		</section>
	)
}
