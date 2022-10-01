import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'
import Title from '../components/title'
import LetsWorkTogether from '../components/work-together'
import Caption from '../components/caption'
import { getPhotoData } from '../utils/images'
import { useIsInViewport } from '../utils/transitions'

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

	const servicesAndTools = [
		{
			title: 'Services',
			items: [ 'Art direction', 'Web & mobile', 'Brand identity', 'UX & UI', 'Iconography', 'Animation', 'Photography' ],
			classes: `col-12 offset-md-1 col-md-4 ${styles.services}`,
			ref: servicesRef
		},
		{
			title: 'Tools',
			items: [ 'Photoshop', 'Illustrator', 'XD', 'Dimension', 'After Effects', 'Lightroom', 'Figma', 'Visual Studio Code' ],
			classes: 'col-12 offset-md-2 col-md-4',
			ref: toolsRef
		}
	]

	const experience = [
		{ name: 'Corneliu Cîrlan PFA', title: 'Founder, Creative Director, Freelancer, Designer, Developer', period: 'February 2013 - Present' },
		{ name: 'Uncover Romania Tours', title: 'Full-stack designer', period: 'February 2015 - April 2016' },
		{ name: 'Uncover Romania', title: 'Co-founder, Web, UX / UI Designer, Developer', period: 'January 2012 - April 2016' }
	]

	return (
		<div className={`container ${styles.about}`}>
			<Head>
				<title>About Corneliu Cîrlan</title>
			</Head>

			<Header />

			<main className={`text-center ${styles.about}`}>

				{/* About me */}
				<section className={`row ${useIsInViewport(aboutRef) ? 'animate-in' : null}`} ref={aboutRef}>
					<div className='col-12 offset-md-2 col-md-8'>
						<Caption
							kicker='A little about me'
							heading="Hi, I'm Corneliu Cîrlan, the designer you're looking for"
							caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero.'
						/>
					</div>
				</section>

				{/* Photo */}
				<section className={`row ${useIsInViewport(photoRef) ? 'animate-in' : null}`} ref={photoRef}>
					{/* <div className={`col-12 offset-md-1 col-md-10 ${styles.photo}`}></div> */}

					<Image
						src={aboutMePhoto.src}
						width={aboutMePhoto.width}
						height={aboutMePhoto.height}
						placeholder='blur'
						blurDataURL={aboutMePhoto.base64}
						priority={true}
					/>
				</section>

				{/* Services & tools */}
				<section className='row'>
					{servicesAndTools.map((element, key) =>
						<div key={key} className={element.classes} ref={element.ref}>
							<Title kicker={element.title} />
							<ul className={styles.list}>
								{element.items.map((item, index) => <li key={index} className={styles.item}>{item}</li>)}
							</ul>	
						</div>
					)}
				</section>

				{/* Experience */}
				<section className='row'>
					<div className={`col-12 offset-md-2 col-md-8 ${useIsInViewport(experienceRef) ? 'animate-in' : null}`} ref={experienceRef}>
						<Caption
							kicker='Experience'
							heading="Over 10 years of experience"
							caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero.'
						/>
					</div>

					<div className={`col-12 offset-md-1 col-md-10 ${styles.experience} ${useIsInViewport(experienceListRef) ? 'animate-in' : null}`} ref={experienceListRef}>
						{experience.map((item, index) =>
							<div key={index} className={`d-flex justify-content-between flex-column flex-md-row ${styles.item}`}>
								<span>{item.name}</span>
								<span>{item.title}</span>
								<span>{item.period}</span>
							</div>
						)}
					</div>
				</section>

				{/* Let's work together */}
				<LetsWorkTogether />
			</main>

			<Footer />
		</div>
	) 
}
