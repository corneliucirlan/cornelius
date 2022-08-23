export default `
body {
	display: block;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.loader-container {
	background-color: white;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0
	z-index: 50000;
}

.loader-circle {
	position: absolute;
	background-color: rgba(15, 15, 15, 1);
	width: 100px;
	height: 100px;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	animation: load 1s linear infinite;
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
