import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import LetsWorkTogether from '../components/work-together'
import { getPhotoData } from '../utils/images'
import { useIsInViewport } from '../utils/transitions'
import { aboutCopy } from '../components/data/site-copy'

import styles from '../sass/modules/About.module.sass'

export const getStaticProps = async () => {

	return {
		props: {
			aboutMePhoto: await getPhotoData('/images/cc-about.jpg')
		}
	}
}


export default ({ aboutMePhoto }) => {

	const aboutRef = useRef()
	const photoRef = useRef()
	const servicesRef = useRef()
	const toolsRef = useRef()
	const experienceRef = useRef()
	const experienceListRef = useRef()

	return (
		<>
			<Head>
				<title>About Corneliu Cîrlan</title>
			</Head>

			<main className="text-center">

				{/* About me */}
				<section
					className={`row opacity-0 ${
						useIsInViewport(aboutRef)
							? "fade-in fade-in-delay-1"
							: null
					}`}
					ref={aboutRef}
					>
					<div className="col-12 offset-md-2 col-md-8">
						<h4 className="text-uppercase">{aboutCopy.kicker}</h4>
						<h1>{aboutCopy.title}</h1>
						<p>{aboutCopy.caption}</p>
					</div>
				</section>

				{/* Photo */}
				<section
					className={`row opacity-0 ${
						useIsInViewport(photoRef)
							? "fade-in fade-in-delay-1"
							: null
					}`}
					ref={photoRef}
				>
					<Image
						src={aboutMePhoto.src}
						width={aboutMePhoto.width}
						height={aboutMePhoto.height}
						placeholder="blur"
						blurDataURL={aboutMePhoto.base64}
						priority={true}
					/>
				</section>

				{/* Services & tools */}
				<section className="row">
					<div
						className={`col-12 offset-md-1 col-md-4 opacity-0 ${
							styles.services
						} ${useIsInViewport(servicesRef) ? "fade-in" : ""}`}
						ref={servicesRef}
					>
						<h4 className="text-uppercase">
							{aboutCopy.services.title}
						</h4>
						<ul className={styles.list}>
							{aboutCopy.services.list.map((item, index) => (
								<li key={index} className={styles.item}>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div
						className={`col-12 offset-md-2 col-md-4 opacity-0 ${
							useIsInViewport(toolsRef) ? "fade-in" : ""
						}`}
						ref={toolsRef}
					>
						<h4 className="text-uppercase">
							{aboutCopy.tools.title}
						</h4>
						<ul className={styles.list}>
							{aboutCopy.tools.list.map((item, index) => (
								<li key={index} className={styles.item}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Experience */}
				<section className="row">
					<div
						className={`col-12 offset-md-2 col-md-8 opacity-0 ${
							useIsInViewport(experienceRef) ? "fade-in" : null
						}`}
						ref={experienceRef}
					>
						<h4 className="text-uppercase">
							{aboutCopy.experience.kicker}
						</h4>
						<h1>{aboutCopy.experience.title}</h1>
						<p>{aboutCopy.experience.caption}</p>
					</div>

					<div
						className={`col-12 offset-md-1 col-md-10 opacity-0 ${
							styles.experience
						} ${
							useIsInViewport(experienceListRef)
								? "fade-in"
								: null
							}`}
							ref={experienceListRef}
							>
						{aboutCopy.experience.list.map((item, index) => (
							<div
							key={index}
								className={`d-flex justify-content-between flex-column flex-md-row ${styles.item}`}
								>
								<span>{item.name}</span>
								<span>{item.title}</span>
								<span>{item.period}</span>
							</div>
						))}
					</div>
				</section>

				{/* Let's work together */}
				<LetsWorkTogether />
			</main>

		</>
	)
}
