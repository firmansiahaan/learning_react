/**
 * In this example, we will see how to use classes in JavaScript to create objects with specific properties and methods. 
 * A class is a blueprint for creating objects, and it allows us to define properties and methods that can be shared across all instances of the class. 
 * In this example, we define a class called Vacation that has a constructor method to initialize the properties destination and length. 
 * We can create an instance of the Vacation class by using the new keyword and passing the required arguments to the constructor. 
 * We also define a method called print that outputs the destination and length of the vacation in a formatted string.
 * We can also define a subclass of the Vacation class called Expedition that inherits the properties and methods of the Vacation class,
 * and adds its own property called gear and a method to print the gear information.
 * By using classes, we can create multiple instances of the Vacation and Expedition classes, each with their own unique properties and methods, while still sharing common functionality defined in the class.
 * 
 * open terminal and run this code to see the output.
 * node ex-16.js
 * 
 * Classes
 */

// In this example, we will see how to use classes in JavaScript.
// A class is a blueprint for creating objects with specific properties and methods. 
// In this example, we define a class called Vacation that has a constructor method to initialize 
// the properties destination and length.
function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

// We can create an instance of the Vacation class by using the new keyword and passing the required
// arguments to the constructor. In this case, we create a new Vacation object called maui with 
// the destination "Maui" and a length of 7 days.
Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);

// Now we can use the print method of the maui object to display its properties in a formatted string.
maui.print(); // Maui | 7 days


// We can also define the Vacation class using the ES6 class syntax, which provides a more modern and 
// concise way to create classes in JavaScript.
class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

// Now we can create an instance of the Vacation class using the new keyword and call the print method 
// to display the properties of the object in a formatted string.
const trip = new Vacation("Santiago, Chile", 7);
trip.print(); // Chile will take 7 days.

// We can also create a subclass of the Vacation class called Expedition that inherits the properties and
// methods of the Vacation class, and adds its own property called gear and a method to print the gear
class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }
    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

// Now we can create an instance of the Expedition class and call the print method 
// to display the properties of the object in a formatted string that includes both the destination, 
// length, and gear information.
const trip = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);

trip.print();
// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera