import * as ex from 'excalibur';

export type FaceType = 'idle' | 'blink' | 'angry' | 'happy';

export class Face extends ex.Actor {
	constructor(game: ex.Engine, x: number, y: number, facesTexture: ex.Texture) {
		if (!facesTexture.isLoaded()) {
			throw Error('Texture not loaded');
		}
		super(x, y);

		const facesSheet = new ex.SpriteSheet(facesTexture, 5, 1, 320, 240);

		const idleFace = facesSheet.getAnimationBetween(game, 0, 1, 120);
		const blinkFace = facesSheet.getAnimationBetween(game, 0, 3, 20);
		const angryFace = facesSheet.getAnimationBetween(game, 3, 4, 120);
		const happyFace = facesSheet.getAnimationBetween(game, 4, 5, 120);

		this.addDrawing('idle', idleFace);
		this.addDrawing('blink', blinkFace);
		this.addDrawing('angry', angryFace);
		this.addDrawing('happy', happyFace);
	}

	public makeFace(faceType: FaceType): void {
		switch (faceType) {
			case 'idle':
				this.setDrawing('idle');
				break;
			case 'blink':
				this.setDrawing('blink');
				break;
			case 'happy':
				this.setDrawing('happy');
				break;
			case 'angry':
				this.setDrawing('angry');
				break;
			default:
				break;
		}
	}
}
