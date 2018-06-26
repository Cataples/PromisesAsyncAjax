//  basic fetch
const fetchHandle = () => {
    fetch( "https://api.chucknorris.io/jokes/random" )
        .then( data => data.json() )
        .then( data => console.log( data.value ) )
        .catch( error => console.log( "error: " + error))
}   

const pokeFetch = () => {
    fetch( "https://jsonplaceholder.typicode.com/posts/" )
        .then( data => data.json() )
        .then( data => {
            data.map( ( item ) => console.log( item.title ) );
        } )
        .catch( ( err ) => console.log( "err: " + err ) );
}

// const usersFetch = () => {
//     fetch( "../../users.json" )
//         .then( data => data.json() )
//         .then( data => {
//             data.map( ( item ) => console.log( item.title ) );
//         } )
//         .catch( ( err ) => console.log( "err: " + err ) );
// }


export { fetchHandle, pokeFetch, usersFetch } ;