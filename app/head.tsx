import { indexCopy } from "../global/data/site-copy"
import DefaultTags from "../components/head/default-tags"
import SocialMedia from "../components/head/social-media"

export default function Head() {
	return (
		<>
			<title>{indexCopy.metadata.title}</title>
			<meta name="description" content={indexCopy.metadata.description} />

			<DefaultTags />

			<SocialMedia
				ogUrl={indexCopy.metadata.ogUrl}
				ogTitle={indexCopy.metadata.ogTitle}
				ogDescription={indexCopy.metadata.ogDescription}
				ogImage={indexCopy.metadata.ogImage}
				ogType={indexCopy.metadata.ogType}
			/>
		</>
	)
}
