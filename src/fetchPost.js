const url = 'https://example.com/profile';
const data = {
    name: "cata",
    age: 26
}

const PostMethod = ( url, data ) => {
    fetch( url, {
        method: "POST",
        body: JSON.stringify( data ),
        headers: {
            'content-type': 'application/json'
        },
    }).then( data => data.json() )
    .catch( error => console.log( error + " - " + JSON.stringify( data ) ) )
    .then( data => console.log( "Succes " + data ) );
}


export { PostMethod } ;