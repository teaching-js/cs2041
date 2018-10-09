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
 * me.__proto__ should be Animal
 * me.__proto__.__proto__ should be Animal
 * me.sayWoof() should return 'woof!'
 */

function Animal(age) {
    this.age = age
}

Animal.prototype.makeSound = function() {
    console.log(this.sound)
}

function Dog(name, age) {
    Animal.call(this, age)
    this.name = name
    this.sound = 'woof'
}

Dog.prototype = Animal.prototype;



const d = new Dog('Sam', 10);
d.makeSound();
console.log(d.__proto__)

module.exports = Dog;
