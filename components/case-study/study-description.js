import { motion } from "framer-motion"

import { animation } from "../../utils/animation"

export default ({ paragraph, className }) =>
	<motion.p
		variants={animation}
		className={className}
	>
		{paragraph}
	</motion.p>
