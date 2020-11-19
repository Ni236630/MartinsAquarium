const fishCollection = [

    {
        image: "rockfish.jpg",
        name: "Bart",
        species: "Rock Fish",
        length: 10,
        location: "Carribean",
        food: "crustaceans"


    },
    {
        image: "salmon.jpg",
        name: "Pinky",
        species: "Sockeye Salmon",
        length: 40,
        location: "Anchorage, AK",
        food: "Small Fish"
    },
    {
        image: "tuna-steak.jpg",
        name: "My Boy Blue",
        species: "Bluefin Tuna",
        length: 999,
        location: "Gloucester, MA",
        food: "Fish"
    },
    {
        image: "redSnapper.jpg",
        name: "prof. Snape",
        species: "Red Snapper",
        length: 14,
        location: "Pensacola, FL",
        food: "crustaceans"
    }
]


export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = (fish) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish of useFish()) {
        if (fish.length % 3 === 0){
            
            holyFish.push(fish)
            return holyFish
        }
    }
    
    
}


export const soldierFish = (soldier) => {
    // 5, 10, 15, 20, 25, etc... fish
    
    const soldiers = []
    for (soldier of useFish()) {
        if (soldier.length % 5 === 0 && soldier.length % 3 !== 0){
        
            soldiers.push(soldier)
            
        }        
    }
    return soldiers
}



export const nonHolyFish = (heathens) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    
    for (heathens of useFish()){
        
        if( heathens.length % 5 !== 0 && heathens.length % 3 !== 0){
        
            regularFish.push(heathens)
        }
    }
    
    return regularFish
    
}

