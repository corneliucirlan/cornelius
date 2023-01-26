import { filter } from 'domutils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRef } from 'react'
import useImageColor from "use-image-color";
import { useIsInViewport } from '../utils/transitions'

// Remove HTML tags and hashtags from strings
const cleanString = string => {

	// String is null
	if ((string === null) || (string === '') || (string === undefined))
		return

	// Remove hashtags
	string = string.replace(/\#[0-9a-zA-Z]+/ig, '')

	// Remove tags
	string = string.replace(/(<([^>]+)>)/ig, '')

	return string
}

const isColorLight = (color) => {
	const hex = color.replace("#", "");
	const c_r = parseInt(hex.substring(0, 0 + 2), 16);
	const c_g = parseInt(hex.substring(2, 2 + 2), 16);
	const c_b = parseInt(hex.substring(4, 4 + 2), 16);
	const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
	return brightness > 155;
}

export default ({ cardImage, cardTitle, cardCaption, cardHref, cardTarget, cardClasses, cardSource }) => {

	const cardRef = useRef()

	const { colors } = useImageColor(cardImage.src, { cors: true, colors: 2 })

	return (
		<article
			className={`opacity-0 ${cardClasses.join(" ")} ${
				useIsInViewport(cardRef) ? "fade-in" : null
			}`}
			ref={cardRef}
		>
			<div className="card-wrapper">
				<Image
					src={cardImage.src}
					width={cardImage.width}
					height={cardImage.height}
					alt={cardImage.alt}
					placeholder={cardImage.placeholder}
					blurDataURL={cardImage.blurDataURL}
					layout={cardImage.layout}
					/>

				<Link href={cardHref} passHref>
					<a target={cardTarget} rel="noopener nofollow noreferrer">
						<div className="card-data">
							<h2 className={`card-title ${colors && isColorLight(colors[0]) ? 'card-title-dark' : 'card-title-light'}`}>
								{cardTitle}
							</h2>
							{cardSource === "instagram" && (
								<svg
									className="card-icon-ig"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="23.995"
									viewBox="0 0 24 23.995"
								>
									<path
										id="instagram"
										d="M11.928,37.67a6.152,6.152,0,1,0,6.152,6.152A6.142,6.142,0,0,0,11.928,37.67Zm0,10.151a4,4,0,1,1,4-4,4.007,4.007,0,0,1-4,4Zm7.838-10.4a1.435,1.435,0,1,1-1.435-1.435A1.432,1.432,0,0,1,19.766,37.419Zm4.075,1.456A7.1,7.1,0,0,0,21.9,33.848a7.148,7.148,0,0,0-5.028-1.938c-1.981-.112-7.919-.112-9.9,0a7.137,7.137,0,0,0-5.028,1.933A7.124,7.124,0,0,0,.009,38.87c-.112,1.981-.112,7.919,0,9.9A7.1,7.1,0,0,0,1.948,53.8a7.157,7.157,0,0,0,5.028,1.938c1.981.112,7.919.112,9.9,0A7.1,7.1,0,0,0,21.9,53.8a7.148,7.148,0,0,0,1.938-5.028C23.953,46.789,23.953,40.856,23.841,38.875ZM21.281,50.9A4.049,4.049,0,0,1,19,53.176c-1.579.626-5.327.482-7.073.482s-5.5.139-7.073-.482A4.049,4.049,0,0,1,2.574,50.9c-.626-1.579-.482-5.327-.482-7.073s-.139-5.5.482-7.073a4.049,4.049,0,0,1,2.281-2.281c1.579-.626,5.327-.482,7.073-.482s5.5-.139,7.073.482a4.049,4.049,0,0,1,2.281,2.281c.626,1.579.482,5.327.482,7.073S21.908,49.321,21.281,50.9Z"
										transform="translate(0.075 -31.825)"
										fill="#fff"
									/>
								</svg>
							)}
							<p className="card-caption">
								{cleanString(cardCaption)}
							</p>
							{cardSource !== "instagram" && (
								<span className="btn-primary card-link">
									View details
								</span>
							)}
						</div>
					</a>
				</Link>
			</div>
		</article>
	);
}
