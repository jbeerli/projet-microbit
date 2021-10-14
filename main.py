vY = 0
vX = 0
for index in range(20):
    led.plot(vX, vY)
    basic.pause(100)
    led.unplot(vX, vY)
    vX += 1
    vY += 1