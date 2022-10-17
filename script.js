import { getDogImg, getCatImg, getRandomImg } from "./getImage.js";
const song = new Audio('/audio/QuincasMoreira-RobotCity.mp3'); 

const square1 = document.getElementById('img1');
const square2 = document.getElementById('img2');
const square3 = document.getElementById('img3');
const square4 = document.getElementById('img4');


const array = [square1, square2, square3, square4]
let escolha = []
let mark = -1

const allGameImage = document.getElementById('allGameImage')
const gameImageLoad = document.getElementById('gameImageLoad')

const loadingGame = (vl) => {
    if (!vl) {
        allGameImage.classList.add('game-show')
        gameImageLoad.classList.remove('game-show')
    }else{
        allGameImage.classList.remove('game-show')
        gameImageLoad.classList.add('game-show')
    }    
}

const marked = (el) => {
    const allSquare = document.querySelectorAll('.game-image')
    for(let i = 0 ; i < allSquare.length ; i++){
        allSquare[i].classList.remove('game-image-mark')
    }

    if (!el) return
    el.classList.add('game-image-mark')
}

square1.addEventListener('mousedown', () => {marked(square1)})
square2.addEventListener('mousedown', () => {marked(square2)})
square3.addEventListener('mousedown', () => {marked(square3)})
square4.addEventListener('mousedown', () => {marked(square4)})

const markedCorrect = (i) => {
    mark = true;
    console.log(i)
}

const markedIncorrect = () =>{
    mark = false
}


const setEscolha = async () =>{
    loadingGame(true)
    escolha = [0,0,0,0]
    let e = Math.floor(Math.random() * 3)
    escolha[e] = 1

    const catImg = await getCatImg();
    const imgEscolhida = catImg[0].url
    
    const imgRadom = await getRandomImg()

    for(let i =0 ; i < array.length; i++){        
        array[i].removeEventListener('click', markedCorrect)
        array[i].removeEventListener('click', markedIncorrect)
        if (escolha[i] == 1){
            array[i].querySelector('img').src = imgEscolhida        
            array[i].addEventListener('click', markedCorrect)
        }else{
            array[i].querySelector('img').src = imgRadom.shift().url
            array[i].addEventListener('click', markedIncorrect)
        }
    }
    loadingGame(false)
}

const nextTest = document.getElementById('nextTest')
nextTest.addEventListener('click', () => {
    if(mark == -1 ) return
    
    if(mark){
        hurtHeart()
    }else{
        addPonts(1000)
        upLevel()
        setEscolha()
    }
    marked()
    mark = -1
})

function start() {
    song.play();
    song.loop = true;
    song.volume = 0.03;
    setEscolha()
}

start()