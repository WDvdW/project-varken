input.onButtonPressed(Button.A, function () {
    if (Speler.get(LedSpriteProperty.X) == 0) {
        Speler.set(LedSpriteProperty.X, 4)
    } else {
        Speler.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    Fruit = game.createSprite(randint(0, 4), 0)
})
input.onButtonPressed(Button.B, function () {
    if (Speler.get(LedSpriteProperty.X) == 4) {
        Speler.set(LedSpriteProperty.X, 0)
    } else {
        Speler.change(LedSpriteProperty.X, 1)
    }
})
let Fruit: game.LedSprite = null
let Speler: game.LedSprite = null
game.setLife(3)
Speler = game.createSprite(2, 4)
basic.forever(function () {
	
})
