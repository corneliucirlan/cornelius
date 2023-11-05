import Header from "../components/header"

import Hero from "../components/homepage/hero"
import ListProjects from "../components/homepage/list-projects"
import LetsWorkTogether from "../components/work-together"
import indexStyles from "../sass/modules/index.module.sass"

import { Project } from "../utils/interface/project"
import getProjects from "./get-projects"

export default async () => {
	// Get all projects
	const projects: Project[] = await getProjects()

	return (
		<>
			<Header />

			<span
				className={`text-center d-none d-md-block ${indexStyles.background}`}
			>
				designer
			</span>

			{/* Hero section mouse scroller */}
			<div className={`d-none d-md-block ${indexStyles.scrolldown}`}>
				<div className={indexStyles.mousey}>
					<div className={indexStyles.scroller}></div>
				</div>
			</div>

			<Hero
				hero={indexStyles.hero}
				cta={indexStyles.cta}
				imageClass={indexStyles.image}
			/>

			{projects?.map(
				(project: Project, key: number) =>
					project.posts !== false && (
						<ListProjects
							key={key}
							kicker={project.kicker}
							heading={project.heading}
							projects={project.posts}
							// source={project.source}
						/>
					)
			)}

			{/* Let's work together */}
			<LetsWorkTogether />
		</>
	)
}
