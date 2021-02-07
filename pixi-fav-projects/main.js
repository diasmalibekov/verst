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


let Application = PIXI.Application,
    loader = PIXI.Loader,
    resources = PIXI.Loader.resources,
    Sprite = PIXI.Sprite

let app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
})

document.body.appendChild(app.view)

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
