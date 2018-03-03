console.log("are you there?");
console.log("yes, i am there.");

// Challenge #3: Find the unique number
// Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!

// var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
// var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];
    var sortedA = challengeThreeInputA.sort();
        console.log(sortedA); // output [1, 1, 1, 1, 1, 2]
    var solutionA = sortedA.pop();
        console.log(solutionA); // output 2 (.pop() puts the number popped off into the var you give it)
    var challenge3A = document.getElementById(challengeThreeA);
        challengeThreeA.innerHTML = solutionA; // 2

var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];
    var sortedB = challengeThreeInputB.sort();
        console.log(sortedB); // output [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55]
    var solutionB = sortedB.pop();
        console.log(solutionB);
    var challenge3B = document.getElementById(challengeThreeB);
    challengeThreeB.innerHTML = solutionB; // 0.55

    //-------------------------------------------------------messing around with another ideas that weren't used ------>
    // for (var i = 0; i < challengeThreeInputA.length; i++);
    //  if (challengeThreeInputA[i] != challengeThreeInputA[i]) { 
    //     // var uNeek = document.getElementById(challengeThreeA);
    //     // challengeThreeA.innerHTML = challengeThreeInputA[i];  
    //     console.log(challengeThreeInputA);
    // } else {
    //     console.log("nope.");
    // }