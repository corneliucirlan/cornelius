import { contactCopy } from "../../components/data/site-copy"
import DefaultTags from "../../components/head/default-tags"
import SocialMedia from "../../components/head/social-media"
import Script from "next/script"

export default function Head() {
	function addProductJsonLd() {
		return {
			__html: `
					{
						"@context": "https://schema.org",
						"@type": "Person",
						"name": "John Doe",
						"email": "johndoe@example.com",
						"jobTitle": "Software Developer",
						"address": {
						"@type": "PostalAddress",
						"streetAddress": "123 Main St.",
						"addressLocality": "Anytown",
						"addressRegion": "CA",
						"postalCode": "12345",
						"addressCountry": "US"
						}
					}
					`
		}
	}

	const person = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "John Doe",
		email: "johndoe@example.com",
		jobTitle: "Software Developer",
		address: {
			"@type": "PostalAddress",
			streetAddress: "123 Main St.",
			addressLocality: "Anytown",
			addressRegion: "CA",
			postalCode: "12345",
			addressCountry: "US"
		}
	}

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

			{/* <Script
				type="application/ld+json"
				dangerouslySetInnerHTML={addProductJsonLd()}
				key="product-jsonld"
			/> */}
			{/* <Script></Script> */}
			<Script type="application/ld+json">
				${JSON.stringify(person)}
			</Script>
		</>
	)
}
