controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, controller.dx() * 1000, controller.dy() * 1000)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . 7 2 7 2 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 2 2 2 7 . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . . 7 . . . . . 7 . . . . 
    . . . . 7 7 . . . . . 7 7 . . . 
    . . . . 7 . . . . . . . 7 . . . 
    . . . . 7 . . . . . . . 7 . . . 
    . . . . 7 . . . . . . . 7 . . . 
    . . 7 7 7 . . . . . . . 7 7 7 . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
let myEnemy = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(114, 100)
myEnemy.setPosition(114, 100)
forever(function () {
    if (controller.right.isPressed()) {
        mySprite.x += 1
    }
    if (controller.left.isPressed()) {
        mySprite.x += -1
    }
    if (controller.up.isPressed()) {
        mySprite.y += -1
    }
    if (controller.down.isPressed()) {
        mySprite.y += 1
    }
})
game.onUpdateInterval(500, function () {
    mySprite2.setVelocity(randint(-50, 50), randint(-50, 50))
    myEnemy.setVelocity(randint(-50, 50), randint(-50, 50))
})
