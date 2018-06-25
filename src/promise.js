//  simple promise
let isHappy = true;

let willGetPhone = new Promise(
    function ( resolve, reject ) {
        if ( isHappy ) {
            let phone = {
                brand: "Samsung",
                mode: "S9"
            };
            resolve( phone );
        } else {
            let reason = new Error( "Just because" );
            reject( reason );
        }
    }
)



export { willGetPhone };