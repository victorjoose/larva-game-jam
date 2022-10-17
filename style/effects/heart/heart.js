const hurtHeart = () => {
    const gameHearts = document.getElementById('game-heart')
    const hearts = gameHearts.querySelectorAll('.heart:not(.hurt)')
    
    hearts[hearts.length - 1].classList.add('hurt')

    if (hearts.length == 1){
        return true // death
    }

    return false // hurting
}

const healHeart = () => {
    const gameHearts = document.getElementById('game-heart')
    const hearts = gameHearts.querySelectorAll('.hurt')

    !hearts[0] ? '' : hearts[0].classList.remove('hurt')
    
    if(hearts.length == 1){
        return true // full life
    }
    
    return false // regenerating...
    
}

const resetHeart = () => {
    const gameHearts = document.getElementById('game-heart')
    const hearts = gameHearts.querySelectorAll('.heart')
    console.log(hearts)
    for (let i = 0; i < hearts.length ; i++){
        hearts[i].classList.remove('hurt')
    }
}
