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
							kicker={aboutCopy.kicker}
							heading={aboutCopy.title}
							caption={aboutCopy.caption}
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
					<div className={`col-12 offset-md-1 col-md-4 ${styles.services}`} ref={servicesRef}>
						<Title kicker={aboutCopy.services.title} />
						<ul className={styles.list}>
							{aboutCopy.services.list.map(( item, index ) => <li key={index} className={styles.item}>{item}</li> )}
						</ul>
					</div>

					<div className='col-12 offset-md-2 col-md-4' ref={toolsRef}>
						<Title kicker={aboutCopy.tools.title} />
						<ul className={styles.list}>
							{aboutCopy.tools.list.map(( item, index ) => <li key={index} className={styles.item}>{item}</li> )}
						</ul>
					</div>
				</section>

				{/* Experience */}
				<section className='row'>
					<div className={`col-12 offset-md-2 col-md-8 ${useIsInViewport(experienceRef) ? 'animate-in' : null}`} ref={experienceRef}>
						<Caption
							kicker={aboutCopy.experience.kicker}
							heading={aboutCopy.experience.title}
							caption={aboutCopy.experience.caption}
						/>
					</div>

					<div className={`col-12 offset-md-1 col-md-10 ${styles.experience} ${useIsInViewport(experienceListRef) ? 'animate-in' : null}`} ref={experienceListRef}>
						{aboutCopy.experience.list.map((item, index) =>
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
