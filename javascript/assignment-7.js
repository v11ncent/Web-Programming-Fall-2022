window.addEventListener('load', (event) => {
    console.log(switchCase('hEllo wOrld'));
    console.log(insertDashBetweenEvens(20120));
    console.log(returnLastNthOfArray([7, 9, 0, -2], 3));
});

function switchCase(string) {
    const newString = string.split('').map((character) => {
        return character === character.toUpperCase() ?
                      character.toLowerCase() :
                      character.toUpperCase();
    }).join('');

    return newString;
}

function insertDashBetweenEvens(number) {
    let numberArray = String(number).split('');

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0 && numberArray[i + 1] % 2 == 0) {
            numberArray.splice(i + 1, 0, '-');
        }
    }

    return numberArray.join('');
}

function returnLastNthOfArray(array, n) {
    if (typeof n === undefined) {
        array.splice(0);
    }

    return array.splice(-(n));
}