import Image from 'next/image'

import projects from '../components/data/projects'
import Header from '../components/header'
import Footer from '../components/footer'
import Button from '../components/button'
import { getPhotoData } from '../utils/images'

import styles from '../sass/modules/caseStudy.module.sass'

export const getStaticPaths = async () => {

	return { paths: projects.map(project => ({
		params: {
			case: project.case.toString(),
		},
	})), fallback: false }
}

export const getStaticProps = async ({ params }) => {

	// Get current case study
	const caseStudy = projects.filter(project => project.case === params.case)[0]

	// Get all base64 images
	let photos = await Promise.all(caseStudy.images.map(async image =>
		getPhotoData(`/images/projects/${caseStudy.case}/${image}`)
	))

	// Add photos
	caseStudy.photos = photos

	return { props: { project: caseStudy } }
}

export default ({ project }) => {

	return (
		<div className='container'>
			<Header />

			<main>
				<div className='row'>

					<section className='col-12 col-md-5'>

						{/* Project title */}
						<article className='opacity-0 fade-in fade-in-delay-1'>
							<h4 className='text-uppercase'>{project.type === 'study' ? 'Case study' : 'Project'}</h4>
							<h1>{project.title}</h1>
						</article>

						{project.details.map(( detail, key ) =>
							<article key={key} className={`opacity-0 fade-in fade-in-delay-${key+1} ${styles.subtitle}`}>
								<h4 className='text-uppercase'>{detail.title}</h4>
								{Array.isArray(detail.text) ?
									<ul className={styles.ul}>
										{detail.text.map((role, key) =>
											<li key={key} className='h4-project'>{role}</li>
										)}
									</ul> :
									<span className='h4-project'>{detail.text}</span>
								}
							</article>
						)}
					</section>

					<section className='col-12 col-md-7'>
						{project.description && project.description.map((paragraph, key) =>
							<p key={key} className={`opacity-0 fade-in fade-in-delay-${key+1}`} style={{ marginBottom: '3rem' }}>{paragraph}</p>
						)}

						{project.behanceURL && <Button
							href={project.behanceURL}
							className={[ 'btn' ]}
							hasTarget={project.target}
							text={project.type === 'study' ? 'View case study on Behance' : 'View project'}
						/>}
					</section>

					<section className={`col ${styles.images}`}>
						{project.photos && project.photos.map(( image, key ) =>
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
					</section>
				</div>
			</main>

			<Footer />	
		</div>
	)
}
