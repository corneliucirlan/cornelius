import Card from "./card"

export interface Project {
	kicker: string
	heading: string
	posts: Card[] | false
}

export interface Source {
	url: string
	params: Record<string, string> | URLSearchParams | undefined
	classes: string[]
	type: string
}
