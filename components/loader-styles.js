export default `
.active-loader {
	display: block;
	margin: 0;
	padding: 0;
	height: 100vh;
	overflow: hidden;
}
.d-none {
	display: none;
}
.loader-container {
	background-color: rgba(15, 15, 15, 1);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0
	margin-top: 0;
	z-index: 5000;
}

.animate-in {
	animation: slideIn .5s cubic-bezier(.3,0,.5,1) forwards;
}

.animate-out {
	animation: slideOut .5s cubic-bezier(.3,0,.5,1) forwards
}

.loader-circle {
	position: absolute;
	background-color: white;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%) scale(0);
	-ms-transform: translate(-50%, -50%) scale(0);
	-o-transform: translate(-50%, -50%) scale(0);
	transform: translate(-50%, -50%) scale(0);
	animation: load 1s linear infinite;
}

@keyframes slideIn {
	0& {
		margin-top: 100vh;
	}

	100% {
		margin-top: 0;
	}
}

@keyframes slideOut {
	0& {
		margin-top: 0;
	}

	100% {
		margin-top: -100vh;
	}
}

@keyframes load {
	0% {
		opacity: 1;
		-webkit-transform: translate(-50%, -50%) scale(0);
		-ms-transform: translate(-50%, -50%) scale(0);
		-o-transform: translate(-50%, -50%) scale(0);
		transform: translate(-50%, -50%) scale(0);
	}
	100% {
		opacity: 0;
		-webkit-transform: translate(-50%, -50%) scale(1);
		-ms-transform: translate(-50%, -50%) scale(1);
		-o-transform: translate(-50%, -50%) scale(1);
		transform: translate(-50%, -50%) scale(1);
	}
}
`
