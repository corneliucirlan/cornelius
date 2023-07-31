import { getPlaiceholder } from "plaiceholder"

import PhotoData from "./interface/photo"

export const getPhotoData = async (url: string): Promise<PhotoData> => {
	const { base64, img } = await getPlaiceholder(url)

	return {
		src: img.src,
		width: img.width,
		height: img.height,
		base64: base64
	}
}
