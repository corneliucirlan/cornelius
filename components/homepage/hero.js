import Image from "next/image"

import Button from "../button"
import { indexCopy } from "../data/site-copy"
import { getPhotoData } from "../../utils/images"

export default async function HeroSection({ hero, cta, imageClass }) {
	// Hero Image
	// const heroImage = {
	// 	light: await getPhotoData("/images/cc-hero-image-closed-white.png"),
	// 	dark: await getPhotoData("/images/cc-hero-image-closed-darker.png")
	// }

	const heroImage = await getPhotoData(
		"/images/cc-hero-image-closed-darker.png"
	)

	return (
		<section
			className={`row opacity-0 fade-in fade-in-delay-1 flex-md-row-reverse ${hero}`}
		>
			<div className={`col-12 col-md-6 ${imageClass}`}>
				{heroImage && (
					<Image
						src={heroImage.src}
						priority={true}
						fill={true}
						// placeholder="blur"
						// blurDataURL={heroImage.base64}
						style={{ objectFit: "cover", overflow: "visible" }}
						alt="Corneliu Cîrlan"
					/>
				)}
			</div>

			<div className="col-12 col-md-6 d-flex flex-column justify-content-center">
				<h4 className="text-uppercase">{indexCopy.kicker}</h4>
				<h1>{indexCopy.title}</h1>
				<p>{indexCopy.caption}</p>
				<div
					className={`${cta} d-flex justify-content-start align-items-center`}
				>
					<Button
						className={["btn"]}
						href="/contact"
						text={indexCopy.buttons.work.text}
					/>
					<span className="btn-divider">or</span>
					<Button
						className={["btn"]}
						href="/about"
						text={indexCopy.buttons.about.text}
					/>
				</div>
			</div>
		</section>
	)
}
