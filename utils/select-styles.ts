import { StylesConfig, GroupBase } from "react-select"
import { FormDataSelect } from "./interface/form"

// CSS vars prefix
const prefix: string = "cc-"

// Background transition
const backgroundTransition: string = "background-color .2s linear"

// Background color
const backgroundColor: string = `var(--${prefix}body-bg)`

// Background hover color
const backgroundColorHover: string = `var(--${prefix}select-bg-hover-color)`

// Select styles
export const selectStyles: StylesConfig<
	FormDataSelect,
	boolean,
	GroupBase<FormDataSelect>
> = {
	control: styles => ({
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

	indicatorSeparator: styles => ({
		...styles,
		display: "none"
	}),

	menu: styles => ({
		...styles,
		borderRadius: 0,
		cursor: "pointer",
		marginTop: 0,
		marginBottom: 0,
		backgroundColor: backgroundColor,
		width: "100%",
		boxShadow: `0 4px 11px ${backgroundColorHover}`
	}),

	menuList: styles => ({
		...styles,
		cursor: "pointer",
		border: 0,
		padding: 0
	}),

	singleValue: styles => ({
		...styles,
		color: `var(--${prefix}input-color)`
	}),

	placeholder: styles => ({
		...styles,
		color: `var(--${prefix}input-placeholder-color)`
	}),

	option: (styles, state) => ({
		...styles,
		cursor: "pointer",
		fontSize: "1.6rem",
		transition: backgroundTransition,
		backgroundColor: state.isFocused ? backgroundColorHover : undefined,
		color: undefined,
		"&:active": {
			backgroundColor: backgroundColorHover
		}
	})
}
