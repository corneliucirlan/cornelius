export default interface ButtonProps {
	href: string
	className: Array<string>
	text: string
	hasIcon?: boolean
	hasTarget?: React.HTMLAttributeAnchorTarget
	isFaded?: boolean
	delay?: number
}
