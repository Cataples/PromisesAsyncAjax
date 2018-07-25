const asTestFunc = async url => {
    const response = await fetch ( url );
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



//  cu async await
// var fruits = true;

// const getFruits = new Promise( ( resolve, reject ) => {
//     if ( fruits ) {
//         resolve({
//             banane: 10,
//             mere: 2,
//             struguri: 5
//         })
//     } else {
//         reject( "Nu e nevoie de fructe" );
//     }
// }) 

// async function asyncCall(){
//     const r1 = await getFruits;
//     const r2 = await r1;
//     console.log(r2)
//   }
  
//   asyncCall();
  

export { asTestFunc };