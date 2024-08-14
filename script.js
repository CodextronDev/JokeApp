document.getElementById('get-joke').addEventListener('click', getJoke);
async function getJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayJoke(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('joke').innerText = 'Oops! Something went wrong.';
    }
}
function displayJoke(data) {
    const jokeText = `${data.setup} - ${data.punchline}`;
    document.getElementById('joke').innerText = jokeText;
}
