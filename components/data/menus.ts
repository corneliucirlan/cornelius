import { socialMediaIcons } from "./svg-icons"
import parse from "html-react-parser"

// Header menu
export const headerMenu = [
	{
		title: "About",
		url: "/about",
		target: "_self"
	},
	{
		title: "Contact",
		url: "/contact",
		target: "_self"
	},
	{
		title: "Dribbble",
		url: "https://dribbble.com/corneliucirlan",
		target: "_blank"
	},
	{
		title: "Behance",
		url: "https://www.behance.net/corneliucirlan",
		target: "_blank"
	},
	{
		title: "Github",
		url: "https://github.com/corneliucirlan",
		target: "_blank"
	}
]

// Footer menu
export const footerMenu = [
	{
		title: "Home",
		url: "/",
		target: "_self"
	},
	{
		title: "About",
		url: "/about",
		target: "_self"
	},
	{
		title: "Contact",
		url: "/contact",
		target: "_self"
	}
]

// Social media sites
export const socialLinks = [
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.linkedin)
	},
	{
		title: "Dribbble",
		url: "https://dribbble.com/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.dribbble)
	},
	{
		title: "Behance",
		url: "https://www.behance.net/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.behance)
	},
	{
		title: "Github",
		url: "https://github.com/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.github)
	},
	{
		title: "Instagram",
		url: "https://www.instagram.com/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.instagram)
	},
	{
		title: "Twitter",
		url: "https://twitter.com/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.twitter)
	},
	{
		title: "Facebook",
		url: "https://www.facebook.com/corneliucirlan",
		rel: "noopener noreferrer nofollow",
		target: "_blank",
		svg: parse(socialMediaIcons.facebook)
	}
]
