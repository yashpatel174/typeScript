"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(false);
function identityFour(val) {
    return val;
}
identityFour(12);
// identityFour<Bottle>({});
function getSearchProducts(products) {
    // Do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearcgProducts = (products) => {
    // Do some database operations
    const myIndex = 4;
    return products[myIndex];
};
