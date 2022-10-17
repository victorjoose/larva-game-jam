import { getDogImg, getCatImg, getRandomImg } from "./getImage.js";

const loadTexts = document.querySelectorAll('.loading-text')
const boxes = document.querySelectorAll('.box')

let catImg = await getCatImg();
document.getElementById('box1').src = catImg[0].url;

/*let dogImg = await getDogImg();
document.getElementById('box2').src = dogImg.message;
*/

let randomImg = await getRandomImg();
randomImg.forEach((image) => {
    console.log(image.url)
})



let load = 0;
let int = setInterval(blurring, 20)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadTexts.forEach((text) => {
        text.innerText = `${load}%`
        text.style.opacity = scale(load, 0, 100, 1, 0)
    })

    boxes.forEach((box) => {
        box.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    })
}

// from stackoverflow
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
