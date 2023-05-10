const lowerValue = 1;
const highestValue = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * highestValue + 1);
}

const lowerValueElement = document.getElementById("lower-value");
lowerValueElement.innerHTML = lowerValue;

const highestValueElement = document.getElementById("highest-value");
highestValueElement.innerHTML = highestValue;
