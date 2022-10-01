import { Html, Head, Main, NextScript } from 'next/document'
import loader from '../components/loader-styles'
import SideContact from '../components/side-contact'

export default () => (
	<Html>
		<Head />
		<head>
			<style>{loader}</style>
		</head>
		<body className='active-loader'>

			{/* Side contact me button */}
			<SideContact />

			<div id='loaderContainer' className='loader-container'>
				<div id='loaderCircle' className='loader-circle' />
			</div>

			<Main />
			<NextScript />
		</body>
	</Html>
)
