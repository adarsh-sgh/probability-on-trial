let trialsRequested=100;
function randomInteger(n){return Math.floor(Math.random()*(n+1))}//random integer 0 to n
function randomise(){var n=arguments.length;
    const index=Math.floor(Math.random()*n);
    return arguments[index]
}//returns a random argument
function dice(...ank){let success=0;
console.log(ank)
    for (let trial = 0; trial < trialsRequested; trial++) {
        if(ank.includes(randomInteger(5)+1)) {success++}//get a random integer 1-6 check if we got a number of the list we are looking
        
    }return`we noticed success in our trial in  ${(success/trialsRequested)*100}%cases.<br>
          in ${success} out of ${trialsRequested}  ${randomise("dice throws","rolls","trials","observations")} we got ${ank}.`

}

diceShows = Number(prompt('Digit(s) you want to track on your dice'));
document.getElementById("a").innerHTML=(dice(diceShows))
