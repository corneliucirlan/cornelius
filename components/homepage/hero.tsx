import Button from "../button"
import { indexCopy } from "../data/site-copy"

interface HeroSection {
	hero: string
	cta: string
	imageClass: string
}

export default ({ hero, cta, imageClass }: HeroSection) => {
	return (
		<section
			className={`row opacity-0 fade-in fade-in-delay-1 flex-md-row-reverse ${hero}`}
		>
			<div className={`col-12 col-md-6 ${imageClass}`}></div>

			<div className="col-12 col-md-6 d-flex flex-column justify-content-center">
				<span className="h4 text-uppercase">{indexCopy.kicker}</span>
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
