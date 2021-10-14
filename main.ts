let vY = 0
let vX = 0
for (let index = 0; index < 20; index++) {
    led.plot(vX, vY)
    basic.pause(100)
    led.unplot(vX, vY)
    vX += 1
    vY += 1
}
