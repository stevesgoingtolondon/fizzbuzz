// TODO: Define constants for the form and the result display area
const form = document.querySelector('form');
const result = document.querySelector('#result')
// TODO: Add the first line of the event listener to handle form submission

form.addEventListener('submit', (event) => {         
    // Prevent the form from refreshing the page
    event.preventDefault();

// TODO: Get the number from the form input
    const i = parseInt(document.querySelector('input[type="number"]').value);

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
let output;
if (i % 15 === 0) {
    output = 'FizzBuzz';
// If divisible by 3, set the output to "Fizz"
} 
else if (i % 3 === 0) {
    output = 'Fizz';
// If divisible by 5, set the output to "Buzz"
} 
else if (i % 5 === 0) {
    output = 'Buzz';
// Otherwise, set the output to the number itself
} 
else {
    output = i;
}

// Display the result on the page
result.textContent = output;
});

// "event.preventDefault(); expanded upon here https://stackoverflow.com/questions/43488861/what-does-event-preventdefault-do-exactly-inside-a-submit-button-function#:~:text=Comments,-Add%20a%20comment&text=0-,event.,dynamically%20without%20a%20full%20reload. "
// "parseInt() explained here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#:~:text=The%20parseInt()%20function%20parses,or%20returns%20NaN%20if%20it%20fails. "