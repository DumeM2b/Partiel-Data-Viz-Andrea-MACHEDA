let counter = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counter;
}

function increase() {
    counter++;
    updateCounter();
}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}

window.onload = updateCounter;
