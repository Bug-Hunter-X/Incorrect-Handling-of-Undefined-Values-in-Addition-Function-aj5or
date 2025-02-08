# Incorrect Handling of Undefined Values in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrectly handling `undefined` values in a function.

The `foo` function attempts to add two numbers, but it only explicitly checks for `null` values.  When an `undefined` value is passed, it results in `NaN` instead of the expected behavior of handling this scenario gracefully (e.g., treating `undefined` as 0).

The `bug.js` file shows the buggy code. The `bugSolution.js` file demonstrates a corrected implementation.

## Bug
The original code incorrectly handles `undefined` values, resulting in `NaN`.

## Solution
The solution explicitly checks for `undefined` values and handles them appropriately, ensuring a more robust function that avoids unexpected results.