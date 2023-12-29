input.onButtonPressed(Button.A, function () {
    jugador.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    bala = game.createSprite(jugador.get(LedSpriteProperty.X), jugador.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bala.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (enemigo.isTouching(bala)) {
            enemigo.delete()
            game.addScore(1)
        }
    }
    bala.delete()
})
input.onButtonPressed(Button.B, function () {
    jugador.move(1)
})
let enemigo: game.LedSprite = null
let bala: game.LedSprite = null
let jugador: game.LedSprite = null
jugador = game.createSprite(2, 4)
basic.forever(function () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        enemigo.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    enemigo.delete()
})
basic.forever(function () {
    if (enemigo.isTouching(jugador)) {
        jugador.delete()
        game.gameOver()
    }
})
