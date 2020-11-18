import { useLocation } from "./LocationDataProvider.js"
import { location } from "./Location.js"

export const locationList = () => {
  const contentElement = document.querySelector(".locations")
  const locations = useLocation()
  
  for (const locationObject of locations){
    const locationHTML = location(locationObject)
    contentElement.innerHTML += locationHTML
  }
}