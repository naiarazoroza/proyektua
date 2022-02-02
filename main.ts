input.onButtonPressed(Button.A, function () {
    servos.P0.stop()
})
basic.showIcon(IconNames.Asleep)
servos.P0.setAngle(150)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Happy)
        servos.P0.setAngle(32)
        basic.pause(2000)
        servos.P0.setAngle(150)
        basic.showIcon(IconNames.Asleep)
    }
})
