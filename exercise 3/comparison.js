const myAge = 25;
const firstName = "Sarah";
const totalAmount = 55;

if (myAge >= 18 && myAge <= 25) {
    console.log("you get 50% off on our Beers!")
} else {
    console.log("Sorry you don't get discount!");
}

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("You get a free Beer 2Night!")
} else {
    console.log("Sorry no Free Beer for you!")
}

if (totalAmount >= 50 && totalAmount < 75) {
    console.log('You are getting A Free (veggie) Bitterballen');
}
else if (totalAmount >= 75 && totalAmount < 100) {
    console.log('You are getting A Free portion of Nachos');
}
else if (totalAmount > 100) {
    console.log('You are getting A Free Bottle of Champagne');
}
else {
    console.log('Sorry no free things for you!');
}