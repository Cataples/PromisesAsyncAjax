//  basic fetch
const fetchHandle = () => {
    fetch( "https://api.chucknorris.io/jokes/random" )
        .then( data => data.json() )
        .then( data => console.log( data.value ) )
        .catch( error => console.log( "error: " + error))
}   


export { fetchHandle } ;