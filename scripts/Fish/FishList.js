import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    for (const fish of fishes) {
        const fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML
    }
}