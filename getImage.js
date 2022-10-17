/*
let dog = await getDogImg();
let cat = await getCatImg();
let rnd = await getRandomImg();

console.log(dog.message)
console.log(cat[0].url)
rnd.forEach((r) => {
    console.log(r.url)
}) 
*/


export async function getDogImg() {
    let dogImg = await fetch('https://dog.ceo/api/breeds/image/random')
    return dogImg.json();
}

export async function getCatImg() {
    let catImg = await fetch('https://api.thecatapi.com/v1/images/search')
    return catImg.json();
}

export async function getRandomImg() {
    let randomImages = [];
    let randomImg1 = await fetch('https://picsum.photos/250')
    let randomImg2 = await fetch('https://picsum.photos/250?random=1')
    let randomImg3 = await fetch('https://picsum.photos/250?random=2')

    randomImages.push(randomImg1, randomImg2, randomImg3)
    return randomImages;
}

    

