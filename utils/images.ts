import path from "node:path"
import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"

export const getPhotoData = async (src: string) => {
	// Create buffer
	const buffer = src.includes("https")
		? await fetch(src).then(async res =>
				Buffer.from(await res.arrayBuffer())
		  )
		: await fs.readFile(path.join("./public", src))

	// Extract necessary data
	const { base64, metadata } = await getPlaiceholder(buffer, { size: 10 })

	// Return photo details
	return {
		src: src,
		width: metadata.width,
		height: metadata.height,
		base64: base64
	}
}

// import fs from "node:fs/promises"
// import { getPlaiceholder } from "plaiceholder"

// import PhotoData from "./interface/photo"

// export const getPhotoData = async (url: string): Promise<PhotoData> => {
// 	const file = await fs.readFile(url)

// 	const { base64, metadata } = await getPlaiceholder(file)

// 	console.log("METADATA: ", metadata)
// 	return {
// 		// src: metadata.src,
// 		width: metadata.width,
// 		height: metadata.height,
// 		base64: base64
// 	}
// }
