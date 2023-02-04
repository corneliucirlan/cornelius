"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default () => {
	// Current path
	const pathname = usePathname()
	const router = useRouter()

	// Previous path
	const [oldPathName, setOldPathName] = useState()

	useEffect(() => {
		// Scroll to top if current path not as previous path
		if (typeof oldPathName !== undefined && oldPathName !== pathname) {
			// Update old path
			setOldPathName(pathname)

			// Push new path
			router.push(pathname)

			// Scroll to top
			window.scrollTo(0, 0)
		}
	})

	return null
}
