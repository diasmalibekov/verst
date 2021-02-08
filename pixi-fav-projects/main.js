////CODE WITHOUT USING ALIAS
//______________________________
//
////
////let app = new PIXI.Application({
////    width: 512,
////    height: 512,
////    }
////)
////document.body.appendChild(app.view);
////
////PIXI.loader
////    .add('images/cat.png')
////    .load(setup)
////
////function setup() {
////    let cat = new PIXI.Sprite(PIXI.loader.resources['images/cat.png'].texture)
////
////    app.stage.addChild(cat)
//////    cat.visible= false  deleting sprite
//////    app.stage.removeChild(cat)  deleting sprite
////}
////

//CODE WITH ALIAS
//_____________________________


//let Application = PIXI.Application,
//    loader = PIXI.Loader,
//    resources = PIXI.Loader.resources,
//    Sprite = PIXI.Sprite
////    ticker = PIXI.Ticker.shared
//
//let app = new Application({
//    width: 512,
//    height: 512,
//    antialias: true,
//    transparent: false,
//    resolution: 1
//})
//
//document.body.appendChild(app.view)

//loader
//    .add([
//    "images/cat.png",
////    "images/cat2.png"
//])
//    .load(setup);
//loader.onProgress.add(loadProgressHandler)
//
//
//function loadProgressHandler() {
//    console.log('loading')
//}
//
//function setup() {
//    let cat = new Sprite(resources['images/cat.png'].texture)
//    cat.scale.set(.2)
//    cat.x = 57
//    cat.y = 44
//    cat.anchor.set = .5
//    cat.rotation = .5
//
//    app.stage.addChild(cat)
//    console.log('setup')
//}


//USING TILESET AND TEXTURE ATLAS
//_______________________________


<<<<<<< HEAD
//PIXI.Loader.shared.add('images/firstAtlas.json').load(setup)
//
//function setup() {
//    let unicorn = Sprite.from('unicorn.png')
//    unicorn.scale.set(.1)
//    unicorn.position.set(16)
//
//    let cat = Sprite.from('cat.png')
//    cat.scale.set(.1)
//    cat.position.set(32)
//
//    let dog = Sprite.from('dog.png')
//    dog.scale.set(.1)
//    dog.position.set(64)

//    let animals = new PIXI.Container()
//
//    animals.addChild(unicorn)
//    animals.addChild(cat)
//    animals.addChild(dog)

//    animals.position.set(64, 64)
//    app.stage.addChild(animals)

//    let superFastSprites = new PIXI.ParticleContainer()
//    superFastSprites.addChild(unicorn)
//    superFastSprites.addChild(cat)
//    superFastSprites.addChild(dog)
//
//    app.stage.addChild(superFastSprites)
//}
//
//let rectangle = new PIXI.Graphics();
//rectangle.lineStyle(4, 0xFF3300, 1);
//rectangle.beginFill(0x66CCFF);
//rectangle.drawRect(0, 0, 128, 64);
//rectangle.endFill();
//rectangle.x = 170;
//rectangle.y = 170;
//app.stage.addChild(rectangle);
//
//let circle = new PIXI.Graphics()
//circle.beginFill(0x9966FF)
//circle.drawCircle(0, 0, 32)
//circle.endFill()
//circle.x = 64
//circle.y = 130
//app.stage.addChild(circle)
//
//let ellipse = new PIXI.Graphics();
//ellipse.beginFill(0xFFFF00);
//ellipse.drawEllipse(0, 0, 50, 20);
//ellipse.endFill();
//ellipse.x = 180;
//ellipse.y = 130;
//app.stage.addChild(ellipse);
//
//let roundBox = new PIXI.Graphics()
//roundBox.lineStyle(4, 0x99CCFF, 1)
//roundBox.beginFill(0xFF9933)
//roundBox.drawRoundedRect(0, 0, 84, 36, 10)
//roundBox.endFill()
//roundBox.x = 48
//roundBox.y = 190
//app.stage.addChild(roundBox)
//
//let line = new PIXI.Graphics();
//line.lineStyle(4, 0xFFFFFF, );
//line.moveTo(0, 0);
//line.lineTo(80, 50);
//line.x = 32;
//line.y = 32;
//app.stage.addChild(line);
//
//let triangle = new PIXI.Graphics()
//triangle.beginFill(0x66FF33)
//triangle.drawPolygon([
//    -32, 64,
//    32, 64,
//    0, 0
//])
//
//triangle.endFill()
//triangle.x = 180
//triangle.y = 22
//app.stage.addChild(triangle)
=======
//PIXI.loader
//    .add('images.firstAtlas.json')
//    .load(setup)
//
//function setup() {
//    id = resources['images/firstAtlas.json'].textures
//    unicorn = new Sprite(id['unicorn.png'])
//    app.stage.addChild(unicorn)
//}

let unicorn = Sprite.from('images/unicorn.png')
app.stage.addChild(unicorn)
>>>>>>> 414540fd34ecddefb7c9c8f044bf425a4762a10b
