Answers:
### A Little More of a Challenge...
1. Line 12 will print the value of `var i`. Since the array of `prices` only contains 3 elements, `i` will go from 0 to 2 to process these elements, but it will increment one more time at the end of the loop to check if there were any more elements in the list, so `i` ends up with a value of 3. Line 12 prints `3`.
2. Line 13 prints the value of `discountedPrice`. This value changes on every iteration of the loop, and since line 13 is outside of the loop, it will print its final value. Line 13 prints `150`.
3. Line 14 prints the value of `finalPrice`, which is the final price of a product after applying the `discountedPrice`. The value of `finalPrice` happens to be the same as `discountedPrice` at the end of all iterations.
Line 14 prints `150`.
4. The function returns the array `discounted` that contains the final price of each price in `prices` after applying the `discountedPrice` to each of them. The function returns `[50, 100, 150 ]`.
5. Line 12 causes an `Uncaught ReferenceError` because `i` is not defined in the scope of line 12. Since `i` is a `let` variable declared inside a for loop, only sentences inside this for loop know what `i` is. Line 12 is outside the for loop, thus it doesn't know what `i` is, throwing the Uncaught Reference Error.
6. Same as question 5 above, Line 13 is trying to print a `let` variable `discountedPrice` which is defined and used inside the for loop. Line 13 is outside the for loop and thus it doesn't know its existence, throwing the Uncaught Reference Error.
7. Line 14 prints the value of the `let` variable `finalPrice` because it's declared inside the same scope as Line 14 (inside the discountedPrices function). Line 14 prints `150`.
8. The function returns the array `discounted` that contains the final price of each price in `prices` after applying the `discountedPrice` to each of them. The function returns `[50, 100, 150 ]`. It returns the same array as when we were using `var` instead.
9.  Line 11 throws an `Uncaught ReferenceError` because `i` is a `let` variable that is defined inside the for loop scope and not defined in the scope of Line 11.
10. Line 12 prints the value of `length`. This is fine since we're not modifying the variable by printing it, and it's defined in the same scope as Line 12.
Line 12 prints `3`.
11. The function executes successfully even with a `const` variable inside the for loop. This is because a new `const` variable with the same name is created on every iteration and given a different value (as if we were overriding it). The function returns the array `discounted` that contains the final price of each price in `prices` after applying the `discountedPrice` to each of them. The function returns `[50, 100, 150 ]`. It returns the same array as when we were using `var` or `let` instead.

### Data Types
12. (A) To access the value of the name property in the student object: `student.name;`  
(B) To access the value of the Grad Year property in the student object: `student['Grad Year'];`  
(C) To call the function for the greeting property in the student object: `student.greeting();`  
(D) To access the name property of the object in the Favorite Teacher property in student: `student['Favorite Teacher'].name;`  
(E) To access index zero in the array of the courseLoad property of the student object: `student.courseLoad[0];`  