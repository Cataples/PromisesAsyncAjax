import { willGetPhone, promiseChain, ShowPhone, getName, getAge, allTogether, chainedAllPromises, buyFruits } from "./promise";
import { fetchHandle } from "./fetchGet";
import { PostMethod } from "./fetchPost";

// promiseChain();
// getName();
// getAge();
// allTogether();
// chainedAllPromises();
buyFruits();

fetchHandle();
PostMethod('https://example.com/profile', {
    name: "cata",
    age: 26
});