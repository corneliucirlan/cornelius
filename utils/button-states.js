// Default button HTML
export const buttonDefault = {
	text: `
		<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			<path class="path" d="M19.32,6.426c-.183-.152-4.364-3.514-5.283-4.244C13.173,1.492,11.7,0,10,0S6.85,1.473,5.963,2.182c-.956.76-5.12,4.109-5.279,4.24A1.875,1.875,0,0,0,0,7.871V18.125A1.875,1.875,0,0,0,1.875,20h16.25A1.875,1.875,0,0,0,20,18.125V7.871a1.875,1.875,0,0,0-.68-1.445ZM18.125,17.891a.234.234,0,0,1-.234.234H2.109a.234.234,0,0,1-.234-.234V7.982A.234.234,0,0,1,1.962,7.8c.62-.5,4.25-3.42,5.17-4.152C7.842,3.081,9.078,1.875,10,1.875S12.182,3.1,12.868,3.648c.921.732,4.551,3.652,5.171,4.153a.234.234,0,0,1,.087.182Zm-1.25-7.332a.469.469,0,0,1-.068.663c-1.132.909-2.315,1.859-2.771,2.221-.887.709-2.349,2.182-4.037,2.182s-3.175-1.494-4.037-2.182c-.441-.35-1.631-1.305-2.771-2.221a.469.469,0,0,1-.068-.663l.6-.724a.469.469,0,0,1,.655-.067c1.118.9,2.288,1.837,2.756,2.21.686.548,1.942,1.773,2.868,1.773s2.158-1.206,2.868-1.773c.469-.372,1.638-1.311,2.756-2.21a.469.469,0,0,1,.655.067l.6.724Z"></path>
		</svg>
		<span>Send message</span>`,
	classes: ["btn", "btn-footer", "btn-form-submit"],
	disabled: false
}

// Sending button HTML
export const buttonIsSending = {
	text: `
		<div class='loader svg-icon'>
			<div class='circle'></div>
		</div>
		<span>Sending ...</span>`,
	classes: ["btn", "btn-footer", "btn-form-submit"],
	disabled: true
}

// Success button HTML
export const buttonSuccess = {
	text: `
		<svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			<path class='path' d="M18,8A10,10,0,1,0,28,18,10,10,0,0,0,18,8Zm0,1.935A8.065,8.065,0,1,1,9.935,18,8.06,8.06,0,0,1,18,9.935m5.653,5.253-.909-.916a.484.484,0,0,0-.684,0l-5.7,5.654L13.95,17.493a.484.484,0,0,0-.684,0l-.916.909a.484.484,0,0,0,0,.684l3.661,3.69a.484.484,0,0,0,.684,0l6.959-6.9A.484.484,0,0,0,23.653,15.188Z" transform="translate(-8 -8)"/>
		</svg>
		<span>Message sent</span>`,
	classes: ["btn", "btn-footer", "btn-form-submit", "btn-success"],
	disabled: true
}

// Error button state
export const buttonError = {
	text: `
		<svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="17.778" viewBox="0 0 20 17.778">
			<path class='path' d="M19.775,15.278a1.668,1.668,0,0,1-1.444,2.5H1.668a1.668,1.668,0,0,1-1.444-2.5L8.556.833a1.668,1.668,0,0,1,2.887,0l8.331,14.445ZM10,12.292a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,10,12.292ZM8.483,6.55l.258,4.722a.417.417,0,0,0,.416.394h1.686a.417.417,0,0,0,.416-.394l.258-4.722a.417.417,0,0,0-.416-.439H8.9a.417.417,0,0,0-.416.439Z" transform="translate(0)"/>
		</svg>
		<span>Something's wrong, try again in a bit</span>`,
	classes: ["btn", "btn-footer", "btn-form-submit", "btn-error"],
	disabled: true
}
