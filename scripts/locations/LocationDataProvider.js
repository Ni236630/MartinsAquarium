const locationCollection = [
  {
    image: "alaskaFishing.jpg",
    name: "Anchorage, AK" ,
    locationLink: "http://www.adfg.alaska.gov/index.cfm%3Fadfg%3DByAreaSouthcentralAnchorage.fishingInfo#:~:text=Anchorage%20is%20unique%20in%20the,in%20area%20lakes%20and%20streams",
    linkName: "Alaska Department of Fish and Game",
    description:"Anchorage is unique in the sport fishing world. Anglers can catch 20- to 30-pound king salmon and 8- to 10-pound silver salmon right in town. There's also excellent fishing for rainbow trout, Dolly Varden char, and Arctic grayling in area lakes and streams."  
    
  },
  {
    image: "makuaBeach.jpg",
    name: "Mauka Beach, HI" ,
    locationLink: "https://www.gohawaii.com/experiences/adventure/deep-sea-fishing",
    linkName: "Deep Sea Fishing Hawaii",
    description:"Whether you want to chase game fish or just spend a relaxing day on the water, deep sea fishing in Hawaii is a fun adventure. Hawaii’s waters are home to a variety of amazing fish, including marlin, yellowfin tuna (ahi), dorado (mahimahi) and wahoo (ono), to name a few."
  }
]

export const useLocation = () => {
  return locationCollection.slice()
}