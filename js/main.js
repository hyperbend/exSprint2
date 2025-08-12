'use strict'

var gElCanvas
var gCtx
const gImg = new Image()

function onInit() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    gImg.src = 'img/meme-imgs (square)/1.jpg'
    gImg.onload = renderMeme
}
function renderMeme() {
    coverCanvasWithImg(gImg)
    drawText('Hello Meme', gElCanvas.width / 2, 20)
}

function coverCanvasWithImg(img) {
    var CW = gElCanvas.width
    var IW = img.naturalWidth
    var IH = img.naturalHeight
    var CH = Math.round(IH * CW / IW)
    gElCanvas.height = CH
    gCtx.drawImage(img, 0, 0, CW, CH)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Impact'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}