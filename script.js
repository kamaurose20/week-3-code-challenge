document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/films';

   
    function fetchAllMovies() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(films => {
                const menu = document.getElementById('menu');
                films.forEach(film => {
                    const menuItem = document.createElement('div');
                    menuItem.classList.add('menu-item');
                    menuItem.innerHTML = film.title;
                    menuItem.addEventListener('click', () => displayMovieDetails(film));
                    menu.appendChild(menuItem);
                });
                if (films.length > 0) {
                    displayMovieDetails(films[0]); 
                }
            })
            .catch(error => console.error('Error fetching films:', error));
    }

   
    function displayMovieDetails(film) {
        const main = document.getElementById('main');
        main.innerHTML = ''; 

        const title = document.createElement('h1');
        title.innerHTML = film.title;
        main.appendChild(title);

        const description = document.createElement('p');
        description.innerHTML = film.description;
        main.appendChild(description);

        const showtime = document.createElement('h3');
        showtime.innerHTML = `Showtime: ${film.showtime}`;
        main.appendChild(showtime);

        const image = document.createElement('img');
        image.src = film.poster;
        main.appendChild(image);

        const form = document.createElement('form');
        form.classList.add('ticket-form');

        const label = document.createElement('label');
        label.innerHTML = 'Number of tickets:';
        form.appendChild(label);

        const input = document.createElement('input');
        input.type = 'number';
        input.min = '1';
        input.value = '1';
        input.name = 'ticketCount';
        form.appendChild(input);

        const button = document.createElement('button');
        button.type = 'submit';
        button.innerHTML = 'Buy Tickets';
        form.appendChild(button);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const ticketCount = input.value;
            alert(`You have picked ${ticketCount} ticket(s) for ${film.title}`);
        });

        main.appendChild(form);
    }


    fetchAllMovies();
});
