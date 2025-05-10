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
- Includes enhanced code quality tools:
  - ESLint with TypeScript rules
  - Prettier for consistent formatting
  - Import sorting and validation
  - Husky for Git hooks
  - lint-staged for pre-commit validation
- Includes VSCode configuration for automatic formatting and linting.

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
├── tsconfig.json
├── .eslintrc.json
├── .eslintignore
├── .prettierrc.json
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── .husky/
│   └── pre-commit
└── package.json
```

- src/main.ts: The main TypeScript entry file.
- tsconfig.json: TypeScript compiler configuration file.
- .eslintrc.json: ESLint configuration file.
- .eslintignore: Files and directories to ignore for ESLint.
- .prettierrc.json: Prettier configuration file.
- .vscode/: VSCode settings and recommended extensions.
- .husky/: Git hooks for code quality checks.
- package.json: Project's npm configuration file.

## Start the Project
Once the project is set up, you can start it with:
```bash
npm run main
```

## Code Quality and Formatting

### Running ESLint
To check for code quality and consistency using ESLint, run the following command:
```bash
npm run lint
```

To automatically fix issues that can be resolved, run:
```bash
npm run lint:fix
```

### Running Prettier
To format your code with Prettier, run:
```bash
npm run format
```

### VSCode Integration
This project includes VSCode settings for automatic formatting on save and ESLint integration. When you open the project in VSCode, it will recommend installing the following extensions:
- ESLint
- Prettier
- TypeScript

### Git Hooks
The project uses Husky and lint-staged to run code quality checks before each commit:
- ESLint will automatically fix issues
- Prettier will format changed files
- Commits will be blocked if there are unfixable errors

To temporarily bypass these checks (not recommended), use the `--no-verify` flag with git commit:
```bash
git commit -m "Your message" --no-verify
```

### Customizing ESLint Rules
You can customize the ESLint rules in `.eslintrc.json`. The project includes several plugins:

1. **TypeScript Rules**: `@typescript-eslint`
   - Controls TypeScript-specific linting rules
   - Example: to disable no-explicit-any warnings, change its rule to "off"

2. **Import Rules**: `import`
   - Controls how imports are organized and validated
   - Example: to disable import ordering, change "import/order" to "off"

Example of disabling a rule:
```json
{
  "rules": {
    "import/order": "off"
  }
}
```

## Contributing
If you would like to contribute, please submit a PR or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.