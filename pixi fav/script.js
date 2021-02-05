let app = new PIXI.Application({
    width: 256,
    height: 256
  }
)

document.body.appendChild(app.view)

PIXI.loader
  .add("images/plant.png")
  .load(setup);

function setup() {
    let plant = new PIXI.Sprite(PIXI.loader.resources["images/plant.png"].texture)
    app.stage.addChild(plant)
    plant.x = 70
    plant.y = 50

    plant.scale.set(0.4)
}
