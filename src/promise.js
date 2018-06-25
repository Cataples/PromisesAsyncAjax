//  simple promise
let isHappy = true;

let willGetPhone = new Promise(
    ( resolve, reject ) => {
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

//  consume promise
let promiseChain = () => {
    willGetPhone
        .then( ShowPhone )
        .then( fulfilled => console.log( fulfilled ) )
        .catch( error  => console.log( error.message ) );   
}

//  second promise
let ShowPhone = phone => {
    let message = "My phone is Samsung";

    return Promise.resolve( message );
};

//  ------------------------------------------------------------------
const isAge = false;

const namePromise = new Promise( (resolve, reject) => {
        resolve("Cata")
});

const agePromise = new Promise( (resolve, reject) => {
    if( isAge ) {
        resolve( 26 );
    } else {
        throw new Error( "Idk my age" );
    }
});

const getName = () => {
    namePromise
        .then( name => {
            return " Ples " + name
        })
        .then( extendedName => {
            console.log( "He, " + extendedName +" is 26" )
        })
}

const getAge = () => {
    agePromise
        .then( age => {
            console.log( age );
        })
        .catch( error => {
            throw( error );
        })
}

const allTogether = () => {
    namePromise
        .then( name => {
            console.log( name );
        })
        agePromise 
        .then( age => {
            console.log( age )
        })
}

//  promise.all

// const allPromises = Promise.all([
//     namePromise,
//     agePromise
// ])

// const chainedAllPromises = allPromises
//     .then(([name, age]) => {
//         console.log("all promises " + name + " " + age)
//     })

//  third promises tutorial
const fruits = true;

const getFruits = new Promise( ( resolve, reject ) => {
    if ( fruits ) {
        resolve({
            banane: 10,
            mere: 2,
            struguri: 5
        })
    } else {
        reject( "Nu e nevoie de fructe" );
    }
}) 

const buyFruits = () => {
    getFruits  
        .then( fructe => {
            console.log(fructe);
        })
        .catch( error => {
            console.log( error );
        })
}


export { willGetPhone, promiseChain, ShowPhone, getName, getAge, allTogether, chainedAllPromises, buyFruits };