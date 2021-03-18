import ReactGA from 'react-ga'

/**
 * initGA
 * 
 * Initialize Google Analytics
 * 
 * @param {string} trackingID Google Analytics tracking ID 
 */
export const initGA = (trackingID) => {
	ReactGA.initialize(trackingID)
	console.log('GA loaded')
}

/**
 * PageView
 * 
 * Track a page view in Google Analytics
 */
export const PageView = () => {
	ReactGA.pageview(window.location.pathname)
	console.log(window.location.pathname)
}

/**
 * Event
 * 
 * Add custom tracking event.
 * 
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
	ReactGA.event({
		category: category,
		action: action,
		label: label
	})
	console.log(label)
}
