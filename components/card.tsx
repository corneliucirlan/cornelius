"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, RefObject } from "react"
import useImageColor from "use-image-color"
import { useIsInViewport } from "../utils/transitions"
import Card from "../utils/interface/card"

/**
 * Clean a string by removing hashtags and HTML tags.
 * @param string - The input string to be cleaned.
 * @returns The cleaned string or `undefined` if the input string is `null`, empty, or `undefined`.
 */
const cleanString = (string: string): string | undefined => {
	// Return `undefined` if the input string is null, empty, or undefined
	if (string === null || string === "" || string === undefined)
		return undefined

	// Remove hashtags from the string using a regular expression
	string = string.replace(/\#[0-9a-zA-Z]+/gi, "")

	// Remove HTML tags from the string using a regular expression
	string = string.replace(/(<([^>]+)>)/gi, "")

	// Return the cleaned string
	return string
}

/**
 * Check if a color is considered light or dark based on its brightness.
 * @param color - The color in hexadecimal format (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns `true` if the color is light, `false` if it is dark.
 */
const isColorLight = (color: string): boolean => {
	// Remove the "#" symbol from the color hex code
	const hex = color.replace("#", "")

	// Parse the red, green, and blue components from the hex code
	const red = parseInt(hex.substring(0, 2), 16)
	const green = parseInt(hex.substring(2, 4), 16)
	const blue = parseInt(hex.substring(4, 6), 16)

	// Calculate the brightness of the color using a weighted average
	const brightness = (red * 299 + green * 587 + blue * 114) / 1000

	// Return `true` if the color is considered light (brightness > 155), `false` otherwise
	return brightness > 155
}

export default ({
	image,
	title,
	caption,
	href,
	target,
	classes,
	source
}: Card) => {
	// Card ref
	const cardRef: RefObject<HTMLElement> = useRef(null)

	// Get image predominant colors
	const { colors } = useImageColor(image.src, { cors: true, colors: 2 })
	return (
		<article
			className={`opacity-0 ${classes.join(" ")} ${
				useIsInViewport(cardRef) && "fade-in fade-in-delay-1"
			}`}
			ref={cardRef}
		>
			<Image
				src={image.src}
				width={image.width}
				height={image.height}
				alt={image.alt ?? ""}
				placeholder="blur"
				blurDataURL={image.blurDataURL}
				loading="lazy"
			/>

			<Link
				href={href}
				rel="noopener nofollow noreferrer"
				target={target}
			>
				<div className="card-data">
					{title && (
						<h2
							className={`card-title ${
								colors && isColorLight(colors[0])
									? "card-title-dark"
									: "card-title-light"
							}`}
						>
							{title}
						</h2>
					)}
					{source === "instagram" && (
						<svg
							className="card-icon-ig"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="23.995"
							viewBox="0 0 24 23.995"
						>
							<path
								id="instagram"
								d="M11.928,37.67a6.152,6.152,0,1,0,6.152,6.152A6.142,6.142,0,0,0,11.928,37.67Zm0,10.151a4,4,0,1,1,4-4,4.007,4.007,0,0,1-4,4Zm7.838-10.4a1.435,1.435,0,1,1-1.435-1.435A1.432,1.432,0,0,1,19.766,37.419Zm4.075,1.456A7.1,7.1,0,0,0,21.9,33.848a7.148,7.148,0,0,0-5.028-1.938c-1.981-.112-7.919-.112-9.9,0a7.137,7.137,0,0,0-5.028,1.933A7.124,7.124,0,0,0,.009,38.87c-.112,1.981-.112,7.919,0,9.9A7.1,7.1,0,0,0,1.948,53.8a7.157,7.157,0,0,0,5.028,1.938c1.981.112,7.919.112,9.9,0A7.1,7.1,0,0,0,21.9,53.8a7.148,7.148,0,0,0,1.938-5.028C23.953,46.789,23.953,40.856,23.841,38.875ZM21.281,50.9A4.049,4.049,0,0,1,19,53.176c-1.579.626-5.327.482-7.073.482s-5.5.139-7.073-.482A4.049,4.049,0,0,1,2.574,50.9c-.626-1.579-.482-5.327-.482-7.073s-.139-5.5.482-7.073a4.049,4.049,0,0,1,2.281-2.281c1.579-.626,5.327-.482,7.073-.482s5.5-.139,7.073.482a4.049,4.049,0,0,1,2.281,2.281c.626,1.579.482,5.327.482,7.073S21.908,49.321,21.281,50.9Z"
								transform="translate(0.075 -31.825)"
								fill="#fff"
							/>
						</svg>
					)}
					<p className="card-caption">{cleanString(caption)}</p>
					{source !== "instagram" && (
						<span className="btn-primary card-link">
							View details
						</span>
					)}
				</div>
			</Link>
		</article>
	)
}
