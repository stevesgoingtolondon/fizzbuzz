// Select the form, the number input and the result display
const form = document.querySelector('form');
const numberInput = document.querySelector('#numberInput');
const result = document.querySelector('#result');

if (form && numberInput && result) {
    form.addEventListener('submit', (event) => {
        // Prevent the form from refreshing the page
        event.preventDefault();

        const raw = numberInput.value.trim();
        if (raw === '') {
            result.textContent = 'Please enter a number.';
            return;
        }

        const i = parseInt(raw, 10);
        if (Number.isNaN(i)) {
            result.textContent = 'Please enter a valid integer.';
            return;
        }

        let output;
        if (i % 15 === 0) output = 'FizzBuzz';
        else if (i % 3 === 0) output = 'Fizz';
        else if (i % 5 === 0) output = 'Buzz';
        else output = i;

        result.textContent = output;
    });
} else {
    // If any element is missing, show a helpful message in the console
    console.error('FizzBuzz: required DOM elements not found (form, #numberInput, #result)');
}

// References:
// event.preventDefault() — prevents full page reload on form submit
// parseInt(value, 10) — parse string to integer with radix