var timeSeconds = 9
const gameTime = document.getElementById('game-time')

function timerlimit (){
    gameTime.innerHTML = `00:0${timeSeconds}`
    if (timeSeconds== 0){
        return true
    }
    timeSeconds-=1
    return false
}

function resetTime () {
    timeSeconds = 9
}