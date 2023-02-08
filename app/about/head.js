import { aboutCopy } from "../../components/data/site-copy"
import DefaultTags from "../../components/head/default-tags"

export default function Head() {
	return (
		<>
			<title>{aboutCopy.metadata.title}</title>
			<meta name="description" content={aboutCopy.metadata.description} />

			<DefaultTags />
		</>
	)
}
