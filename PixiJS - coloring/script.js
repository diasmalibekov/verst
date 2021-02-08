let Application = PIXI.Application,
    loader = PIXI.Loader,
    resources = PIXI.Loader.resources,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics

let app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
})

document.body.appendChild(app.view)

const circles = 5
//const colors = ['0xFF0000', '0xC71585', '0x00FF00', '0x0000FF', '0xFFFFFF']
for (let i = 0; i < circles; i++) {
    let circle = new Graphics()
//    circle.beginFill(colors[i])
    circle.beginFill(Math.random() * 0xFFFFFF)
    circle.drawCircle(0, 0, 16)
    circle.endFill()
    circle.x = 20
    circle.y = 20 + (40 * i)
    circle.interactive = true
    circle.buttonMode = true
    circle.on('pointerdown', getColor)
    app.stage.addChild(circle)
}

function getColor(e){
    e.target.tint = 0xFF0000
}
