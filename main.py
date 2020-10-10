def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mySprite,
        controller.dx() * 1000,
        controller.dy() * 1000)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite2: Sprite = None
projectile: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)

def on_on_update():
    pass
game.on_update(on_on_update)

def on_forever():
    while controller.down.is_pressed():
        mySprite.x += 10
forever(on_forever)

def on_update_interval():
    global mySprite2
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    mySprite2.follow(mySprite)
game.on_update_interval(500, on_update_interval)
