//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log(ages[1]);
//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(30);
console.log(ages.push(30) - ages[1])
//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let averageAge = 0;
for(let i = 0; i < averageAge.length; i ++) {
    console.log( i , averageAge[i]);
    console.log( i, averageAge + averageAge[i].length)
}
console.log(averageAge); 

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam","Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
console.log(names.length);

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let lettersInName = 0;

for(let i = 0; i < names.length; i++) {
    console.log( i, names[i]);
    console.log( i, names[i].length);
    lettersInName = lettersInName + names[i].length
}
console.log(lettersInName);
let average = lettersInName / names.length;
console.log(average);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names);
let concatenatedNames = " ";
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    concatenatedNames = concatenatedNames + names[i] + " ";
}
console.log(concatenatedNames);

//How do you access the last element of any array?
//A: You can access the last element of any array by counting from left to right starting from zero. The last element whatever number it falls on will be it.

//How do you access the first element of any array?
//A: 

// Create a new array called nameLengths.
let nameLengths = [];
console.log(nameLengths);
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
for(let i = 0 ; i < names.length; i++) {
    console.log(names[i]);
    console.log(names[i].length);
    nameLengths.push(names[i].length);
}
console.log(nameLengths); 

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let total = 0 ;
for( let i = 0 ; i < nameLengths.length; i++){
    console.log(nameLengths[i])
    total = total + nameLengths[i]; 
}
console.log(total);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function createWord( word, n){
   
    return 
}
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName (firstName, lastName){
    createFullName ("firstName" +' '+ "lastName");
    return firstName +' '+ lastName
}
console.log("Verenisse Ledesma");

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myNumbers = [50, 20, 40, 10];
function myTotal(array){ 

    let sumOfNumbers = 0;
    for(let i = 0 ; i < array.length; i++){
        console.log(array[i]);
        sumOfNumbers = sumOfNumbers + array[i];
    }
    console.log(sumOfNumbers);
    if( sumOfNumbers > 100) {
        return true; 
    } else {
        return false;
    }
}
console.log(myTotal(myNumbers));


//Write a function that takes an array of numbers and returns the average of all the elements in the array.
let myElements = [ 8, 20, 7, 1];
function array(average){
    
    let averageNumber = 0;
    for ( let i = 0; i < average.length; i ++){
        console.log(average[i]);
        averageAge = averageAge + average[i];
    }
    console.log(averageNumber);
    return averageNumber; 
}

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second arra


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 



//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
