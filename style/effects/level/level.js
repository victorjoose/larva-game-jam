let levelAtual = 0
const levelMax = 10
const upLevel = () => {
    levelAtual++
    if(levelAtual > levelMax) return
    const myImg = document.getElementById('myImg')
    myImg.src =`images/minds/mind${levelAtual}.png`

    if(levelAtual == levelMax/2 || levelAtual == levelMax){
        changeBackgroundUp()
    }

    if(levelAtual == levelMax){
        addInfinitePoints()
    }
}
