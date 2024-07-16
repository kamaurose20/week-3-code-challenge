fetch("http://localhost:3000/films")
.then(response => response.json())
.then(films => {
 const main = document.getElementById('main');
        
 films.forEach(film => {
            
 const title = document.createElement("h1");
 title.innerHTML = film.title;
 main.appendChild(title);

            
 const description = document.createElement("p");
 description.innerHTML = film.description;
 main.appendChild(description);

            
 const showtime = document.createElement("h3");
 showtime.innerHTML = `Showtime: ${film.showtime}`;
 main.appendChild(showtime);

            
 const image = document.createElement("img");
 image.src = film.poster;
 main.appendChild(image);


            
 const form = document.createElement("form");
 form.classList.add("ticket-form");

            
 const label = document.createElement("label");
 label.innerHTML = "Number of tickets:";
 form.appendChild(label);

 const input = document.createElement("input");
 input.type = "number";
 input.min = "1";
 input.value = "1";
 input.name = "ticketCount";
 form.appendChild(input);

 const button = document.createElement("button");
 button.type = "submit";
 button.innerHTML = "Buy Tickets";
 form.appendChild(button);

 form.addEventListener("submit", (event) => {
 event.preventDefault();
 const ticketCount = input.value;
 alert(`You have picked ${ticketCount} ticket(s) for ${film.title}`);
});

 main.appendChild(form);
});
})
.catch(error => console.error('Error fetching films:', error));
