const putMethod = ( url, data ) => {
    fetch( url , {
        method: "PUT",
        body: JSON.stringify( data )
    }).then( data => data.json() )
        .then( data => console.log( data ) )
        .catch( err => console.log( err ) );
}



export { putMethod }