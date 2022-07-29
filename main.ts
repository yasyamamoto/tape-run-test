let count = 0
let force = 0
let volts = 0
let force2 = 0
input.onButtonPressed(Button.A, function () {
    count = 0
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 300) {
        led.toggle(0, 0)
        force = pins.analogReadPin(AnalogPin.P0)
        volts = Math.map(force, 0, 1023, 0, 3.3)
        force2 = Math.map(volts, 0, 3.3, 0, 9.8)
        count += 1
        serial.writeValue("x", force2)
        serial.writeNumbers([force2, count])
        basic.pause(500)
    } else {
        force2 = 0
    }
})
