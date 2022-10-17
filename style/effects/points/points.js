const elPoint = document.getElementById('game-pts')
const maxPoints = 999999999
let topPoints = 0
let infinite = false

const addPonts = (vl) => {
    if (infinite) return

    topPoints = parseInt(elPoint.innerText) + parseInt(vl)
    if (topPoints >= maxPoints){
        return
    }
    effectAddPoints()    
}

const effectAddPoints = () => {
    let point = parseInt(elPoint.innerText)
    point = Math.min(point + 50, maxPoints)
    if(infinite) return
    elPoint.innerHTML = point


    if(point == topPoints || point == maxPoints){
        return;
    }

    setTimeout('effectAddPoints()',10)
}

const addInfinitePoints = () => {
    elPoint.innerHTML = "<img src='images/tools/infinite.png'>"
    infinite = true    
}