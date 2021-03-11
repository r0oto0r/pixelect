import * as ex from 'excalibur';

nw.Window.get().showDevTools();

const game = new ex.Engine({
	width: 320,
	height: 240,
	backgroundColor: ex.Color.Red,
	scrollPreventionMode: ex.ScrollPreventionMode.All
});

const mainScene = new ex.Scene(game);

window.onload = function () {
	const box = new ex.Actor({
		x: 0,
		y: 0,
		width: 180,
		height: 240,
		color: ex.Color.Black
	});

	mainScene.camera.x = 0;
	mainScene.camera.y = 0;

	mainScene.add(box);
	game.addScene('mainScene', mainScene);

	game.start();

	game.goToScene('mainScene');
	console.log(box.pos);
};
