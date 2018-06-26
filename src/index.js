import { willGetPhone, promiseChain, ShowPhone, getName, getAge, allTogether, chainedAllPromises, buyFruits } from "./promise";
import { fetchHandle, pokeFetch } from "./fetchGet";
import { PostMethod } from "./fetchPost";
import { putMethod } from "./fetchPut";

// promiseChain();
// getName();
// getAge();
// allTogether();
// chainedAllPromises();
// buyFruits();

// fetchHandle();
// PostMethod('./users.json', {
//     id: 4,
//     body: "cata",
//     age: 26
// });

putMethod( "https://jsonplaceholder.typicode.com/posts/1", {
    userId: 1,
    id: 1,
    name: "cata"
});
