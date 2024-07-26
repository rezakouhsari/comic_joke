const text=document.querySelector('#jokeText');
const new_joke=document.querySelector('#newJokeBtn');


async function get_joke(){

    try {
        const res=await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data=await res.json()
        text.textContent=data.joke

    }catch (e) {
        console.log(e.message);
        text.textContent="Error. please try again..."
    }

}

get_joke();

new_joke.addEventListener('click',get_joke);