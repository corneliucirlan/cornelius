import Head from 'next/head'

import styles from '../sass/modules/About.module.sass'

export default () => {
	return (
		<div>
			<Head>
				<title>About Corneliu Cîrlan</title>
			</Head>

			<div className={styles.aboutme}>About me</div>
		</div>
	) 
}
