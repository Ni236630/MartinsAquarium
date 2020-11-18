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
        length: 44,
        location: "Anchorage, AK",
        food: "Small Fish"
    },
    {
        image: "tuna-steak.jpg",
        name: "My Boy Blue",
        species: "Bluefin Tuna",
        length: 108,
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