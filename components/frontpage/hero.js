import {useRef } from 'react'
import Image from 'next/image'
import Button from '../button'
import Caption from '../caption'

export default ({ hero, cta, image, imageClass }) => {

	const heroRef = useRef()

	return (
		<section className={`row flex-md-row-reverse ${hero}`} ref={heroRef}>
			<div className={`col-12 col-md-6 ${imageClass}`}>
				<Image
					src={image.src}
					width={image.width}
					height={image.height}
					placeholder='blur'
					blurDataURL={image.base64}
					priority={true}
					quality='100'
				/>
			</div>

			<div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
				<Caption
					kicker='Corneliu Cîrlan'
					heading='Website and user experience designer'
					caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero.'
				/>
				
				<div className={`${cta} d-flex justify-content-start align-items-center`}>
					<Button className={['btn']} href='/contact' text="Let's work together" />
					<span className='btn-divider'>or</span>
					<Button className={['btn']} href='/about' text='Read about me' />
				</div>
			</div>
		</section>
	)
}

