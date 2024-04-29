1. What was the bug?
The bug is that the sum is concatenating the two digits (i.e 5 + 5 = 55) because the two nums are being treated as strings.

2. How would you fix it? 
I would change the way these nums are being processed so that they don't default to becoming a string by wrapping the nums with `Number()` (which converts strings to numbers). Fix is on the screenshot folder as fix.png.
