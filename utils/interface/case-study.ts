export interface Detail {
	title?: string
	text: string | Array<string>
}

export interface CaseStudy {
	type: string
	imageURL: string
	id?: string
	title: string
	caption: string
	description?: Array<string>
	permalink: string
	details?: Array<Detail>
	source?: boolean | null
	behanceURL?: string
	target?: React.HTMLAttributeAnchorTarget
	images?: Array<string>
}
