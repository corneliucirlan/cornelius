import Image from "next/image"
import Header from "../../components/header"
import { aboutCopy } from "../../components/data/site-copy"
import LetsWorkTogether from "../../components/work-together"
import { getPhotoData } from "../../utils/images"

import Experience from "./experience"
import ServicesTools from "./services-tools"

export default async function AboutPage() {
	// Photo data
	const aboutImage = await getPhotoData("/images/cc-about.jpg")

	return (
		<>
			<Header />
			<main className="text-center">
				{/* About me */}
				<section className={`row opacity-0 fade-in`}>
					<div className="col-12 offset-md-2 col-md-8">
						<h4 className="text-uppercase">{aboutCopy.kicker}</h4>
						<h1>{aboutCopy.title}</h1>
						<p>{aboutCopy.caption}</p>
					</div>
				</section>

				{/* Photo */}
				<section className={`row opacity-0 fade-in`}>
					<Image
						src={aboutImage.src}
						width={aboutImage.width}
						height={aboutImage.height}
						loading="lazy"
						placeholder="blur"
						blurDataURL={aboutImage.base64}
						alt="Corneliu Cîrlan"
					/>
				</section>

				{/* Services & tools */}
				<ServicesTools />

				{/* Experience */}
				<Experience />

				{/* Let's work together */}
				<LetsWorkTogether />
			</main>
		</>
	)
}
