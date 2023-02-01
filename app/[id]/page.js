import projects from "../../components/data/projects"
import Button from "../../components/button"
import CaseStudyDetail from "../../components/case-study/study-detail"
import CaseStudyDescription from "../../components/case-study/study-description"
import CaseStudyPhoto from "../../components/case-study/study-photo"

import styles from "../../sass/modules/caseStudy.module.sass"

export default async function Study({ params }) {
	const { id } = params

	// Get current case study
	const project = projects.filter((project) => project.id === id)[0]

	return (
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
							className={["btn"]}
							hasTarget={project.target}
							text="View case study on Behance"
							isFaded={true}
							delay={project.description.length + 1}
						/>
					)}
				</section>

				<section className={`col ${styles.images}`}>
					{project.images &&
						project.images.map((image, key) => (
							<CaseStudyPhoto
								key={key}
								id={id}
								image={image}
								delay={key}
								containerClasses={styles.image}
							/>
						))}
				</section>
			</div>
		</main>
	)
}
