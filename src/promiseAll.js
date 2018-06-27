const p1 = new Promise(function( resolve ) {
    setTimeout(function() {
        console.log( " one " );
    }, 1000)
})

const p2 = new Promise(function( resolve ) {
    setTimeout(function() {
        console.log( " two " );
    }, 2000)
})

const p3 = new Promise(function( resolve ) {
    setTimeout(function() {
        console.log( " three " );
    }, 3000)
})

const p4 = 2;


export { p1, p2, p3, p4 };