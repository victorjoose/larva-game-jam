
let lvl = 0

const resetBackground = () => {
    const backgrounds = document.getElementById('background')
    const effects = backgrounds.querySelectorAll('.effect-background')
    for (let i=1; i < effects.length; i++){
        effects[i].classList.remove('effect-background-active')
    }
    lvl = 0
}

const changeBackgroundUp = () => {
    lvl++
    const backgrounds = document.getElementById('background')
    const effects = backgrounds.querySelectorAll('.effect-background')[lvl]
    if (!effects){
        lvl = 0
        effects.classList.remove('effect-background-active')        
        return
    }

    effects.classList.add('effect-background-active')
}