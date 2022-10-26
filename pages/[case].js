import Image from 'next/image'

import projects from '../components/data/projects'
import Header from '../components/header'
import Footer from '../components/footer'
import Button from '../components/button'
import { getPhotoData } from '../utils/images'
import CaseStudyDetail from '../components/case-study/study-detail'
import CaseStudyDescription from '../components/case-study/study-description'
import CaseStudyPhoto from '../components/case-study/study-photo'

import styles from '../sass/modules/caseStudy.module.sass'

export const getStaticPaths = async () => {

	return { paths: projects.map(project => ({
		params: {
			case: project.case.toString(),
		},
	})), fallback: false }
}

export const getStaticProps = async ({ params }) => {

	// Get current case study
	const caseStudy = projects.filter(project => project.case === params.case)[0]

	// Get all base64 images
	let photos = await Promise.all(caseStudy.images.map(async image =>
		getPhotoData(`/images/projects/${caseStudy.case}/${image}`)
	))

	// Add photos
	caseStudy.photos = photos

	return { props: { project: caseStudy } }
}

export default ({ project }) => 
	<div className="container">
		<Header />

		<main>
			<div className="row">
				<section className="col-12 col-md-5">

					<article className="opacity-0 fade-in fade-in-delay-1">
						<h4 className="text-uppercase">
							{project.type === "study"
								? "Case study"
								: "Project"}
						</h4>
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
							text={
								project.type === "study"
									? "View case study on Behance"
									: "View project"
							}
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

		<Footer />
	</div>
