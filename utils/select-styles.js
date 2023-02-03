// CSS vars prefix
const prefix = "cc-"

// Background transition
const backgroundTransition = "background-color .2s linear"

// Background color
const backgroundColor = `var(--${prefix}body-bg)`

// Background hover color
const backgroundColorHover = `var(--${prefix}select-bg-hover-color)`

// Select styles
export const selectStyles = {
	control: (styles) => ({
		...styles,
		border: 0,
		cursor: "pointer",
		background: "none",
		borderRadius: 0,
		backgroundColor: backgroundColor,
		transition: backgroundTransition,
		"&:hover": {
			backgroundColor: backgroundColorHover
		}
	}),

	indicatorSeparator: (styles) => ({
		...styles,
		display: "none"
	}),

	menu: (styles) => ({
		...styles,
		borderRadius: 0,
		cursor: "pointer",
		marginTop: 0,
		marginBottom: 0,
		backgroundColor: backgroundColor,
		width: "100%",
		boxShadow: `0 4px 11px ${backgroundColorHover}`
	}),

	menuList: (styles) => ({
		...styles,
		cursor: "pointer",
		border: 0,
		padding: 0
	}),

	option: (styles, state) => ({
		...styles,
		cursor: "pointer",
		fontSize: "1.6rem",
		transition: backgroundTransition,
		backgroundColor: state.isFocused ? backgroundColorHover : null,
		color: null,
		"&:active": {
			backgroundColor: backgroundColorHover
		}
	})
}
