import * as PIXI from 'pixi.js';

const renderer = PIXI.autoDetectRenderer(640, 480);
document.getElementById('content').appendChild(renderer.view);

const stage = new PIXI.Container();

const graphics = new PIXI.Graphics();

stage.addChild(graphics);

graphics.position.set(0, 0);
graphics.lineStyle(2, 0xFFFFFF)
  .moveTo(0, 0)
  .lineTo(200, 200);

update();

function update() {
  renderer.render(stage);
  console.log('in the loop');
  requestAnimationFrame(update);
}
