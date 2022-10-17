let levelAtual = 0
const levelMax = 20
const qtdImgforLevel = 3
const upLevel = () => {
    levelAtual++
    if(levelAtual%qtdImgforLevel == 0){
        if(levelAtual > levelMax) return
        const myImg = document.getElementById('myImg')
        myImg.src =`images/minds/mind${parseInt(levelAtual/qtdImgforLevel)}.png`

        if(levelAtual == levelMax/2 || levelAtual == levelMax){
            changeBackgroundUp()
        }

        if(levelAtual == levelMax){
            // addInfinitePoints()
        }
    }    
}
