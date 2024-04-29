// Write a for...in loop that will iterate through this object to print the value of a property IF:
// the property starts with the letter r, OR the value of that property is an odd number. 

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const property in statistics) {
    // If property starts with r or its value is an odd number (# mod 2 = 0 means is even)
    if(property.startsWith('r') || statistics[property] % 2 != 0) {
        console.log(statistics[property]);
    }
}