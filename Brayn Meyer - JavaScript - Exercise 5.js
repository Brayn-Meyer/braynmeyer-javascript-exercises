// TODO: Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5]
// TODO: Write a for loop that prints each number in the array
for (let x of numbers){
    console.log("A : " + x);
}
// TODO: Write a while loop that counts down from 5 to 1
let x = 5
while (x > 0){
    console.log("B : " + x);
    x--;
}
// TODO: Create a loop that prints only even numbers from the numbers array
for (let x of numbers){
    if (x % 2 == 0){
        console.log("C : " + x)
    }
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for (let x of numbers){
    sum += x
}
console.log("D : " + sum)