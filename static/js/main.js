let count = 0;
const counterElement = document.getElementById('counter');

function incrementCounter() {
    count++;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    counterElement.textContent = count;
}
