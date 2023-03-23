input.onGesture(Gesture.Shake, function () {
    count += 1
})
let count = 0
basic.forever(function () {
    basic.showString("" + (count))
})
