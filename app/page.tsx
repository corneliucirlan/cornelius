import Header from "@/global/components/header"

import Hero from "@/sections/home/hero"
import ListProjects from "@/sections/home/list-projects"
import getProjects from "@/sections/home/get-projects"

import LetsWorkTogether from "@/global/components/work-together"

import indexStyles from "@/sass/modules/index.module.sass"

import { Project } from "@/utils/interface/project"

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
