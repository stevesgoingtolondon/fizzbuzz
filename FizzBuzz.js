// TODO: Define constants for the form and the result display area
input = document.getElementById('numberInput')
document.getElementById('output')
form = document.getElementById('form')
// TODO: Add the first line of the event listener to handle form submission
formElement.addEventListener("submit", function(e) {
    e.preventDefault(); 
    // Prevent the form from refreshing the page
    e.preventDefault();

    let num = parseInt(numberField.value);
    let output = "";

// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself
if (num % 15 === 0) {
    result = "FizzBuzz";
} else if (num % 3 === 0) {
    result = "Fizz";
} else if (num % 5 === 0){
    result = "Buzz";
} else {
    result = num;
}
// Display the result on the page
result.textContent = output;
});