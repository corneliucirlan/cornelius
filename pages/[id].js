import Head from 'next/head'
import projects from '../components/data/projects'
import Button from '../components/button'
import { getPhotoData } from '../utils/images'
import CaseStudyDetail from '../components/case-study/study-detail'
import CaseStudyDescription from '../components/case-study/study-description'
import CaseStudyPhoto from '../components/case-study/study-photo'

import styles from '../sass/modules/caseStudy.module.sass'

export const getStaticPaths = () => ({
	paths: projects
		.filter((project) => project.type === "study")
		.map((p) => ({ params: { id: p.id } })),
	fallback: false,
})

export const getStaticProps = async ({ params }) => {

	// Get current case study
	const caseStudy = projects.filter(project => project.id === params.id)[0]

	// Get all base64 images
	let photos = await Promise.all(caseStudy.images.map(async image =>
		getPhotoData(`/images/projects/${caseStudy.id}/${image}`)
	))

	// Add photos
	caseStudy.photos = photos

	return { props: { project: caseStudy } }
}

export default ({ project }) =>
	<>
		<Head>
			<title>{project.title}</title>
			<meta name="description" content={project.caption} />
		</Head>

		<main>
			<div className="row">
				<section className="col-12 col-md-5">

					<article className="opacity-0 fade-in fade-in-delay-1">
						<h4 className="text-uppercase">Case study</h4>
						<h1>{project.title}</h1>
					</article>

					{project.details.map((detail, key) => (
						<CaseStudyDetail
							key={key}
							index={key}
							detail={detail}
							className={styles.subtitle}
							listClasses={styles.ul}
						/>
					))}
				</section>

				<section className="col-12 col-md-7">
					{project.description &&
						project.description.map((paragraph, key) => (
							<CaseStudyDescription
								key={key}
								index={key}
								paragraph={paragraph}
								className={styles.description}
							/>
					))}

					{project.behanceURL && (
						<Button
							href={project.behanceURL}
							className={[ "btn" ]}
							hasTarget={project.target}
							text="View case study on Behance"
							isFaded={true}
							delay={project.description.length+1}
						/>
					)}
				</section>

				<section className={`col ${styles.images}`}>
					{project.photos &&
						project.photos.map((image, key) => (
							<CaseStudyPhoto
								key={key}
								image={image}
								delay={key}
								containerClasses={styles.image}
							/>
						))}
				</section>
			</div>
		</main>
	</>
