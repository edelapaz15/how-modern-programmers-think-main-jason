# Demo 33: Prettier and ESLint in Action

**Module:** VII
**Topic:** Hands-On Practice in VS Code
**Estimated Time:** 15 minutes
**Related reading:** [Hands-On Practice in VS Code](../docs/Module-07-Programming-Syntax-and-Logic/03-hands-on-practice-in-vs-code.md)

## Objective
Students will understand the purpose of code formatters (Prettier) and linters (ESLint), see how VS Code extensions automate these tools, and learn how they catch bugs and enforce style consistency.

## Setup/Prerequisites
- VS Code installed
- Node.js installed
- Prettier extension installed in VS Code (search "Prettier" in Extensions)
- ESLint extension installed in VS Code (search "ESLint" in Extensions)
- A file ready to format and lint

## Step-by-Step Script

### Part 1: Understanding Code Formatting (3 minutes)

**Talking Points:**
"Code formatting is about style—indentation, spacing, line length, quotes, semicolons. Professional code has consistent formatting. Prettier is a tool that automatically formats your code so you never have to think about style again."

#### Creating Messy Code

1. Create a file called `messy.js` in VS Code:

   ```javascript
   function add(a,b){return a+b;}const result=add(5,3);console.log("The result is: "+result)

   const person={name:"Alice",age:25,city:"Portland"}
   console.log(person.name,person.age)
   ```

**Talking Points:**
"Look at this. It works, but it's hard to read. Everything is crammed together. No spacing, inconsistent indentation. Let's fix it with Prettier."

2. Look at the code—it's messy and hard to follow.

### Formatting with Prettier (2 minutes)

**Talking Points:**
"Prettier reformats your entire file to a consistent standard. It handles indentation, spacing, line breaks, and quote style. The best part? You don't configure it—Prettier has smart defaults that work for almost everything."

1. Right-click in the editor and select **Format Document** (or use `Shift+Alt+F` on Windows/Linux, `Shift+Option+F` on Mac)

   **Alternatively:**
   - Go to **Command Palette** (`Ctrl+Shift+P`) and type "Format Document"

**Visual Result:**
- The code reformats instantly!
- It should now look like:

   ```javascript
   function add(a, b) {
     return a + b;
   }
   const result = add(5, 3);
   console.log("The result is: " + result);

   const person = { name: "Alice", age: 25, city: "Portland" };
   console.log(person.name, person.age);
   ```

**Talking Points:**
"Wow! Prettier added spaces after parameters, proper indentation, line breaks, and semicolons. The code is immediately more readable. And we didn't have to change a single thing manually—Prettier did it all."

### Auto-Format on Save (1 minute)

**Talking Points:**
"You can configure VS Code to format automatically every time you save. That way, your code is always formatted perfectly without you thinking about it."

1. Open VS Code Settings:
   - **File** → **Preferences** → **Settings** (or `Ctrl+,`)

2. Search for "Format on Save"

3. Check the box labeled **Editor: Format On Save**

**Talking Points:**
"Now, whenever you save a file (`Ctrl+S`), Prettier automatically formats it. You can write messy code, save, and boom—it's perfect."

### Part 2: Understanding Linting (4 minutes)

**Talking Points:**
"Formatting is about style. Linting is about code quality and correctness. A linter reads your code, understands what you're trying to do, and warns you about potential bugs, style issues, and bad practices."

#### Setting Up ESLint (one-time per project)

**Talking Points:**
"Unlike Prettier, the ESLint extension does nothing on its own—it needs a project to lint. ESLint runs inside a Node project and reads a config file to know what rules to apply. Let's set that up. This only takes a minute and you do it once per project."

1. Open the integrated terminal in VS Code (`` Ctrl+` ``) and create/enter a folder for this demo, then initialize a Node project and install ESLint:

   ```powershell
   npm init -y
   npm install --save-dev eslint
   ```

2. Create the ESLint config. ESLint 9 and later use the modern "flat config" file; the older `.eslintrc` format is gone entirely as of ESLint 10. You can generate one interactively with:

   ```powershell
   npm init @eslint/config@latest
   ```

   Or, to keep the demo fast, install the two extra packages and create the config by hand:

   ```powershell
   npm install --save-dev @eslint/js globals
   ```

   Create the file **`eslint.config.mjs`** with this minimal flat config:

   ```javascript
   import js from "@eslint/js";
   import globals from "globals";

   export default [
     js.configs.recommended,
     {
       languageOptions: {
         ecmaVersion: "latest",
         sourceType: "module",
         globals: globals.node,
       },
       rules: {
         "no-var": "error",
         eqeqeq: "error",
       },
     },
   ];
   ```

> **Instructor note — two details here will bite you if you change them.** Both are verified against ESLint 10 (a fresh `npm install --save-dev eslint` installs v10; v9 reached end-of-life in August 2026). Don't "simplify" them mid-demo.
>
> - **The filename must end in `.mjs`.** `npm init -y` does *not* add `"type": "module"` to `package.json`, so a config named `eslint.config.js` containing `import` crashes with `SyntaxError: Cannot use import statement outside a module` — no linting, just a stack trace on the projector. `.mjs` forces module mode and sidesteps it. (Adding `"type": "module"` to `package.json` works too, but that's an extra step for the room to mistype.)
> - **`globals: globals.node` is not optional.** Without it, the `no-undef` rule flags every single `console.log` as `'console' is not defined` — i.e. ESLint would appear to condemn the exact code this course has taught all week. That derails the room fast.
> - **`no-var` and `eqeqeq` must be declared explicitly.** They are *not* part of `js.configs.recommended`. Without these two lines, the `var` and `==` warnings this demo is built around never appear.

**Talking Points:**
"Now ESLint knows the rules. The `js.configs.recommended` set turns on the common checks—unused variables, undefined variables, and more. The VS Code ESLint extension reads this config automatically and shows the warnings right in the editor."

#### Creating Code with Linting Issues

1. Create a file called `lint.js`:

   ```javascript
   const unused = "This variable is never used"

   function calculateSum(a, b) {
     let sum = a + b
     console.log(sum)
   }

   var oldStyle = 42

   function processData() {
     x = 100
     return x
   }

   console.log(processData())
   ```

**Talking Points:**
"This code runs, but it has several issues:
1. `unused` is declared but never used (likely a mistake)
2. `sum` is a variable that's logged but not returned (might be intentional, but looks suspicious)
3. `var oldStyle` uses the old `var` instead of modern `const` or `let`
4. `x = 100` creates a global variable accidentally (no `const`, `let`, or `var`)

A linter catches these!"

2. Look at the editor:

**Visual Result:**
- Red or yellow squiggles appear under problem areas
- If you hover over them, VS Code shows the issue
- Look at the Problems panel at the bottom

**Talking Points:**
"See those squiggles? ESLint is warning you. Hover over them to read what the warnings are."

#### Understanding the Warnings

> **Instructor note:** the messages below are exactly what ESLint emits for this file with the config above — **six problems**, verified against ESLint 10.8. Rule wording does shift between major versions, so still read the Problems panel rather than reciting from memory; if a future version words something differently, the demo is unharmed — the point is what the linter catches, not the number six.

1. Hover over the `unused` variable:
   - Message: `'unused' is assigned a value but never used` — rule `no-unused-vars`

**Talking Points:**
"ESLint knows you created a variable but never used it. This is often a bug—maybe you forgot to use it, or maybe you left it by accident. Either way, it's alerting you."

2. Hover over `var oldStyle`:
   - Message: `Unexpected var, use let or const instead` — rule `no-var`

**Talking Points:**
"Modern JavaScript discourages `var` because it has confusing scoping rules. ESLint suggests using `let` or `const`, which are clearer. This is a style and best-practice warning."

**Talking Points:**
"Notice `oldStyle` gets flagged *twice*—once for being a `var`, and once for never being used. Two different rules, two different complaints about one line. That's normal. Fix the line, both disappear."

3. Hover over `x = 100`:
   - Message: `'x' is not defined` — rule `no-undef` (it fires twice: on the assignment and on the `return x`)

**Talking Points:**
"Dangerous! You created a global variable by accident. In strict mode or modern projects, this would be an error. The linter is saying, 'You probably meant to declare this with const, let, or var.'"

4. Point at the one nobody expects — `calculateSum`:
   - Message: `'calculateSum' is defined but never used` — rule `no-unused-vars`

**Talking Points:**
"Here's one I didn't plant on purpose, and it's the most realistic warning on the screen. We wrote a whole function and never called it. That's *exactly* the kind of thing that happens on a real team—you refactor something, the last caller goes away, and now there's a dead function nobody notices for a year. A human reviewer skims right past that. The linter never does."

### Fixing the Issues (2 minutes)

**Talking Points:**
"Now let's fix these issues. Some you can click and auto-fix; others you need to understand and change manually."

1. Delete the `unused` variable (you're not using it).

2. Delete `var oldStyle = 42` entirely. Nothing uses it, so changing it to `const` would only silence one of its two warnings—the "never used" complaint would remain. Deleting dead code is the real fix.

3. Fix the accidental global:
   ```javascript
   function processData() {
     const x = 100  // was: x = 100
     return x
   }
   ```

4. Deal with `calculateSum`: it's never called, and its `sum` is logged but never returned. Make it a real function and use it.
   ```javascript
   function calculateSum(a, b) {
     const sum = a + b
     return sum
   }
   ```

The file should now read:

```javascript
function calculateSum(a, b) {
  const sum = a + b
  return sum
}

function processData() {
  const x = 100
  return x
}

console.log(calculateSum(2, 3))
console.log(processData())
```

Run it once more to prove it:

```powershell
npx eslint lint.js
```

**After fixing:**
- Every squiggle is gone and the Problems panel is empty
- `npx eslint lint.js` prints **nothing at all** and exits quietly

**Talking Points:**
"Silence. That's what success looks like—no output means no problems. It's a little anticlimactic, and you should get used to it: a lot of good tooling only speaks up when something's wrong."

**Talking Points:**
"And look at what fixing the warnings actually did. We deleted dead code, we stopped leaking a global, and we turned a function that only printed into one that actually returns a value you can use. The linter didn't just tidy the formatting—it walked us toward code that's easier to test and harder to break. That's the difference between Prettier and ESLint in one file: Prettier made it *look* consistent, ESLint made it *behave* better."

### Common ESLint Rules (1 minute)

**Talking Points:**
"ESLint checks many things. Here are some common ones you'll see:"

- **Unused variables:** Variable declared but never used (likely a mistake)
- **Missing semicolons:** Depending on your config (Prettier handles this)
- **Incorrect use of `var`:** Should use `const` or `let`
- **Undefined variables:** Using a variable that doesn't exist
- **Unreachable code:** Code after a `return` statement
- **Console statements in production:** Left-over debugging code

**Talking Points:**
"Different teams configure ESLint differently. Some are strict, some lenient. The important thing is that linting catches issues before they become bugs."

### Understanding the Difference

**Talking Points:**
"Quick recap:
- **Prettier** = formatter (style, spacing, indentation, semicolons)
- **ESLint** = linter (bugs, best practices, code quality)

They're complementary. Prettier makes code look nice. ESLint makes code work better. Use both."

## Key Points to Emphasize

- **Prettier automates formatting:** You write code, Prettier makes it beautiful. No debates about spacing or indentation—Prettier decides.
- **ESLint catches bugs and bad practices:** Unused variables, undefined variables, outdated patterns—ESLint spots them before you run the code.
- **Extensions make them automatic:** Prettier and ESLint are command-line tools, but VS Code extensions bring them into the editor with live feedback.
- **Format on Save is your friend:** Configure VS Code to format every time you save. No manual work needed.
- **Read the warnings:** ESLint messages are clear and educational. They teach you best practices.

## Common Questions

**Q: "Do I have to use Prettier and ESLint? Can't I just format code myself?"**
A: You can, but it's inefficient! In a team, everyone has different style preferences. Tools like Prettier enforce consistency automatically so your team's code always looks the same. ESLint prevents bugs. Both save time and prevent frustration. They're industry standard.

**Q: "What if I disagree with Prettier's formatting?"**
A: Prettier is opinionated by design—it makes a choice so you don't have to argue. There are some options (line length, tabs vs. spaces), but honestly, Prettier's defaults are great. The point is consistency, not perfection. Most developers stop caring after a week of using Prettier.

**Q: "Can ESLint auto-fix issues like Prettier does?"**
A: Some ESLint rules can auto-fix! Right-click a warning and you might see "Fix..." or "Fix all auto-fixable issues." Use it cautiously—auto-fixes are usually right, but manually review them first. Some issues require human judgment.

**Q: "What if my project doesn't have Prettier or ESLint configured?"**
A: For Prettier, VS Code can use sensible defaults, and many projects add a `.prettierrc` file to customize them. ESLint is different—it needs a config file to do anything. Modern projects (ESLint 9+) use a flat-config file named `eslint.config.js` or `eslint.config.mjs`. You'll still run into older projects with a legacy `.eslintrc` file; ESLint 10 no longer reads those at all, so those projects have to migrate. When you open a project, the VS Code ESLint extension reads the flat config and uses those rules. If you're starting a new project, you install and configure ESLint yourself—exactly the `npm install --save-dev eslint` plus config-file steps we did in Part 2.

**Q: "If Prettier and ESLint both check code, doesn't that mean they do the same thing?"**
A: Not quite. Prettier is strictly about formatting (how the code looks). ESLint is about quality and correctness (whether the code is good). There's a tiny overlap (semicolons, spacing), but they're different tools with different purposes. Many projects use both.
