import PhotoData from "./photo"

export default interface Card {
	image: PhotoData
	title: string
	caption: string
	href: string
	target: React.HTMLAttributeAnchorTarget
	classes: Array<string>
	source: string | null
}
