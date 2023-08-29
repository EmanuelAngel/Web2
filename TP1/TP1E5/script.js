/*

Refactorize el siguiente código utilizando sintaxis ES6 (Use rest y arrow
función).

function filterOutOdds() {
var nums = Array.prototype.slice.call(arguments);
return nums.filter(function(num) {
return num % 2 === 0
});
}

*/

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
    return num % 2 === 0
    });
}


// Pasaje a EcmaScript 6
const filterOutOdds = (...nums)=> {
    return nums.filter(num => num % 2 === 0);
}