import Metadata from "../../utils/interface/metadata"

export default ({
	ogUrl,
	ogTitle,
	ogDescription,
	ogImage,
	ogType
}: Metadata) => (
	<>
		{/* Open Graph */}
		<meta name="og:url" content={ogUrl} />
		<meta name="og:title" content={ogTitle} />
		<meta name="og:description" content={ogDescription} />
		<meta name="og:image" content={ogImage} />
		<meta name="og:type" content={ogType} />

		{/* Twitter */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@corneliucirlan" />
		<meta name="twitter:creator" content="@corneliucirlan" />
		<meta name="twitter:title" content={ogTitle} />
		<meta name="twitter:description" content={ogDescription} />
		<meta name="twitter:image" content={ogImage} />
		<meta name="twitter:image:alt" content={ogTitle} />
	</>
)
