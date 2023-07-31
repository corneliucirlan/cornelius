import PhotoData from "./photo"

export default interface Post {
	image: PhotoData
	title: string
	caption: string
	permalink: string
	target: React.HTMLAttributeAnchorTarget
	classes: Array<string>
	source: string | null
}
