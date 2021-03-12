import * as ex from 'excalibur';
import { Face } from './Face';
import { FacesTexture } from './Textures';

nw.Window.get().showDevTools();

class GameEngine {
	private game: ex.Engine;
	private mainScene: ex.Scene;

	constructor(
		width?: number,
		height?: number,
		backgroundColor?: ex.Color,
		scrollPreventionMode?: ex.ScrollPreventionMode
	) {
		this.game = new ex.Engine({
			width,
			height,
			backgroundColor,
			scrollPreventionMode
		});
		this.mainScene = new ex.Scene(this.game);
		this.game.addScene('mainScene', this.mainScene);
	}

	public async run(): Promise<void> {
		const loader = new ex.Loader([FacesTexture]);
		loader.suppressPlayButton = true;
		try {
			await this.game.start(loader);
			this.game.goToScene('mainScene');

			const face = new Face(this.game, 160, 120, FacesTexture);
			face.makeFace('idle');
			setInterval(() => {
				face.makeFace('blink');
				setTimeout(() => face.makeFace('idle'), 60);
			}, 2000);
			setTimeout(() => face.makeFace('angry'), 4500);
			setTimeout(() => face.makeFace('happy'), 6500);
			setTimeout(() => face.makeFace('idle'), 8500);
			this.mainScene.add(face);
		} catch (error) {
			console.error(error);
		}
	}
}

const gameEngine = new GameEngine(320, 240, ex.Color.Yellow, ex.ScrollPreventionMode.All);

window.onload = () => gameEngine.run();
