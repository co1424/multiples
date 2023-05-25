
// This function is only responsible for returning how many of the input numbers are multiple of 3 (All separated by a comma):
function countThreevens(numbers) {
    let count = 0;
    numbers.forEach(number => {
        console.log(number);

        if (number % 3 === 0) {
            console.log(number);
            count++;
        }
    });


    return count;
}

// Handles the input data and stores it:
function handleClick() {
    const numberArray = document.getElementById('input').value;
    const splitList = numberArray.split(',');
    const newArray = countThreevens(splitList);
    document.getElementById('blank').innerHTML = newArray;
}

