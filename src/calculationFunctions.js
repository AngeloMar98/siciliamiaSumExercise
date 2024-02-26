/*
 ***LOOP SUM***
 */

// The logic is straightforward, add up each number up to n using the for each loop, it uses the index to
// go hold the value of each number and it's stored in a variable external to the loop so it doesn't reset.
// Once the loop is over simply return the sum.

// It's a very basic solution, it does its job. It's not useful in pratical terms but it's one you can come up with on the spot and that can serve the purpose in if it's provisory and improved on afterwards
export function simpleLoopSum(n) {
  let sum = n;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}

/*
 ***RECURSIVE SUM***
 */

// This one is a bit more complex. It uses the number we were given (n) and a number storing the current loop iteration we are in (loopNum) and of course a sum to keep through each loop(prevSum)
// Each loop you first of all you add the loopNum and the prevSum, then check:
// IS THIS THE LAST NUMBER?
//>no Repeat the process again, this time increasing the loopNum
//>yes Then return the sum, means this one was the last loop

// I think, a recursive function is kind of unnecessary here. The purpose of a recursive function is that it keeps a function running until the conditions are met and we get our result. When the conditions are more complex though, it can be an amazing tool, as we have everything written in a few lines and don't need to come up with other functions. In this case though it's way too similiar to a for loop, as it basically checks the same type of conditions. I'd use this over a loop just because it's more elegant but in terms of functionality they take the same time

export function recursiveSum(n, loopNum = 1, prevSum = 0) {
  const sum = prevSum + loopNum;
  return loopNum < n ? recursiveSum(n, loopNum + 1, sum) : sum;
}

/*
 ***FORMULA SUM***
 */

// This is the most simple yet most effective, as it doesn't need to call any lines of codes multiple times and keeps everything on one direct line. It uses an arithmetic function that basically cuts the time short and gives us the same results as the previous two functions.
// This one is hands down the best solution. Short and simple, doesn't require any loop that might be time wasting. In this particular case an arithmetic function does the job and we just return the value without storing anything. Nothing to add, it doesn't compare with the other two solution as it's clearly the most fitting for our case
export function formulaSum(n) {
  return (n / 2) * (1 + n);
}

/* 

It's a very simple case but all the functions are pure. Everything they need to work it's provided through parameters, they are immutable (they only makes copies) and of course they don't modify external values (no side effects)

*/
