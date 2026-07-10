// const for the calculator inputs and button
const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("interest-rate");
const timeInput = document.getElementById("time");
const calculateButton = document.querySelector("button");
const resultsElement = document.getElementById("results");

// function to calculate the formula
function calculateInterest() {
  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value);
  const time = parseFloat(timeInput.value);

  }

// formulad
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

// round to two decimal places
  const principalText = principal.toFixed(2);
  const rateText = rate.toFixed(2);
  const timeText = time.toFixed(2);
  const interestText = interest.toFixed(2);
  const totalText = total.toFixed(2);


// result sentence
  resultsElement.textContent =
    `With a beginning principal of $${principalText} and with a growth rate of ${rateText}% for ${timeText} years, your total interest will be $${interestText} with a grand total of $${totalText}.`;
}


// once user clicks the button, the function will run
calculateButton.addEventListener("click", calculateInterest);


