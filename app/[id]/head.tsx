"use client"

import projects from "../../global/data/projects"
import { CaseStudy } from "../../utils/interface/case-study"

export default ({ params }: { params: { id: string } }) => {
	const { id } = params

	// Get current case study
	const project: CaseStudy = projects.filter(project => project.id === id)[0]

	return (
		<>
			<title>{project && project.title}</title>
			<meta name="description" content={project && project.caption} />
		</>
	)
}
