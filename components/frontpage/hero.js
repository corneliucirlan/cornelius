import {useRef } from 'react'
import Image from 'next/image'
import Button from '../button'
import Caption from '../caption'
import { indexCopy } from '../data/site-copy'

export default ({ hero, cta, image, imageClass }) => {

	const heroRef = useRef()

	return (
		<section className={`row opacity-0 fade-in fade-in-delay-1 flex-md-row-reverse ${hero}`} ref={heroRef}>
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

			<div className='col-12 col-md-6 d-flex flex-column justify-content-center animate-in'>
				<Caption
					kicker={indexCopy.kicker}
					heading={indexCopy.title}
					caption={indexCopy.caption}
				/>

				<div className={`${cta} d-flex justify-content-start align-items-center`}>
					<Button className={[ 'btn' ]} href='/contact' text={indexCopy.buttons.work.text} />
					<span className='btn-divider'>or</span>
					<Button className={[ 'btn' ]} href='/about' text={indexCopy.buttons.about.text} />
				</div>
			</div>
		</section>
	)
}
