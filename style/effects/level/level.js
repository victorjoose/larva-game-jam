let levelAtual = 0
const levelMax = 30
const qtdImgforLevel = 3
var imgmind = 1
const upLevel = () => {
    levelAtual++
    if(levelAtual%qtdImgforLevel == 0 && imgmind <=10){
        const myImg = document.getElementById('myImg')
        myImg.src =`images/minds/mind${parseInt(imgmind)}.png`
        imgmind++        
    }

    if(levelAtual == levelMax/2 || levelAtual == levelMax){
        changeBackgroundUp()
    }

    if(levelAtual == levelMax){
        // addInfinitePoints()
    }  
}
