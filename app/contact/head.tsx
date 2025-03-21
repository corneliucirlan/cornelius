import { contactCopy } from "@/global/data/site-copy"
import DefaultTags from "@/global/components/head/default-tags"
import SocialMedia from "@/global/components/head/social-media"

export default () => {
	return (
		<>
			<title>{contactCopy.metadata.title}</title>
			<meta
				name="description"
				content={contactCopy.metadata.description}
			/>

			<DefaultTags />
			<SocialMedia
				ogUrl={contactCopy.metadata.ogUrl}
				ogTitle={contactCopy.metadata.ogTitle}
				ogDescription={contactCopy.metadata.ogDescription}
				ogImage={contactCopy.metadata.ogImage}
				ogType={contactCopy.metadata.ogType}
			/>
		</>
	)
}
