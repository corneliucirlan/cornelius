const lightModeBackgroundColor = 'rgba(255, 255, 255, 1)'
const lightModeBackgroundColorHover = 'rgba(9, 29, 9, .1)'

const darkModeBackgroundColor = 'rgba(9, 9, 9, 1)'
const darkModeBackgroundColorHover = 'rgba(255, 255, 255, .2)'
const darkModeSelectedColor = '#dee2e6'
const darkModePlaceholderColor = 'rgba(255, 255, 255, .5)'

const backgroundTransition = 'background-color .2s linear'

export const selectStylesLight = {
	control: styles => ({
		...styles,
		border: 0,
		cursor: 'pointer',
		boxShadow: 'none',
		borderRadius: 0,
		backgroundColor: lightModeBackgroundColor,
		transition: backgroundTransition,
		'&:hover': {
			backgroundColor: lightModeBackgroundColorHover
		}
	}),
	
	indicatorSeparator: styles => ({
		...styles,
		display: 'none'
	}),
	
	menu: styles => ({
		...styles,
		borderRadius: 0,
		cursor: 'pointer',
		marginTop: 0,
		marginBottom: 0,
		width: '100%',
		boxShadow: `0 4px 11px ${lightModeBackgroundColorHover}`,
	}),
	
	menuList: styles => ({
		...styles,
		cursor: 'pointer',
		border: 0,
		padding: 0
	}),
	
	option: (styles, state) => ({
		...styles,
		cursor: 'pointer',
		fontSize: '1.6rem',
		transition: backgroundTransition,
		backgroundColor:  state.isFocused ? lightModeBackgroundColorHover : null,
		color: null,
		'&:active': {
			backgroundColor: lightModeBackgroundColorHover
		}
	})
}

export const selectStylesDark = {
	control: styles => ({
		...styles,
		border: 0,
		cursor: 'pointer',
		boxShadow: 'none',
		borderRadius: 0,
		backgroundColor: darkModeBackgroundColor,
		transition: backgroundTransition,
		'&:hover': {
			backgroundColor: darkModeBackgroundColorHover
		}
	}),
	
	indicatorSeparator: styles => ({
		...styles,
		display: 'none'
	}),
	
	menu: styles => ({
		...styles,
		borderRadius: 0,
		cursor: 'pointer',
		marginTop: 0,
		marginBottom: 0,
		backgroundColor: darkModeBackgroundColor,
		width: '100%',
		boxShadow: `0 4px 11px ${darkModeBackgroundColorHover}`,
	}),
	
	menuList: styles => ({
		...styles,
		cursor: 'pointer',
		border: 0,
		padding: 0,
		backgroundColor: darkModeBackgroundColor,
	}),

	singleValue: styles => ({
		...styles,
		color: darkModeSelectedColor
	}),

	placeholder: styles => ({
		...styles,
		color: darkModePlaceholderColor
	}),
	
	option: (styles, state) => ({
		...styles,
		cursor: 'pointer',
		fontSize: '1.6rem',
		transition: backgroundTransition,
		backgroundColor:  state.isFocused ? darkModeBackgroundColorHover : null,
		'&:active': {
			backgroundColor: darkModeBackgroundColorHover
		}
	})
}
