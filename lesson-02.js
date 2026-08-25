// ============================================
// Lesson 02: Asynchronous JavaScript
// ============================================

// ============================================
// Question 1: Timer Predictions
// ============================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 100);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");

/*
PREDICTIONS:
1. Start
2. End
3. Promise 1
4. Timeout 1
5. Timeout 2

ACTUAL:
1. Start
2. End
3. Promise 1
4. Timeout 1
5. Timeout 2

*/

// ============================================
// Question 2: Blocking Loop
// ============================================

/*
Observation:
When the blocking loop runs, the page freezes completely for 5 seconds.
- No clicks can be registered
- No CSS animations run
- The browser tab shows "not responding"

Explanation:
The main thread was occupied by the while loop.
The event loop could not process any other tasks.

After removing the blocking loop, the page became responsive again.
*/

// ============================================
// Question 3: Call Stack Tracing
// ============================================

function first() {
  console.log("First: start");
  second();
  console.log("First: end");
}

function second() {
  console.log("Second: start");
  third();
  console.log("Second: end");
}

function third() {
  console.log("Third: start");
  console.log("Third: end");
}

first();

/*
CALL STACK DIAGRAM:
1. first() called → Stack: [first]
2. first() logs "First: start"
3. first() calls second() → Stack: [first, second]
4. second() logs "Second: start"
5. second() calls third() → Stack: [first, second, third]
6. third() logs "Third: start"
7. third() logs "Third: end"
8. third() returns → Stack: [first, second]
9. second() logs "Second: end"
10. second() returns → Stack: [first]
11. first() logs "First: end"
12. first() returns → Stack: []

With error, stack trace shows innermost first:
Error at third → at second → at first
*/

// ============================================
// Question 4: Slow Data Source with Loading Message
// ============================================

/*
===== EXPECTED STACK TRACE =====
Third: start

Error: Something went wrong in third()!
    at third (lesson-02.js:XX:XX)
    at second (lesson-02.js:XX:XX)
    at first (lesson-02.js:XX:XX)

===== ANALYSIS =====
The stack trace shows the functions in reverse order of the call stack:
1. third (innermost, called last) → listed first
2. second (middle) → listed second
3. first (outermost, called first) → listed last

This matches the call stack diagram from Question 3:
When the error occurs, the stack unwinds and prints innermost first.
*/

// ============================================
// Question 6: Countdown Timer
// ============================================

function startCountdown() {
  let count = 10;
  console.log(`Countdown: ${count}`);

  const intervalId = setInterval(() => {
    count--;
    console.log(`Countdown: ${count}`);

    if (count === 0) {
      clearInterval(intervalId);
      console.log("Countdown complete! 🎉");
      console.log("(No further logs from this timer)");
    }
  }, 1000);
}

startCountdown();
