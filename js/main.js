'use strict'

var gElCanvas
var gCtx
const gImg = new Image()

const gImgs = [
    { id: 1, url: 'img/meme-imgs (square)/1.jpg' },
    { id: 2, url: 'img/meme-imgs (square)/2.jpg' }
]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        { txt: 'Hello Meme', size: 40, fill: 'white', stroke: 'black', x: 'center', y: 20 }
    ]
}

function getMeme() {
    return gMeme
}

function getImgUrlById(id) {
    for (var i = 0; i < gImgs.length; i++) {
        if (gImgs[i].id === id) return gImgs[i].url
    }
}

function onInit() {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    gImg.src = getImgUrlById(getMeme().selectedImgId)
    gImg.onload = renderMeme
}

function renderMeme() {
    coverCanvasWithImg(gImg)

    var meme = getMeme()
    var line = meme.lines[meme.selectedLineIdx]

    var x = line.x === 'center' ? gElCanvas.width / 2 : line.x
    drawText(line.txt, x, line.y, line.size, line.fill, line.stroke)
}

function coverCanvasWithImg(img) {
    var CW = gElCanvas.width
    var IW = img.naturalWidth
    var IH = img.naturalHeight
    var CH = Math.round(IH * CW / IW)
    gElCanvas.height = CH
    gCtx.drawImage(img, 0, 0, CW, CH)
}

function drawText(text, x, y, size, fill, stroke) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = stroke
    gCtx.fillStyle = fill
    gCtx.font = size + 'px Impact'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
