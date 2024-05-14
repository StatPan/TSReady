# Project Overview

## Reason for Creating the Project
- **(Emphasis)** When trying to configure `ts-node` as mentioned, I continuously encountered insurmountable errors that required about two hours of troubleshooting.
- I set up the project using `tsx` to ensure that others do not face similar issues and can execute the configuration smoothly.

## Advantages of the Project Template
- Utilizes TypeScript by default.
- Allows the use of `await` at the top-level of the code (outside functions).
- Operates based on ESNext standards for TypeScript.
- Enables writing code in the style of `import ~ from "./util.ts"` (similar to Python).
- Offers the benefit of using `await` at the top-level.

## How to Run the Program
Execute the following command to run `main.ts` located under the `src` directory. The code makes a simple request stored inside `util` and outputs the result as a string.
```bash
npm run main
