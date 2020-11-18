export const location = (location) => {
  return `
    <section class="location card">
          <div><img  class="location__image image--card" src="./images/${location.image}" /></div>
          <div class="location__name"><a href= "${location.locationLink}">${location.linkName}</a></div>
          <div class="location__description">${location.description}</div>
          <div class="fish__diet">${location.name}</div>
    </section>
    
  
  `
}