const fontSize = document.getElementById("font-size");
const fontColor = document.getElementById("font-color");
const backgroundColor = document.getElementById('background-color')
const body = document.getElementById('body')
const text = document.getElementById("paragraph");


fontSize.addEventListener('click', function(){
    text.style.fontSize = `${Math.random()*40}px`
})

fontColor.addEventListener('click', function(){
    let randomHex = Math.floor(Math.random()*0xffffff).toString(16)
    randomHex =`#${randomHex.padStart(6, "0")}`
    text.style.color = `${randomHex}`
})

backgroundColor.addEventListener('click',function(){
    let randomHex = Math.floor(Math.random()*0xffffff).toString(16)
    randomHex =`#${randomHex.padStart(6, "0")}`
    body.style.backgroundColor = `${randomHex}`
})