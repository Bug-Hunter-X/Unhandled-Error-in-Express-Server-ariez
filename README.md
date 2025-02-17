# Express Server Error Handling
This repository demonstrates a common error in Express.js applications: the lack of error handling in the server startup process.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with robust error handling.

## Problem
The original code lacks error handling within the `app.listen()` callback.  If an error occurs during server startup (e.g., port in use, system error), the application crashes silently without providing any useful information about the failure.

## Solution
The solution involves adding an error-handling mechanism to the `app.listen()` callback.  The improved code catches potential errors and logs them to the console, allowing developers to diagnose and resolve issues effectively.