input.onButtonPressed(Button.A, function () {
    dfplayer.folderPlay(4, 10, dfplayer.yesOrNot.type1)
    dfplayer.execute(
    dfplayer.playType.type1
    )
})
input.onButtonPressed(Button.AB, function () {
    dfplayer.folderPlay(1, 3, dfplayer.yesOrNot.type1)
    dfplayer.execute(
    dfplayer.playType.type1
    )
})
input.onButtonPressed(Button.B, function () {
    dfplayer.setLoopFolder(2)
    dfplayer.execute(
    dfplayer.playType.type3
    )
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    dfplayer.execute(
    dfplayer.playType.type2
    )
})
dfplayer.MP3_setSerial(SerialPin.P8, SerialPin.P12)
dfplayer.setVolume(16)
basic.showIcon(IconNames.SmallHeart)
