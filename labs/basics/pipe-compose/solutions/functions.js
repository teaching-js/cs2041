/*
   functions can be passed around,
   chained, composed, whatever. Abuse this!
*/
function compose(...fns) {

}

function pipe(...fns) {
    return fns.reduce((input, fn) => {
        return fn(input);
    });
}

module.exports = {
    pipe,
    compose
}
