const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    //The fetch() method starts the process of fetching a resource from a server.
    //The fetch() method returns a Promise that resolves to a Response object.
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}