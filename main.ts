
let opKnopGedrukt = false
let spelBezig = false
let positieMol : number
let startTijd : number

input.onGesture(Gesture.Shake, function () {
    basic.showString("3-2-1")
    spelBezig = true
while (spelBezig) {
    positieMol = randint(0,1)
    opKnopGedrukt = false
    basic.pause(300)
    if (positieMol = 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } 
    if (positieMol = 1) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    startTijd = input.runningTime()
    while (opKnopGedrukt == false) {    
        if (input.runningTime() - startTijd > (1000)) {
        opKnopGedrukt = true
        basic.showString("Game Over")
        game.isGameOver()
        }
    if (positieMol == 0 && input.buttonIsPressed(Button.A) ) {
    opKnopGedrukt = true
    basic.showIcon(IconNames.Yes)
    game.addScore(1)
    }
    else if (positieMol == 0 && input.buttonIsPressed(Button.B)) {
    opKnopGedrukt = true
    basic.showString("Game Over")
    game.isGameOver()
    }
    if (positieMol == 1 && input.buttonIsPressed(Button.B)) {
        opKnopGedrukt = true
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
    }
    else if (positieMol == 1 && input.buttonIsPressed(Button.A)) {
        opKnopGedrukt = true
        basic.showString("Game Over")
        game.isGameOver()
    }
}
}
})