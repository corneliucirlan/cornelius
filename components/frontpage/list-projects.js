import Title from '../title'
import Card from '../card'

export default ({ kicker, heading, projects }) => (
	<section className='row'>
		<Title
			kicker={kicker}
			heading={heading}
		/>
		{projects.map((project, key) =>
			<Card
				key={key}
				cardImage={{
					src: project.image.src,
					width: project.image.width,
					height: project.image.height,
					alt: project.title,
					placeholder: 'blur',
					blurDataURL: project.image.base64,
					layout: 'responsive'
				}}
				cardTitle={project.title}
				cardCaption={project.caption}
				cardHref={project.permalink}
				cardClasses={project.classes}
				cardSource={project.source}
			/>
		)}
	</section>
)
