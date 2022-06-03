import React from 'react'
import { Helmet } from 'react-helmet'

import metadata from './../data/metadata'

const Metadata = () => {
	return (
		<Helmet>
			<meta charset='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			<title>{metadata.title}</title>
			<meta name='description' content={metadata.description} />

			{/* <!--  Essential META Tags --> */}

			<meta property='og:title' content={metadata.title} />
			<meta property='og:description' content={metadata.description} />
			<meta property='og:image' content={metadata.image} />
			<meta property='og:url' content={metadata.url} />
			<meta name='twitter:card' content='summary_large_image' />

			{/* <!--  Non-Essential, But Recommended --> */}

			<meta property='og:site_name' content={metadata.title} />
			<meta name='twitter:image:alt' content={metadata.imageAlt} />

			{/* <!--  Non-Essential, But Required for Analytics --> */}

			<meta property='fb:app_id' content={metadata.facebookAppID} />
			<meta name='twitter:site' content={metadata.twitterUsername} />

			{/* <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#336397' />
			<meta name='apple-mobile-web-app-title' content={metadata.title} />
			<meta name='application-name' content={metadata.title} />
			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta name='theme-color' content='#ffffff' /> */}

			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://www.google-analytics.com' />

			{/* <link rel='manifest' href='/manifest.json' /> */}

			<script type="application/ld+json">{JSON.stringify(metadata.schema)}</script>

		</Helmet>
	)
}

export default Metadata
