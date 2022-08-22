import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import Title from '../components/title'
import Button from '../components/button'
import LetsWorkTogether from '../components/work-together'
import { setTransition } from '../utils/transitions'

import { animated } from 'react-spring'

import styles from '../sass/modules/About.module.sass'
import { useRef } from 'react'

export default () => {

	const aboutRef = useRef()
	const photoRef = useRef()
	const servicesRef = useRef()
	const toolsRef = useRef()
	const experienceRef = useRef()
	const experienceListRef = useRef()

	const services = [
		'Art direction',
		'Web & mobile',
		'Brand identity',
		'UX & UI',
		'Iconography',
		'Animation',
		'Photography'
	]
	const tools = [
		'Photoshop',
		'Illustrator',
		'XD',
		'Dimension',
		'After Effects',
		'Lightroom',
		'Figma',
		'Visual Studio Code'
	]
	const experience = [
		{
			name: 'Corneliu Cîrlan PFA',
			title: 'Founder, Creative Director, Freelancer, Designer, Developer',
			period: 'February 2013 - Present'
		},
		{
			name: 'Uncover Romania Tours',
			title: 'Full-stack designer',
			period: 'February 2015 - April 2016'
		},
		{
			name: 'Uncover Romania',
			title: 'Co-founder, Web, UX / UI Designer, Developer',
			period: 'January 2012 - April 2016'
		}
	]

	return (
		<div className={`container ${styles.about}`}>
			<Head>
				<title>About Corneliu Cîrlan</title>
			</Head>

			<Header />

			{/* Side contact me button */}
			<Button
				href='/contact'
				className={['side-contact', 'd-none', 'd-md-block']}
				hasIcon={true}
				text='Contact me'
			/>

			<main className={`text-center ${styles.about}`}>

				{/* About me */}
				<animated.section className='row' style={setTransition(aboutRef)} ref={aboutRef}>
					<div className='col-12 offset-md-2 col-md-8'>
						<Title
							kicker='A little about me'
							heading="Hi, I'm Corneliu Cîrlan & I'm the designer you're looking for"
						/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh.</p>
					</div>

				</animated.section>

				{/* Photo */}
				<animated.section className='row' style={setTransition(photoRef)} ref={photoRef}>
					<div className={`col-12 offset-md-1 col-md-10 ${styles.photo}`}></div>
				</animated.section>

				{/* Services & tools */}
				<section className='row'>

					{/* Services */}
					<animated.div className={`col-12 offset-md-1 col-md-4 ${styles.services}`} style={setTransition(servicesRef, { x: -20, y: 0 })} ref={servicesRef}>
						<Title kicker='Services' />
						<ul className={styles.list}>
							{services.map((service, index) => <li key={index} className={styles.item}>{service}</li>)}
						</ul>
					</animated.div>
					
					{/* Tools */}
					<animated.div className='col-12 offset-md-2 col-md-4' style={setTransition(toolsRef, { x: 20, y: 0 })} ref={toolsRef}>
						<Title kicker='Tools I use' />
						<ul className={styles.list}>
							{tools.map((tool, index) => <li key={index} className={styles.item}>{tool}</li>)}
						</ul>
					</animated.div>
				</section>

				{/* Experience */}
				<section className='row'>
					<animated.div className='col-12 offset-md-2 col-md-8' style={setTransition(experienceRef)} ref={experienceRef}>
						<Title
							kicker='Experience'
							heading='Over 10 years of experience'
							/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh.</p>
					</animated.div>

					<animated.div className={`col-12 offset-md-1 col-md-10 ${styles.experience}`} style={setTransition(experienceListRef)} ref={experienceListRef}>
						{experience.map((item, index) =>
							<div key={index} className={`d-flex justify-content-between flex-column flex-md-row ${styles.item}`}>
								<span>{item.name}</span>
								<span>{item.title}</span>
								<span>{item.period}</span>
							</div>
						)}
					</animated.div>
				</section>

				{/* Let's work together */}
				<LetsWorkTogether />
			</main>

			<Footer />
		</div>
	) 
}
