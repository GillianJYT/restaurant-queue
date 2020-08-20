namespace SpriteKind {
    export const customer = SpriteKind.create()
    export const buttonBlue = SpriteKind.create()
    export const buttonOrange = SpriteKind.create()
    export const buttonPink = SpriteKind.create()
    export const server = SpriteKind.create()
}
function setParameters () {
    lambda_arrival_rate = 2
    mu_service_rate = 5
}
function background () {
    scene.setTile(15, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b b 
        `, true)
    scene.setTile(2, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b b 
        `, false)
    // has a small pink dot to separate from regular tiles
    scene.setTile(8, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b 3 
        `, false)
    // has a small pink dot to separate from regular tiles
    scene.setTile(6, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        3 b b b b b b b b b b b b b b b 
        `, false)
    scene.setTile(14, img`
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        c b c c b c c b c c b c c b c c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c d b c d b c d b c d b c d b c 
        c b c c b c c b c c b c c b c c 
        c b d d d d d d d d d d d d d d 
        c b d d d d d d d d d d d d d d 
        `, false)
    scene.setTile(5, img`
        . . f f f f f f f f f f f f f f 
        . f c c c c c c c c c c c c c c 
        f c c e e e e e e e e e e e e e 
        f c e e e 1 1 1 1 1 1 1 1 1 1 1 
        f c e e 1 e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        `, true)
    scene.setTile(7, img`
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        `, true)
    scene.setTile(9, img`
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e 1 e e e e e e e e e e e e 
        f c e e 1 e e e e e e e e e e e 
        f c e e e 1 1 1 1 1 1 1 1 1 1 1 
        f c c e e e e e e e e e e e e e 
        . f c c c c c c c c c c c c c c 
        . . f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(10, img`
        f f f f f f f f f f f f f f . . 
        c c c c c c c c c c c c c c f . 
        e e e e e e e e e e e e e c c f 
        1 1 1 1 1 1 1 1 1 1 1 e e e c f 
        e e e e e e e e e e e 1 e e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        `, true)
    scene.setTile(12, img`
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        `, true)
    scene.setTile(13, img`
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e e 1 e c f 
        e e e e e e e e e e e 1 e e c f 
        1 1 1 1 1 1 1 1 1 1 1 e e e c f 
        e e e e e e e e e e e e e c c f 
        c c c c c c c c c c c c c c f . 
        f f f f f f f f f f f f f f . . 
        `, true)
}
scene.onHitTile(SpriteKind.customer, 15, function (sprite) {
    if (sprite.vx != 0) {
        scene.setTileAt(scene.getTile(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)), 15)
        sprite.setVelocity(0, 0)
        scene.setTileAt(scene.getTile(Math.floor(sprite.x / 16) + 1, Math.floor(sprite.y / 16)), 2)
    }
    scene.setTileAt(scene.getTile(0, 1), 2)
})
// customer finishes ordering and walks out
scene.onOverlapTile(SpriteKind.customer, myTiles.tile14, function (sprite, location) {
    sprite.setVelocity(-50, 50)
    sprite.setImage(backwardBirdImage)
    leaving = false
})
scene.onOverlapTile(SpriteKind.customer, sprites.dungeon.stairEast, function (sprite, location) {
    leaving = true
    sprite.setFlag(SpriteFlag.Ghost, true)
})
// when customer arrives at the counter
scene.onHitTile(SpriteKind.customer, 7, function (sprite) {
    scene.setTileAt(scene.getTile(Math.floor(sprite.x / 16), Math.floor(sprite.y / 16)), 15)
    // need to pause for a few seconds
    sprite.say("ordering...", mu_service_rate * 1000)
    sprite.setVelocity(0, 0)
    if (sprites.readDataNumber(sprite, "timer") < 0) {
        sprites.setDataNumber(sprite, "timer", mu_service_rate)
    }
})
// customer finishes ordering and walks out
scene.onOverlapTile(SpriteKind.customer, myTiles.tile1, function (sprite, location) {
    sprite.setVelocity(-50, 0)
})
let lengthOfQueue = 0
let index3 = 0
let mu_service_rate = 0
let lambda_arrival_rate = 0
let leaving = false
let randomStart = 0
let backwardBirdImage: Image = null
scene.setTileMap(img`
    2 2 2 2 2 5 a 2 2 2 
    2 2 2 2 2 7 c 2 2 2 
    2 2 2 2 2 7 c 2 2 2 
    2 2 2 2 2 7 c 2 2 2 
    2 2 2 2 2 7 c 2 2 2 
    2 2 2 2 2 9 d 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    e 6 8 8 8 2 2 2 2 2 
    `)
background()
setParameters()
let customer_list = sprites.allOfKind(SpriteKind.customer)
let server_list = sprites.allOfKind(SpriteKind.server)
let numberOfServers = 0
let numberOfCustomers = 3
let forwardBirdImage = img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f d d 1 1 1 c . . . 
    . . . . . f d 1 f 1 1 1 1 f . . 
    . . . . . f 1 f f 1 f f 1 c . . 
    . . . . . f d f c 1 f f f f . . 
    . . . . . f 1 1 1 f f f f f f f 
    . . . . . . f 1 f f f f f f f . 
    f f f f . . f 1 1 1 1 1 c . . . 
    f 1 1 1 c c 1 1 e 1 1 e c . . . 
    f 1 1 f f f c 1 e 1 1 e 1 f . . 
    f 1 c f f f f 1 e e e e 1 1 f . 
    f 1 1 c 1 f f d 1 1 1 1 1 1 f . 
    f c 1 1 c c d 1 e 1 e 1 e 1 f . 
    . f 1 1 1 1 1 1 e 1 e 1 e 1 f . 
    . . f c 1 1 1 1 e e e e e c . . 
    . . . c c c c c c c c c c . . . 
    `
backwardBirdImage = img`
    . . . . f f f f f . . . . . . . 
    . . . c 1 1 1 d d f . . . . . . 
    . . f 1 1 1 1 f 1 d f . . . . . 
    . . c 1 f f 1 f f 1 f . . . . . 
    . . f f f f 1 c f d f . . . . . 
    f f f f f f f 1 1 1 f . . . . . 
    . f f f f f f f 1 f . . . . . . 
    . . . c 1 1 1 1 1 f . . f f f f 
    . . . c e 1 1 e 1 1 c c 1 1 1 f 
    . . f 1 e 1 1 e 1 c f f f 1 1 f 
    . f 1 1 e e e e 1 f f f f c 1 f 
    . f 1 1 1 1 1 1 d f f 1 c 1 1 f 
    . f 1 e 1 e 1 e 1 d c c 1 1 c f 
    . f 1 e 1 e 1 e 1 1 1 1 1 1 f . 
    . . c e e e e e 1 1 1 1 c f . . 
    . . . c c c c c c c c c c . . . 
    `
for (let index = 0; index <= numberOfServers; index++) {
    server_list.insertAt(index, sprites.create(img`
        . . . f f f c c c . . . . . 
        . f f 5 5 5 5 5 5 f f . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 c . 
        f 5 5 b d 5 5 5 5 5 5 5 c . 
        f 5 d 4 4 b 5 5 5 5 5 5 5 f 
        f 5 b 4 4 4 c c 5 5 5 5 5 f 
        f f f 4 4 c b c b 5 5 5 b f 
        . f f d d c 1 e b b b b b c 
        . . f d d d d 4 f b b b b c 
        . . f 4 4 4 e e e 4 b b c . 
        . . f 9 9 9 e d d 4 f f . . 
        . . f 9 9 9 e d d e f . . . 
        . f 3 3 b 3 b e e b f . . . 
        . f f 3 b 3 b 3 b f f . . . 
        . . . f f b b f f . . . . . 
        `, SpriteKind.server))
    server_list[index].setPosition(120, 20 + index * 25)
}
for (let index2 = 0; index2 <= numberOfCustomers; index2++) {
    customer_list.insertAt(index2, sprites.create(forwardBirdImage, SpriteKind.customer))
    customer_list[index2].setFlag(SpriteFlag.ShowPhysics, true)
    randomStart = randint(0, numberOfServers)
    if (randomStart == 0) {
        customer_list[index2].setPosition(5, 20)
    } else if (randomStart == 1) {
        customer_list[index2].setPosition(5, 45)
    } else {
        customer_list[index2].setPosition(5, 70)
    }
}
leaving = true
let isServerInvisible = 0
for (let value of customer_list) {
    sprites.setDataNumber(value, "timer", -1)
}
forever(function () {
    if (leaving) {
        pause(lambda_arrival_rate * 1000)
        customer_list[index3].setVelocity(50, 0)
        // respawns customer after they leave
        if (customer_list[index3].x < 0) {
            customer_list[index3].setImage(forwardBirdImage)
            customer_list[index3].setFlag(SpriteFlag.Ghost, false)
            randomStart = randint(0, numberOfServers)
            if (randomStart == 0) {
                customer_list[index3].setPosition(0, 20)
            } else if (randomStart == 1) {
                customer_list[index3].setPosition(5, 45)
            } else {
                customer_list[index3].setPosition(5, 70)
            }
        }
        if (index3 < numberOfCustomers) {
            index3 += 1
        } else {
            index3 = 0
        }
    }
    for (let value2 of customer_list) {
        if (sprites.readDataNumber(value2, "timer") == 0) {
            value2.setVelocity(0, 50)
            scene.setTileAt(scene.getTile(Math.floor(value2.x / 16), Math.floor(value2.y / 16)), 2)
            sprites.changeDataNumberBy(value2, "timer", -1)
        } else {
            sprites.changeDataNumberBy(value2, "timer", -1)
        }
    }
    pause(1)
    // slide 12
    lengthOfQueue = lambda_arrival_rate ** 2 / (mu_service_rate * (mu_service_rate - lambda_arrival_rate))
    if (lengthOfQueue > 1) {
        game.showLongText("The restaurant couldn't keep up with the demand.", DialogLayout.Center)
        game.reset()
    }
})
