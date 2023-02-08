import { contactCopy } from "../../components/data/site-copy"
import DefaultTags from "../../components/head/default-tags"

export default function Head() {
	return (
		<>
			<title>{contactCopy.metadata.title}</title>
			<meta
				name="description"
				content={contactCopy.metadata.description}
			/>

			<DefaultTags />
		</>
	)
}
