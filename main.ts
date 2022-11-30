input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.pause(1000)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.clear()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
