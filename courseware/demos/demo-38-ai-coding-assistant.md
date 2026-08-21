# Demo 38: AI Coding Assistant

**Module:** VIII
**Topic:** Bridging Theory to Practice
**Estimated Time:** 15 minutes
**Related reading:** [Bridging Theory to Practice](../docs/Module-08-Building-for-the-Future/01-bridging-theory-to-practice.md)

## Objective

Students will see a realistic interaction with an AI coding assistant (a chat tool like ChatGPT or Claude, an inline tool like GitHub Copilot, or an in-editor agent like Cursor or Claude Code), learn to evaluate the output critically, understand where AI excels and where it fails, and practice editing AI-generated code. The goal is to demystify AI tools and show that they augment, not replace, human judgment and understanding.

## Setup/Prerequisites

- Access to an AI coding tool: a chat assistant (ChatGPT, Claude, Gemini) in a browser, and/or an in-editor assistant (GitHub Copilot, Cursor, Claude Code) in VS Code
- VS Code or another text editor for viewing and editing code
- An account set up and ready to use the AI tool
- Familiarity with basic JavaScript or Python (we'll use one of these languages in the demo)
- A clear, specific coding problem prepared to send to the AI (see examples below)

**Recommended AI Tools (2026):**
- **Chat assistants:** ChatGPT (GPT-4-class models), Claude (e.g., the Sonnet/Opus family), Google Gemini
- **In-editor / inline completions:** GitHub Copilot (autocompletes as you type, right in VS Code)
- **In-editor agents:** Cursor, Claude Code (can read your files, run commands, and edit across a project—often by @-mentioning files for context)

> **Note on model names:** AI models update constantly. Rather than memorizing a specific version (the old `gpt-3.5-turbo` and `gpt-4` names are already retired or superseded), pick whatever current flagship model your tool offers. The techniques in this demo work the same regardless of which model is behind the curtain.

**Prepared Prompts to Use:**
- "Write a JavaScript function that validates an email address"
- "Write a Python function that finds the most common word in a list of strings"
- "Write JavaScript to fetch data from an API and display it in a table"

---

## Step-by-Step Script

### Part 1: Set Up and Show the Tool (1 minute)

**Talking Point:** "Today, AI coding assistants are everywhere, and they come in a few flavors. There are chat tools like ChatGPT and Claude where you describe what you want and paste code back and forth. There are inline tools like GitHub Copilot that autocomplete code as you type, right inside VS Code. And there are in-editor agents like Cursor and Claude Code that can actually read your project files—you @-mention a file to give it context—run commands, and make edits across multiple files for you. They're free or cheap, and they're not going away. Let's learn how to use them effectively."

**Talking Point:** "Here's the important thing: These tools are assistants. They're not replacing you. You still need to understand what the code does, spot bugs, and decide if it's appropriate. Think of it like a calculator. A calculator is amazing at math, but if you don't understand math, a calculator is useless to you."

Open your chosen tool (a chat assistant like ChatGPT or Claude works well for this walkthrough; if you have an in-editor agent like Cursor or Claude Code, you can demo the same ideas there) so everyone can see it on screen.

**Talking Point:** "Let's do a real example. I'm going to ask the AI to write a function that validates an email address. This is a common task in web development. Let's see what it produces."

---

### Part 2: Write a Clear Prompt (2 minutes)

**Talking Point:** "The quality of the AI's output depends almost entirely on the quality of your prompt. A vague prompt gets a vague answer. A clear, specific prompt gets a useful answer. Let's be specific."

Type this prompt into the AI (or similar—adjust based on your chosen tool):

```
Write a JavaScript function that validates whether a string is a valid email address.
The function should:
- Accept a string as input
- Return true if it's a valid email, false otherwise
- Handle edge cases like spaces, missing @, or multiple @ symbols
- Include a comment explaining the logic
- Keep it simple—don't over-engineer it

Show me the function and explain what it does.
```

**Talking Point:** "Notice what I did: I was specific about the language (JavaScript), the task (email validation), the edge cases to handle, and the format I want (include comments, keep it simple). I'm giving the AI guardrails. That makes the output much better."

Send the prompt and wait for the response.

---

### Part 3: Review the Output (3 minutes)

**Talking Point:** "Here's what the AI gave us. Let's read it carefully. We're not going to accept it blindly. We're going to evaluate it like a professional code reviewer."

The AI will likely return something like:

```javascript
function validateEmail(email) {
  // Basic email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage:
console.log(validateEmail("user@example.com"));    // true
console.log(validateEmail("invalid.email@"));      // false
console.log(validateEmail("no-at-sign.com"));      // false
console.log(validateEmail("has spaces@example.com")); // false
```

**Talking Point:** "Okay, let's break this down. The AI wrote a function that uses a regular expression—a regex—to validate emails. The regex pattern checks: 'does this string have characters, then an @, then more characters, then a dot, then more characters?' If yes, it's probably an email."

**Talking Point:** "What did the AI get right? It returns a boolean (true/false). It has comments. It handles some edge cases like spaces. It includes examples. That's all good stuff."

**Talking Point:** "But here's the thing: This is a regex. And regexes are notoriously hard to understand. If you can't read that pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, you shouldn't use this code. You won't be able to maintain it or fix it. So let's ask the AI for something simpler."

---

### Part 4: Ask for Clarification and Iteration (3 minutes)

**Talking Point:** "This is where AI assistants shine: you can ask follow-up questions. You're having a conversation, not just getting a one-time answer. Let's ask for a version without regex—something we can understand."

Send a follow-up prompt:

```
That's helpful, but I don't understand regex. Can you write the same function without using regex?
Use simple string methods like indexOf() or split() instead.
Explain your approach step by step.
```

The AI will provide something like:

```javascript
function validateEmail(email) {
  // Simple email validation without regex

  // Check if there's exactly one @ symbol
  const atIndex = email.indexOf('@');
  if (atIndex === -1 || email.lastIndexOf('@') !== atIndex) {
    return false; // No @ or multiple @
  }

  // Split into local and domain parts
  const [localPart, domainPart] = email.split('@');

  // Check that both parts have content
  if (!localPart || !domainPart) {
    return false; // Empty before or after @
  }

  // Check that domain has a dot (like example.com)
  if (!domainPart.includes('.')) {
    return false; // No dot in domain
  }

  return true;
}

// Example usage:
console.log(validateEmail("user@example.com"));    // true
console.log(validateEmail("invalid@"));            // false
console.log(validateEmail("nodomain.com"));        // false
```

**Talking Point:** "Much better! Now I can understand every line. The AI walks through the logic step by step. This is code I could maintain because I understand what's happening."

**Talking Point:** "And notice: the AI didn't get offended that I asked for a different approach. It just gave it to me. This is the ideal workflow. You ask, it delivers, you evaluate, and you iterate."

---

### Part 5: Spot Issues and Edit (3 minutes)

**Talking Point:** "Now, let's put on our code reviewer hat. Is this function perfect? Let's test it mentally."

Run through test cases aloud:

```
validateEmail("user@example.com")     // Returns true  ✓ correct
validateEmail("user@example")         // Returns false ✓ correct (no dot in domain)
validateEmail("@example.com")         // Returns false ✓ correct (empty local part)
validateEmail("user@.com")            // Returns TRUE  ✗ should be false — empty domain name!
validateEmail("user@example.c")       // Returns true  ✗ has a dot, but a single-letter TLD?
```

**Talking Point:** "Look at the fourth one. I expected `false`—there's no domain name before that dot, it's just `.com`. But trace it with me: `\"user@.com\".split('@')` gives us `[\"user\", \".com\"]`. So `domainPart` is `\".com\"`. Is that empty? No—it's a four-character string, so the empty check passes. Does it contain a dot? Yes. Both checks pass, and the function returns `true`."

**Talking Point:** "So the AI's code accepts an email with no domain name. That's a real bug, and here's what I want you to notice: **the code looked completely reasonable.** Every line was clear, every comment made sense, it did exactly what it said. I read it, I understood it, and I still didn't spot this until I actually traced a specific input through it. That's the thing about AI-generated code—it's fluent. Fluency reads like correctness, and it isn't the same thing."

**Talking Point:** "The fifth case is a second gap: `user@example.c` is accepted too. Real email validation is surprisingly hard. You could keep adding checks—'the domain must have characters before the dot,' 'the TLD must be at least two characters'—but the question is: how strict do you actually need to be?"

> **🤖 Working with AI:** This is the moment the whole demo exists for — say it plainly. **The AI didn't lie to you; it gave you plausible code with a hole in it, and only testing found the hole.** Note what caught it, too: not staring harder at the code, but picking a concrete input and walking it through line by line. That's the same tracing skill from Demo 32 and the debugger. AI raises the value of that skill; it doesn't retire it.

**Talking Point:** "For a real app, you'd probably do a simple check like this one, then send a confirmation email to make sure the address actually exists. That's the real validation. The function is good enough for a first pass."

Ask the AI to fix **both** gaps you found:

```
Two problems. First, validateEmail("user@.com") returns true, but there's no domain name
before the dot — it should be false. Second, make sure the part after the final dot (the
extension like .com or .io) is at least 2 characters. Can you fix both?
```

The AI will add something like:

```javascript
// Split the domain into its name and its extension
const lastDotIndex = domainPart.lastIndexOf('.');
const domainName = domainPart.substring(0, lastDotIndex);
const extension = domainPart.substring(lastDotIndex + 1);

if (!domainName) {
  return false; // Nothing before the dot — "user@.com"
}

if (extension.length < 2) {
  return false; // Extension too short — "user@example.c"
}
```

Re-run the same test cases in the console. All five now behave:

```
validateEmail("user@example.com")     // true  ✓
validateEmail("user@example")         // false ✓
validateEmail("@example.com")         // false ✓
validateEmail("user@.com")            // false ✓ fixed
validateEmail("user@example.c")       // false ✓ fixed
```

> **Instructor note — say the quiet part here.** If you only ask for the extension check (the more obvious gap), `user@.com` **still returns `true`** — `".com"` has a 3-character extension, so it sails through. The AI fixes precisely what you ask for and not one thing more. It will not volunteer the bug you didn't mention, and it won't tell you your fix was incomplete. That's why you name both.

**Talking Point:** "That's the real workflow. We started with a regex we didn't understand, asked for something simpler, reviewed it, tested it, found two gaps, and asked for specific fixes. Notice we're not just accepting code—we're driving. The AI is fast, but *we* decided what 'correct' meant."

**Talking Point:** "And notice the pattern in what just happened. The AI only fixed what I named. If I'd only mentioned the short-extension bug, the empty-domain bug would still be sitting in there, silently accepting garbage—and I'd have felt *more* confident, because I'd just 'fixed' the function. That's the trap. **You can only ask an AI to fix bugs you already found.** Which means finding them is still your job, and everything you learned this week is what lets you do it."

---

### Part 6: Key Insights and Warnings (1 minute)

**Talking Point:** "Let's talk about what we learned by doing this."

Summarize on screen:

**What AI is Good At:**
- Writing boilerplate quickly
- Suggesting multiple approaches
- Explaining code
- Generating test cases
- Handling syntax you forgot

**What AI is Bad At:**
- Understanding your specific business logic
- Writing complex algorithms from scratch
- Optimizing performance
- Security-critical code (always review!)
- Making architectural decisions

**Talking Point:** "The danger is when developers just copy-paste AI output without reading it. That's how security bugs get into production. That's how inefficient code ships. You have to stay engaged. You have to understand what you're using."

**Talking Point:** "Also remember: AI was trained on public code. Some of that code is bad. AI can't tell the difference between good code and bad code. It just predicts what's likely. So you need good judgment."

---

### Part 7: Show One More Real Example (2 minutes)

**Talking Point:** "Let's do a second quick example to show where AI really shines: boilerplate and pattern generation."

Send a prompt:

```
I need a JavaScript class for a simple shopping cart. It should:
- Add items to the cart
- Remove items
- Calculate the total price
- Get the cart contents
Include the code and a usage example.
```

The AI will generate a complete class. Show it briefly.

**Talking Point:** "Look at this. The AI wrote a complete, well-structured class in seconds. Would I have written it differently? Maybe. Would I spend 5 minutes writing this myself? Probably. This is where AI saves time. It's not doing anything magical—it's just applying patterns it's seen millions of times."

**Talking Point:** "I'd review it, test it, maybe tweak the method names to match my style, but the hard work is done. That's how AI fits into your workflow: it handles the routine stuff so you can focus on the hard thinking."

**Talking Point (optional, if you have an in-editor agent):** "If you're using an in-editor agent like Cursor or Claude Code, you wouldn't even copy-paste—you'd @-mention the relevant files for context and ask it to add the shopping cart class directly, then review the diff it proposes before accepting. Same critical-review mindset, less copy-paste. And inline tools like Copilot suggest this kind of boilerplate as you type, which you accept or reject one chunk at a time. Whatever the form factor, the rule is identical: read it, understand it, test it before you trust it."

---

## Key Points to Emphasize

- **AI is a tool that augments your thinking, not a replacement for it.** You must understand the code you use, even if AI wrote it.
- **Iteration is the key to good outputs.** Ask follow-up questions, ask for alternatives, ask for explanations. Treat it like a conversation, not a vending machine.
- **Prompt quality matters.** Specific, detailed prompts get better results. Vague prompts get vague code.
- **Always review, test, and understand.** Security-critical code, business logic, and algorithms deserve human scrutiny. Don't ship AI-generated code you haven't read.

---

## Common Questions

**Q: Won't AI replace programmers?**
A: In the near term, AI makes programmers more productive. In the long term, nobody knows. But here's what we know for sure: programmers who know how to use AI well will be more valuable than those who don't. And programmers who don't understand code—who just copy-paste from AI—will struggle no matter what. So learn to use AI as a tool, but keep building your own skills.

**Q: What if the AI gives me code that's wrong?**
A: It happens, and there's a name for it: **hallucination** — when an AI states something confidently that is simply made up. It might invent a function that doesn't exist, cite a library version that was never released, or (as we saw above) write code that's fluent and reasonable and still has a hole in it. Nothing in the tool's tone will warn you; confident is how it always sounds. AI confidently generates plausible-looking code that doesn't work. That's why you test, review, and stay skeptical. Run the code. Check edge cases. Read the output line by line. If something seems off, ask the AI to explain it or rewrite it differently. And if you're still unsure, Google it or check documentation.

**Q: Is it cheating to use AI to write code?**
A: Not in the real world. Professional developers use tools all the time. IDE autocomplete, Stack Overflow, documentation—these are all tools. AI is just another tool. The thing that matters is whether you understand what you're shipping and whether it solves the problem. If you use AI as a learning aid—asking it to explain code, rewrite code differently, or help you understand a concept—that's educational and professional. If you blindly copy-paste and ship it without understanding—that's risky, regardless of whether AI wrote it.
