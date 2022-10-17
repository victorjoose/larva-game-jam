import { getDogImg, getCatImg, getRandomImg } from "../test/getImage.js";

const square1 = document.getElementById('img1');
const square2 = document.getElementById('img2');
const square3 = document.getElementById('img3');
const square4 = document.getElementById('img4');


const array = [square1, square2, square3, square4]
let escolha = []
let mark = 0

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


const markedCorrect = () => {
    mark = true 
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
            array[e].querySelector('img').src = imgEscolhida        
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
        setEscolha()
    }

    mark = -1
})

let selectedSquare = 0;
let score = 0;
selectedSquare = getSelectedSquare();
verifySelection(selectedSquare)



function getSelectedSquare() {
    // square1.addEventListener('click', () => {
    //     return 1;
    // });
    
    // square2.addEventListener('click', () => {
    //     return 2;
    // });
    
    // square3.addEventListener('click', () => {
    //     return 3;
    // });
    
    // square4.addEventListener('click', () => {
    //     return 4;
    // });
}

function correctAnswer() {
    //escolhe uma imagem para ser a imagem certa
}

function verifySelection(selectedSquare, correctAnswer) {
    //verifica se a seleção está correta
    if (correctAnswer == selectedSquare) {
        score++;
        next()
    } else {
        gameOver()
    }
}

function next() {

}

function hardener() {
    // deixa o jogo mais dificil com o tempo 
    // adiciona blur
    // greyscale
}

function gameOver() {
    // Tela de game over
}

function restart() {  
    // recomeça o jogo
}

function start(){
    setEscolha()
}


start()