let number = Number(prompt("Write a number: "));
const numberText = document.getElementById("numberText");

const positiveOrNegative = (number) => {
  if (number > 0) {
    numberText.innerHTML = "The number is positive";
  } else if (number < 0) {
    numberText.innerHTML = "The number is negative";
  } else {
    numberText.innerHTML = "The number is zero";
  }
};

positiveOrNegative(number);