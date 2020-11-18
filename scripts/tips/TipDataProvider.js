const tipCollection = [
  {
    content:"I'm A Pro Tip!"
  },
  {
    content:"I'm A Pro Tip Too!"
  },
  {
    content:"Always buy the largest coffee."
  }
 
]

export const useTips = () => {
  return tipCollection.slice()
}