import Image from 'next/image'

import { caseStudies } from '../components/data/projects'
import Header from '../components/header'
import Footer from '../components/footer'
import Title, { SubTitle } from '../components/title'
import Button from '../components/button'
import { getPhotoData } from '../utils/images'

import styles from '../sass/modules/caseStudy.module.sass'

export const getStaticPaths = async () => {

	return { paths: caseStudies.map((study) => ({
		params: {
			case: study.case.toString(),
		},
	})), fallback: false }
}

export const getStaticProps = async ({ params }) => {

	// Get current case study
	const caseStudy = caseStudies.filter(c => c.case === params.case)[0]

	// Get all base64 images
	let images = await Promise.all(caseStudy.images.map(async image =>
		getPhotoData(`/images/${caseStudy.case}/${image}`)
	))

	// Replace original images
	caseStudy.images = images

	return { props: { caseStudy: caseStudy } }
}

export default ({ caseStudy }) => {

	return (
		<div className={`container ${styles.container}`}>
			<Header />

			<main className='row'>
				<div className='col-12 col-md-5'>
					{caseStudy.title && <Title
						kicker='Case study'
						heading={caseStudy.title}
					/>}

					<SubTitle className={styles.subtitle} element={caseStudy.role} title='My role' />
					<SubTitle className={styles.subtitle} element={caseStudy.client} title='Client' />
					<SubTitle className={styles.subtitle} element={caseStudy.period} title='Period' />
				</div>

				<div className='col-12 col-md-7'>
					{caseStudy.description && caseStudy.description.map((paragraph, key) =>
						<p key={key} className={`animate-in animate-in-delay-${key}`} style={{ marginBottom: '3rem' }}>{paragraph}</p>
					)}

					{caseStudy.behanceURL && <Button
						href={caseStudy.behanceURL}
						className={[ 'btn' ]}
						hasTarget={caseStudy.target}
						text='View case study on Behance'
					/>}
				</div>

				<div className={`col ${styles.images}`}>
					{caseStudy.images && caseStudy.images.map((image, key) =>
						<div className={styles.image} key={key}>
							<Image
								src={image.src}
								width={image.width}
								height={image.height}
								placeholder='blur'
								blurDataURL={image.base64}
							/>
						</div>
					)}
				</div>

			</main>

			<Footer />	
		</div>
	)
}
