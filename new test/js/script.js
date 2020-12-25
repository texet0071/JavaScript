function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + " says woof");
    } else {
      alert(this.name + " says Yip");
    }
  };  
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("fluffy", "Poodle", 30);
var spot = new Dog("spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
  dogs[i].bark();
}