/*
 * given a name and a age make a person object
 * which stores this information
 * and which has a function called
 * can_drink which returns true of the
 * person is >= 18 and false otherwise
 *
 * let me = makePerson("sam",91)
 * me.name should be "sam"
 * me.age should be 91
 * me.canDrink() should be true
 */

function Person (name, age) {
   this.age = age;
   this.name = name;
}

Person.prototype.canDrink = function() {
    return this.age >= 18;
};

module.exports = Person;
