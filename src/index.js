console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', 
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(data => {
    const arrayOfPics = data.message;
    for(let i = 0; i < arrayOfPics.length; i++) {
      document.getElementById('dog-image-container').innerHTML += `<img src="${arrayOfPics[i]}">` //adds 4 random dog pictures
    }
    
  })
)

document.addEventListener('DOMContentLoaded', 
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(data => {
    const breedObj = data.message;
    for(const breed in breedObj) {
      document.getElementById('dog-breeds').innerHTML += `<li class="dog-breed">${breed}</li>` //adds list of all breeds
    }
    let eachBreed = document.querySelectorAll('.dog-breed')
    for(let i = 0; i < eachBreed.length; i++) {
      eachBreed[i].addEventListener('click', (e) => { //clicking breed name makes text red
        e.target.style.color = "red"
      })
}
    document.getElementById('breed-dropdown').addEventListener('change', (e) => {
      const listToFilter = document.getElementsByClassName('dog-breed')

      for(let i = 0; i < listToFilter.length; i++) {
        if(listToFilter[i].outerText.startsWith(`${e.target.value}`)) { //if breed starts with dropdown letter
          listToFilter[i].style.display = "block" //keep displaying it
        } else {
          listToFilter[i].style.display = "none" //all others not displayed
        }
      }
    })  
})
)

