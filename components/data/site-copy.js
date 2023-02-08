const separator = "|"

const websiteTitle = `Corneliu Cîrlan - Freelance Web & Mobile Designer`
const indexMetaDescription = `I believe that everyone has the potential to achieve great things, and I am dedicated to helping them reach their goals and dreams.`

const aboutTitle = `About ${separator} ${websiteTitle}`
const aboutDescription = `My love for computers and programming led me to UI design where I create user-friendly interfaces.`

const contactTitle = `Contact ${separator} ${websiteTitle}`
const contactDescription = `If you have a project, please let me know. I'm happy to help with any project, no matter the size. And if you just want to say hi, feel free! Thank you for considering me.`

// Homepage copy
export const indexCopy = {
	metadata: {
		title: websiteTitle,
		description: indexMetaDescription,
		ogUrl: "/",
		ogTitle: websiteTitle,
		ogDescription: indexMetaDescription,
		ogImage: "/images/cc-about.jpg",
		ogType: "website"
	},
	kicker: `Corneliu Cîrlan`,
	title: `Website and user interface designer`,
	caption: `I believe that everyone has the potential to achieve great things, and I am dedicated to helping them reach their goals and dreams.`,
	buttons: {
		work: { text: `Let's work together` },
		about: { text: `Read about me` }
	},
	sections: {
		studies: {
			kicker: `Curated projects`,
			title: `Case studies`
		},
		personal: {
			kicker: `Side hussles`,
			title: `Personal projects`
		},
		dribbble: {
			kicker: `What's new`,
			title: `Latest on Dribbble`
		},
		instagram: {
			kicker: `On socials`,
			title: `Latest on Instagram`
		}
	}
}

// About page copy
export const aboutCopy = {
	metadata: {
		title: aboutTitle,
		description: aboutDescription,
		ogUrl: "/about",
		ogTitle: aboutTitle,
		ogDescription: aboutDescription,
		ogImage: "/images/cc-about.jpg",
		ogType: "website"
	},
	kicker: "A little about me",
	title: `Hi, I'm Corneliu, the designer you're looking for`,
	caption: `My love for computers and programming led me to UI design where I create user-friendly interfaces. Pursuing a career in this field, I constantly upgrade my skills and bring a blend of UX understanding and design aesthetics to my work. I am now a seasoned UI designer with a passion for creating functional and visually appealing designs.`,
	experience: {
		kicker: "Experience",
		title: "Over 10 years of experience",
		caption: `Freelance UI designer with 10+ years of experience, delivering visually appealing and user-friendly designs that communicate effectively to the target audience. Skilled in design principles and attention to detail, my goal is to create engaging user experiences that help clients achieve their business objectives.`,
		list: [
			{
				name: "Corneliu Cîrlan Design",
				title: "Founder, Creative Director, Designer, Developer",
				period: "February 2013 - Present"
			},
			{
				name: "Uncover Romania Tours",
				title: "Web & Mobile, UI Designer, Developer",
				period: "February 2015 - April 2016"
			},
			{
				name: "Uncover Romania",
				title: "Web & Mobile, UI Designer, Developer",
				period: "January 2012 - April 2016"
			}
		]
	},
	services: {
		title: "Services",
		list: [
			"Animation",
			"Art Direction",
			"Brand Identity",
			"UX & UI",
			"Web & Mobile",
			"Web Development"
		]
	},
	tools: {
		title: "Tools",
		list: [
			"After Effects",
			"Dimension",
			"Figma",
			"Illustrator",
			"Lightroom",
			"Photoshop",
			"Visual Studio Code",
			"Webflow",
			"WordPress",
			"XD"
		]
	}
}

// Contact page copy
export const contactCopy = {
	metadata: {
		title: contactTitle,
		description: contactDescription,
		ogUrl: "/contact",
		ogTitle: contactTitle,
		ogDescription: contactDescription,
		ogImage: "/images/cc-about.jpg",
		ogType: "website"
	},
	kicker: "Contact",
	title: `Get in touch &mdash;<br />Let's work together`,
	caption: `If you have a project, please let me know. I'm happy to help with any project, no matter the size. And if you just want to say hi, feel free! Thank you for considering me.`,
	mail: {
		href: "mailto:corneliu@corneliucirlan.com",
		text: "corneliu@corneliucirlan.com"
	},
	form: {
		name: {
			label: `What's your name?`
		},
		email: {
			label: `What's your e-mail address?`
		},
		service: {
			label: `How can I help?`,
			options: [
				{ value: "oneoff", label: "One-off project" },
				{ value: "longterm", label: "Long-term partnership" },
				{ value: "fulltime", label: "Hire me full-time" },
				{ value: "sayhi", label: "Just wanted to say Hi" }
			]
		},
		budget: {
			label: `What's your budget?`,
			options: [
				{ value: "1000", label: "$1000 - $2500" },
				{ value: "2500", label: "$2500 - $5000" },
				{ value: "5000", label: "$5000 - $10000" },
				{ value: "10000", label: "$10000 or more" }
			]
		},
		message: {
			label: `What's your message?`
		}
	}
}
