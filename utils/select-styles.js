const hovercolor = 'rgba(21, 21, 21, .1)'
const backgroundTransition = 'background-color .2s linear'

export const selectStyles = {
	control: styles => ({
		...styles,
		border: 0,
		cursor: 'pointer',
		boxShadow: 'none',
		borderRadius: 0,
		transition: backgroundTransition,
		'&:hover': {
			backgroundColor: hovercolor
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
		boxShadow: `0 4px 11px ${hovercolor}`,
		// boxShadow: '0 0 0 1px rgba(21, 21, 21, .1), 0 4px 11px rgba(21, 21, 21, .1)',
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
		backgroundColor:  state.isFocused ? hovercolor : null,
		color: null,
		'&:active': {
			backgroundColor: hovercolor
		}
	})
}
