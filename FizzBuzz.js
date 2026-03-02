// TODO: Define constants for the form and the result display area
input = document.getElementById('numberInput')
result = document.getElementById('result')
form = document.getElementById('form')
// TODO: Add the first line of the event listener to handle form submission
form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    // Prevent the form from refreshing the page
    e.preventDefault();

    let num = parseInt(input.value);
    let output = "";

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself
if (num % 15 === 0) {
    output = "FizzBuzz";
} else if (num % 3 === 0) {
    output = "Fizz";
} else if (num % 5 === 0){
    output = "Buzz";
} else {
    output = num;
}
// Display the result on the page
result.textContent = output;
});