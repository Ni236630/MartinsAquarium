import { useTips } from "./TipDataProvider.js"
import { tipCard } from "./Tip.js" 
// this is used to inject the cards into the html
export const tipList = () => {
  const contentElement = document.querySelector(".tip")
  const tips = useTips()
  
  for (const tipObject of tips){
  
    const tipHTML = tipCard(tipObject)
    contentElement.innerHTML += tipHTML
  }
  
}