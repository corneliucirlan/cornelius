export default interface PhotoData {
	src: string
	width: number
	height: number
	base64?: string
	alt: string
	placeholder: string
	blurDataURL: string | undefined
}
