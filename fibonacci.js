// Solving fibonacci sequence using iteration.
function fibs(fn) {
    let result = [];
    //starts the sequence
    let num1 = 0;
    let num2 = 1;
    // hold the value for the next number.
    let total = 0;
    for(let i =0; i < fn; i++){ 
        // num1 always holds the correct number in sequence starting at 0.
        result.push(num1);
        // Get next number.
        total = num1 + num2;
        // place previous number 2 as number 1.
        num1 = num2;
        // place next number from number 2 as number 2.
        num2 = total;
    }
    return result;
}


//Solving fibonacci sequence using recursion.

function fibsRec(fn) {
    //Base case for recursion method.
    if(fn == 1) return [0];
    if(fn == 2) return [0,1];

    //Get previous/starting sequence.
    const previousSequence = fibsRec(fn - 1);

    //Calculate next number.
    const nextNum = previousSequence[previousSequence.length - 1] + previousSequence[previousSequence.length - 2];

    // Return and append previousSequence and nextNum.
    return [...previousSequence, nextNum];
}
