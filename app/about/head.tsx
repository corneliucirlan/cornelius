import { aboutCopy } from "../../global/data/site-copy"
import DefaultTags from "../../components/head/default-tags"
import SocialMedia from "../../components/head/social-media"

export default function Head() {
	return (
		<>
			<title>{aboutCopy.metadata.title}</title>
			<meta name="description" content={aboutCopy.metadata.description} />

			<DefaultTags />
			<SocialMedia
				ogUrl={aboutCopy.metadata.ogUrl}
				ogTitle={aboutCopy.metadata.ogTitle}
				ogDescription={aboutCopy.metadata.ogDescription}
				ogImage={aboutCopy.metadata.ogImage}
				ogType={aboutCopy.metadata.ogType}
			/>
		</>
	)
}
