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
```

## How to Run the Program With NPM
You can install `create-tsready` globally to use it anywhere.
```bash
npm install -g create-tsready
```

## Usage
### Create a New Project
Use the following command to create a new project:
```bash
npm init tsready my-new-project
```

This command will create a new directory called my-new-project, copy the TypeScript template files, and install the necessary dependencies.


## Project Directory Structure
After creating a new project, the directory structure will be as follows:
```bash
my-new-project/
├── src/
│   └── main.ts
│   └── util.ts
├── tsconfig.json
└── package.json
```

- src/main.ts: The main TypeScript entry file.
- src/util.ts: some util function file to import.
- tsconfig.json: TypeScript compiler configuration file.
- package.json: Project's npm configuration file.

## Start the Project
Once the project is set up, you can start it with:
```bash
npm run main
```

## Contributing
If you would like to contribute, please submit a PR or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.