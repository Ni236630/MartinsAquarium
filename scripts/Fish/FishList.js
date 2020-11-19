import { mostHolyFish, soldierFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"
import { nonHolyFish } from "./FishDataProvider.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const fishes = mostHolyFish()

    for (const fish of fishes) {
        const fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML
    }
    
    const heathenElement = document.querySelector(".heathen")
    const heathen = nonHolyFish()

    for (const fish of heathen) {
        const fishHTML = Fish(fish)
        heathenElement.innerHTML += fishHTML
    }
    
    const soldierElement = document.querySelector(".soldier")
    const soldier = soldierFish()

    for (const fish of soldier) {
        const fishHTML = Fish(fish)
        soldierElement.innerHTML += fishHTML
    }
    
}
    
    



// export const fishHeathens = () => {

//     const contentElement = document.querySelector(".heathen")
//     const fishes = nonHolyFish()

//     for (const fish of fishes) {
//         const fishHTML = Fish(fish)
//         contentElement.innerHTML += fishHTML
//     }
// }
