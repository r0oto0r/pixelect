// eslint-disable-next-line @typescript-eslint/no-var-requires
const log = require('simple-node-logger').createSimpleFileLogger('pixelect.log');
console.log = log.info;
console.error = log.error;

nw.Window.open('index.html', {}, (win) => {
	const window: Window = <Window>win?.window;
	window.onload = () => {
		console.log(window.document.getElementById);
	};
	const content = window.document.getElementById('content');
	content && (content.innerHTML = 'FUCK YOU');
});
