/*
 * given a name and a age make a Dog object
 * which stores this information
 * and which has a function called
 * can_drink which returns true of the
 * Dog is >= 18 and false otherwise
 *
 * const me = makeDog("sam",91)
 * me.name should be "sam"
 * me.age should be 91
 * me.can_drink() should be true
 */

function Dog(name, age) {
    console.log(name, age);
}

module.exports = Dog;
