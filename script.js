// fetch("http://localhost:3000/films")
// .then(response=> response.json())
// .then(films => 
// films.map(film =>{
//     const title = document.createElement('h1')
//     title.inner =film.title
//     main.appendchild(title)
//     const image=document.createElement("img")
//     image.src=film.poster
//     main.appendchild(image)
//     const description=document.createElement("p")
//     description.textContent=film.description
//     main.appendchild(description)


// })

// )

fetch ("http://localhost:3000/films")
.then(response => response.json())
.then(films => 
  films.map(film=>{
  const title= document.createElement("h1")
  title.innerHTML = film.title
  main.appendChild(title)

  const description=document.createElement("p")
  description.innerHTML=film.description
  main.appendChild(description)

  const showtime =document.createElement("h3")
  showtime.innerHTML=film.showtime
  main.appendChild(showtime)

  const image=document.createElement("img")
  image.src=film.poster
  main.appendChild(image)
 
  
}) 
)