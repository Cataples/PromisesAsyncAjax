const asTestFunc = async url => {
    const response = await fetch ( url);
    const joke = await response.json();
    const jokeData = await joke.value;
    if ( response.status !== 200 ){
        throw Error( body.message )
    }
    return jokeData;
}

// class getChuckJokes {
//     async getJoke( url ) {
//         const response = await fetch ( url);
//         const joke = await response.json();
//         const jokeData = joke.value;
//         return jokeData;
//     }
// }

// (async () => {
//     const client = new getChuckJokes();
//     console.log( await client.getJoke( "https://api.chucknorris.io/jokes/random" ) );
// })();



export { asTestFunc };