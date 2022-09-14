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
//A: You can access the last element of any array by counting from left to right starting from zero. The last element whatever number it falls on will be it. You will need to type in items[items.length-1].
let list = ['water', 'milk', 'soda']
console.log(list)
console.log(list.at(2))


//How do you access the first element of any array?
//A: To access first element of any array you can type item [0].  
let myList = [ 1, 2, 3]
console.log(myList)
console.log(myList.at(0))

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
let myWord = ["Hello", 3];
function repeatWordThreeTimes(word, n){

    let myWordRepeatTimesThree = 'Hello';
    for(let i = 0; i < word.length; i++){
        console.log(repeatWordThreeTimes[i]);
        myWordRepeatTimesThree = myWordRepeatTimesThree + word[i];
    }
    console.log(myWordRepeatTimesThree);
}
console.log("Hello".repeat(3));

//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName (firstName, lastName){
    createFullName ("firstName" +' '+ "lastName");
    return firstName +' '+ lastName
}
console.log("Verenisse Ledesma");

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myNumbers = [1, 6, 40, 10];
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
let myElements = [10, 20, 1, 100];
function array(averageNum){
    
    let array = " ";
    
    for ( let i = 0; i < averageNum.length; i ++){
        console.log(averageNum[i]);
        console.log(averageNum[i].length);
        averageNum = averageNum + array[i].length;
    }
    console.log(myElements)
    let average = myElements / averageNum.length;
}
console.log(average);

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second arra
let theArrayNum = [20, 21]
function myTwoArrays(arr1, arr2) {
    if ( arr1 > arr2){
        return true;
    }else{
        return false;
    }
}console.log(myTwoArrays(theArrayNum));
//Write a function calld willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true
let moneyInPocket = 11
    if ( isHotOutside && moneyInPocket >= 10.50){
        console.log(true);
    } else {
        console.log(false);
    }
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Write a function called additionOfNum with three parameters. Add all three to get the result.
let a = 5
let b = 10
let c = 15
function additionOfNum(a, b, c){
    return a + b + c; 
}
console.log(additionOfNum(a, b, c));
// I decided to make this quick and easy function of adding three numbers and return the total to the console.
