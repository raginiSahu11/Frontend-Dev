let count = 0; // global

function increment() {
    count++;
    console.log("Incremented →", count);
}

function decrement() {
    count--;
    console.log("Decremented →", count);
}

// Nested function example – inner function still accesses count
function simulateClicks() {
    function internalUpdate() {
        count += 2;
        console.log("Internal Update +2 →", count);
    }

    increment();
    decrement();
    internalUpdate();
}

simulateClicks();  // Run simulation
