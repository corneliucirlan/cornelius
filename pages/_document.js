import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from '../components/loader-styles'

export default () => {

	return (
		<Html>
			<Head />
			<head>
				<style>{loader}</style>
			</head>
			<body className='active-loader'>
				<div id='globalLoader' className='loader-container'>
					<div className='loader-circle' />
				</div>

				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
