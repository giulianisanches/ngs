// Print "Hello World"
// Every second
// And stop after 5 times
let counter = 0;

const hello = setInterval(msg => {
    console.log(msg);

    counter++;

    if (counter === 5) {
        console.log("Done")
        clearInterval(hello)
    }
}, 1000, "Hello World");

//clearInterval(hello)

// After 5 times. Print "Done" and let Node exit.
