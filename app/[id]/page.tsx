import Loading from "./loading"

import projects from "@/global/data/projects"
import Button from "@/global/components/button"
import Header from "@/global/components/header"

import Detail from "@/sections/study/detail"
import Description from "@/sections/study/description"
import Photo from "@/sections/study/photo"

import { CaseStudy } from "@/utils/interface/case-study"

import styles from "@/sass/modules/caseStudy.module.sass"

export default async function Study({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	// Get current case study
	const caseStudy: CaseStudy = projects.filter(
		project => project.id === id
	)[0]

	// Check if case study exists
	if (typeof caseStudy === "undefined") return <Loading />

	return (
		<>
			<Header />
			<main>
				<div className="row">
					<section className="col-12 col-md-5">
						<article className="opacity-0 fade-in">
							<span className="h4 text-uppercase">
								Case study
							</span>
							<h1>{caseStudy?.title}</h1>
						</article>

						{caseStudy?.details?.map((detail, key) => (
							<Detail
								key={key}
								index={key}
								detail={detail}
								className={styles.subtitle}
								listClasses={styles.ul}
							/>
						))}
					</section>

					<section className="col-12 col-md-7">
						{caseStudy?.description?.map((paragraph, key) => (
							<Description
								key={key}
								index={key}
								paragraph={paragraph}
								className={styles.description}
							/>
						))}

						{caseStudy.behanceURL && caseStudy?.description && (
							<Button
								href={caseStudy.behanceURL}
								className={["btn"]}
								hasTarget={caseStudy.target}
								text="View case study on Behance"
								isFaded={true}
								delay={caseStudy.description.length + 1}
							/>
						)}
					</section>

					<section className={`col ${styles.images}`}>
						{caseStudy?.images?.map((image, key) => (
							<Photo
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
		</>
	)
}
