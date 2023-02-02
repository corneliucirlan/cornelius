"use client"

import projects from "../../components/data/projects"

export default ({ params }) => {
	const { id } = params

	// Get current case study
	const project = projects.filter((project) => project.id === id)[0]

	return (
		<>
			<title>{project && project.title}</title>
			<meta name="description" content={project && project.caption} />
		</>
	)
}
