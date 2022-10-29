import { motion } from "framer-motion"

import { animation } from "../../utils/animation"

export default ({ detail, className, listClasses }) =>
	<motion.article
		variants={animation}
		className={className}
	>
		<h4 className="text-uppercase">{detail.title}</h4>
		{Array.isArray(detail.text) ? (
			<ul className={listClasses}>
				{detail.text.map((role, key) => (
					<li key={key} className="h4-project">
						{role}
					</li>
				))}
			</ul>
		) : (
			<span className="h4-project">{detail.text}</span>
		)}
	</motion.article>
