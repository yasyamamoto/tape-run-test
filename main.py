volts = 0
force = 0
force2 = 0

def on_forever():
    global force, volts, force2
    if pins.analog_read_pin(AnalogPin.P0) > 0:
        led.toggle(0, 0)
        force = pins.analog_read_pin(AnalogPin.P0)
        volts = Math.map(force, 0, 1023, 0, 3.3)
        force2 = Math.map(volts, 0, 3.3, 0, 9.8)
        serial.write_value("x", force2)
        basic.pause(100)
basic.forever(on_forever)
