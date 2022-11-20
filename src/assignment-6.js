window.addEventListener('load', (event) => {
    partOne();
    partTwo();
    partThree();
    partFour();
    partFive();
    partSix();
});


function partOne() {
    console.log('Part 1:');
    console.log('==================');
    for (let i = 1; i < 10 + 1; i++) {
        console.log(i);
    }
    console.log('==================');
}

function partTwo() {
    console.log('Part 2:');
    console.log('==================');
    for (let i = 2; i < 10 + 1; i += 2) {
        console.log(i);
    }
    console.log('==================');
}

function partThree() {
    console.log('Part 3:');
    console.log('==================');
    for (let i = 10; i >= 2; i -= 2) {
        console.log(i);
    }
    console.log('==================');
}

function partFour() {
    console.log('Part 4:');
    console.log('==================');
    for (let i = 1; i < 10 + 1; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`);
        }
        else {
            console.log(`${i} is odd`);
        }
    }
    console.log('==================');
}

function partFive() {
    let string = window.prompt('Part 5 -- Enter a string:');
    console.log('Part 5:');
    console.log('==================');
    for (let i = 0; i < string.length; i++) {
        console.log(`${string[i]}\n`);
    }
    console.log('==================');
}

function partSix() {
    let string = window.prompt('Part 6 -- Enter a string:');
    console.log('Part 6:');
    console.log('==================');
    for (let i = string.length - 1; i >= 0; i--) {
        console.log(`${string[i]}\n`);
    }
    console.log('==================');
}