import { get, post, put, delet } from "allFetches";

get( "/api/users" )
    .then( data => data.forEach( el => console.log( el ) ) );

get( "/api/users/5" )
    .then( data => console.log( data ) );

const getUserById = id => {
    return get( `/api/users/${id}` )
}

getUserById(5).then( data => console.log( data ) );

// post("/api/users", {
//     nume: "Darian",
//     varsta: 18,
// });

put("/api/users",{
    nume: "Liviu Dragnea",
    varsta: "la puscarie"
}, 1);

delet("/api/users/5");
