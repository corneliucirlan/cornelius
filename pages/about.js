import Head from 'next/head'

import Header from '../components/Header'

import styles from '../sass/modules/About.module.sass'

export default () => {
	return (
		<div className={`container ${styles.about}`}>
			<Head>
				<title>About Corneliu Cîrlan</title>
			</Head>

			<Header />
		</div>
	) 
}
