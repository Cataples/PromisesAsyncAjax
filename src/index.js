import { get, post, put, delet, patch } from "allFetches";
import { asTestFunc } from "./asyncAwait.js"
import { p1, p2, p3 } from "./promiseAll"

// get( "/api/users" )
//     .then( data => data.forEach( el => console.log( el ) ) );

// get( "/api/users/5" )
//     .then( data => console.log( data ) );

// const getUserById = id => {
//     return get( `/api/users/${id}` )
// }

// getUserById(6).then( data => console.log( data ) );

// post("/api/users", {
//     nume: "Darian",
//     varsta: 18,
// });

// patch("/api/users/1", {
//     nume: "nu stiu"
// });

asTestFunc( "https://api.chucknorris.io/jokes/random"  )
    .then( data => console.log( data ) )
    .catch( err => console.log( err ) );



Promise.all([p1, p2, p3])
    .then( data => console.log( data ) );