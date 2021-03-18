const 	fullName = 'Corneliu Cîrlan',
		jobTitle = 'Designer. Developer'

export default {
	title: fullName + " - " + jobTitle,
	description: "Corneliu is a designer working with individuals and businesses to grow their worth.",
	image: "",
	url: "https://www.corneliucirlan.com",
	schema: {
    	"@context": "https://schema.org/",
    	"@type": "Person",
    	name: fullName,
    	url: "https://www.corneliucirlan.com",
    	image: "",
    	sameAs: [
			"https://www.facebook.com/corneliucirlan",
			"https://twitter.com/corneliucirlan",
			"https://www.instagram.com/corneliucirlan",
			"https://www.linkedin.com/in/corneliucirlan",
			"https://github.com/corneliucirlan",
			"https://dribbble.com/corneliucirlan",
			"https://www.behance.net/corneliucirlan",
		],
		jobTitle: jobTitle,
		worksFor: {
			"@type": "Organization",
			name: "Cîrlan Corneliu PFA",
		},
	},
	imageAlt: fullName,
	facebookAppID: "521959071625533",
	twitterUsername: "@corneliucirlan",
};
