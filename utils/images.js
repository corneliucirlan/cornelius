import { getPlaiceholder } from 'plaiceholder'

export const getPhotoData = async url => {

	const { base64, img } = await getPlaiceholder(url)

	return {
		src: img.src,
		width: img.width,
		height: img.height,
		base64: base64
	}
}
