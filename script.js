import { getDogImg, getCatImg, getRandomImg } from "../test/getImage.js";

let catImg = await getCatImg();
const square1 = document.getElementById('img1');
square1.querySelector('img').src = catImg[0].url;

const square2 = document.getElementById('img2');
const square3 = document.getElementById('img3');
const square4 = document.getElementById('img4');





let selectedSquare = 0;
let score = 0;
selectedSquare = getSelectedSquare();
verifySelection(selectedSquare)



function getSelectedSquare() {
    square1.addEventListener('click', () => {
        return 1;
    });
    
    square2.addEventListener('click', () => {
        return 2;
    });
    
    square3.addEventListener('click', () => {
        return 3;
    });
    
    square4.addEventListener('click', () => {
        return 4;
    });
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
