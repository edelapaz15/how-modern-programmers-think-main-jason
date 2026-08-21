# Activity 10: Code Review Simulation — Give Professional Feedback

**Module:** IV (SDLC and Collaboration)
**Related reading:** [Collaboration and Code Quality](../docs/Module-04-SDLC-and-Collaboration/05-collaboration-and-code-quality.md)

---

## Objective

By the end of this activity, you will have practiced the critical skill of code review. You'll learn how to identify problems, explain their impact, suggest improvements, and communicate all of this respectfully and professionally. Code review skills are as important as coding skills in a professional environment.

---

## Background

Code review is a collaborative practice where developers examine each other's code before it's merged into the shared codebase. It serves multiple purposes:

![Six steps from a local commit through push, pull request, review, merge and pull.](../diagrams/png/git-remote-pr-flow.png)

*You are standing at step 4 in this diagram.*

- **Quality:** Catching bugs, performance issues, and security vulnerabilities
- **Knowledge Sharing:** Team members learn from each other's approaches
- **Standards:** Ensuring code follows team conventions and best practices
- **Growth:** Receiving feedback helps developers improve

However, code review can be uncomfortable. Receiving criticism about your work can feel personal, even when it isn't meant that way. The best reviewers are constructive, respectful, and specific. They explain *why* something is a problem and *how* to improve it.

In this activity, you'll practice giving code review feedback using the "compliment sandwich" technique: start with what's good, identify the problem, and suggest an improvement. You'll review real-world code issues that appear in professional codebases every day.

> **A note on the code samples:** The snippets below are real JavaScript, which you won't formally learn until Module VII. That's intentional — **reading and critiquing code is a different (and earlier) skill than writing it**, and reviewers routinely assess code in languages they don't write daily. You do **not** need to understand every line. Focus on what review is actually about: naming, structure, comments, obvious mistakes, and how clearly the code communicates its intent. Trust the plain-English descriptions provided with each snippet.

---

## Part 1: Learn the Code Review Framework

Before reviewing code, understand the framework you'll use:

### The Compliment Sandwich

When giving feedback, follow this structure:

1. **Compliment** - Find something positive about the code
2. **Concern** - Explain the specific problem
3. **Suggestion** - Propose a concrete improvement

**Example:**

Bad review: "This is terrible. Stop using single-letter variables."

Good review: "I appreciate the logic here—it's clean and easy to follow. I noticed the variable `x` is unclear; is it a count, an index, or something else? Let's rename it to something more descriptive like `userCount` so the next person reading this understands immediately."

### What to Look For in Code

When reviewing, evaluate:

- **Clarity** - Can you understand what the code does without extensive explanation?
- **Correctness** - Does it do what it's supposed to do? Are there edge cases it misses?
- **Consistency** - Does it follow the team's conventions and style?
- **Performance** - Is it reasonably efficient, or does it have obvious bottlenecks?
- **Maintainability** - Will someone else (or you, in 6 months) be able to modify this easily?
- **Security** - Does it expose any vulnerabilities?

---

## Part 2: Review Three Code Snippets

Below are three code snippets with deliberate issues. For each one, write a professional code review using the compliment sandwich framework. Your review should:

1. Identify what's good about the code
2. Clearly explain the problem
3. Suggest a specific improvement
4. Use professional, respectful language

### Snippet #1: The Unclear Variable Names

```javascript
function calc(a, b, c) {
  let x = a * c;
  let y = x * (1 + b);
  return y;
}

let p = 100;
let q = 0.08;
let r = 2;

let result = calc(p, q, r);
```

**Issues to Consider:**
- What do `a`, `b`, `c` represent?
- What does `x` and `y` calculate?
- Are the variables `p`, `q`, `r` descriptive?
- What is this function actually doing? (Hint: It's calculating tax on a purchase.)

---

**Write Your Review Here:**

---

### Snippet #2: The Duplicated Logic

```javascript
function displayUserProfile(user) {
  let fullName = user.firstName + " " + user.lastName;
  document.getElementById("userNameBox").innerText = fullName;

  let email = user.email;
  document.getElementById("userEmailBox").innerText = email;

  let phone = user.phone;
  document.getElementById("userPhoneBox").innerText = phone;
}

function displayAdminProfile(admin) {
  let fullName = admin.firstName + " " + admin.lastName;
  document.getElementById("adminNameBox").innerText = fullName;

  let email = admin.email;
  document.getElementById("adminEmailBox").innerText = email;

  let phone = admin.phone;
  document.getElementById("adminPhoneBox").innerText = phone;
}
```

**Issues to Consider:**
- How much code is duplicated between these functions?
- What happens if you need to change how names are formatted? How many places do you edit?
- Could these functions be combined or refactored?
- The unnecessary intermediate variables (`let fullName = ...` before assigning to DOM)

---

**Write Your Review Here:**

---

### Snippet #3: The Missing Error Handling

```javascript
async function fetchUserData(userId) {
  const response = await fetch("https://api.example.com/users/" + userId);
  const data = await response.json();
  return [data.user.name, data.user.email];
}

// Calling the function
const [name, email] = await fetchUserData(12345);
console.log("User: " + name + ", Email: " + email);
```

**Issues to Consider:**
- What if the API request fails (network error, server down)?
- What if the API returns invalid JSON?
- What if the response doesn't contain the expected fields?
- What does the function assume, and what could go wrong?
- Should the function handle errors, or should the caller?

---

**Write Your Review Here:**

---

## Part 3: Write Your Reviews

For each snippet above, write a professional code review. Use this template for each review:

```
**Snippet #[NUMBER] Review**

**What's Good:**
[Compliment something about the code]

**The Problem:**
[Explain what's wrong and why it matters]

**My Suggestion:**
[Propose a concrete improvement, including sample code if helpful]

**Why This Matters:**
[Brief explanation of how this improves maintainability, readability, or performance]
```

---

## Part 4: Example Review (Reference)

Here's what a good code review looks like:

**Snippet Example Review**

```
**What's Good:**
The function is concise and the intent is clear at a glance. I appreciate the straightforward logic.

**The Problem:**
The variable names `a`, `b`, and `c` are too generic. When someone reads this code (or you read it in 6 months), they won't know what these parameters represent without reading the calling code. Additionally, the intermediate variables `x` and `y` don't explain what's being calculated—is this tax, discounts, totals?

**My Suggestion:**
Rename the function and variables to be self-documenting:

\`\`\`javascript
function calculateTotalWithTax(basePrice, taxRate, quantity) {
  let subtotal = basePrice * quantity;
  let totalWithTax = subtotal * (1 + taxRate);
  return totalWithTax;
}

let productPrice = 100;
let taxRate = 0.08;
let quantityPurchased = 2;

let total = calculateTotalWithTax(productPrice, taxRate, quantityPurchased);
\`\`\`

Now, anyone reading this code immediately understands what's happening.

**Why This Matters:**
Code is read far more often than it's written. Developers spend 70% of their time reading and understanding code, and 30% writing it. Descriptive names reduce the cognitive load and make future maintenance easier.
```

The example above reviews **Snippet #1**. Here are model reviews for the other two snippets so you have a target to compare your own work against. Write your own first, then check these.

**Snippet #2 Review (Reference) — Duplicated Logic**

```
**What's Good:**
Both functions are easy to read and do exactly one thing each. The step-by-step structure makes it obvious what gets written to the page.

**The Problem:**
`displayUserProfile` and `displayAdminProfile` are nearly identical—the only differences are the DOM element IDs and the parameter name. That duplication is a maintenance trap: if you change how full names are formatted (say, "Last, First"), you have to remember to edit it in two places, and the two copies will eventually drift apart.

**My Suggestion:**
Extract the shared logic into one function that takes the data plus a prefix for the element IDs:

\`\`\`javascript
function displayProfile(person, prefix) {
  document.getElementById(prefix + "NameBox").innerText =
    person.firstName + " " + person.lastName;
  document.getElementById(prefix + "EmailBox").innerText = person.email;
  document.getElementById(prefix + "PhoneBox").innerText = person.phone;
}

displayProfile(user, "user");    // userNameBox, userEmailBox, userPhoneBox
displayProfile(admin, "admin");  // adminNameBox, adminEmailBox, adminPhoneBox
\`\`\`

**Why This Matters:**
This follows the DRY principle ("Don't Repeat Yourself"). One copy of the logic means one place to fix bugs and one place to add features—less code, fewer chances for the two versions to disagree.
```

**Snippet #3 Review (Reference) — Missing Error Handling**

```
**What's Good:**
The function has a clear, single responsibility and a clean return signature—returning the name and email as a pair is a tidy interface for the caller.

**The Problem:**
The code assumes the happy path at every step. If the network request fails, `fetch` rejects and the error escapes. If the server returns non-JSON, `response.json()` rejects. And even on a 200 response, reading `data.user.name` will throw if `data.user` isn't there. As written, any of these crashes the caller with an unhandled error.

**My Suggestion:**
Guard the risky steps and fail gracefully so the caller can decide what to do:

\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch("https://api.example.com/users/" + userId);
    if (!response.ok) {                     // 4xx / 5xx never reject on their own
      throw new Error("Server returned " + response.status);
    }
    const data = await response.json();
    const user = data.user || {};
    return [user.name, user.email];
  } catch (error) {
    console.log("Could not fetch user " + userId + ": " + error.message);
    return [null, null];
  }
}
\`\`\`

**Why This Matters:**
Anything that touches the network can fail, and external APIs are outside your control. Handling those failures explicitly keeps one bad response from crashing the app and gives users (and the next developer) a clear signal about what went wrong.
```

---

## Expected Deliverable

Create a document called `code-reviews.md` or `code-reviews.txt` containing your professional reviews for all three snippets. Each review should:

- Use the compliment sandwich structure
- Identify specific problems, not vague concerns
- Provide concrete suggestions (ideally with sample code)
- Be respectful and professional in tone
- Explain why the improvement matters

Your reviews should be 150-250 words each.

---

## Reflection Questions

1. **Emotional Intelligence in Code Review:** Why do you think the "compliment sandwich" approach is more effective than just listing problems? How would you feel receiving feedback in each style?

2. **Balance Between Standards and Kindness:** How do you identify when code review feedback is about enforcing team standards vs. imposing personal preference? When should you push back on a review?

3. **Growing as a Reviewer:** After giving these reviews, what aspects of code review do you feel confident about? What would you like to practice more?

---

## Tips for Success

### When Giving Code Reviews
- **Be Specific:** Say "The variable `x` is unclear" not "Your variables are bad."
- **Explain the Impact:** Help reviewees understand why something matters.
- **Offer Alternatives:** Don't just point out problems; suggest solutions.
- **Ask Questions:** Sometimes, framing feedback as a question invites dialogue: "What does `x` represent? Could we make that clearer?"

### Tone Tips
- Use "I" and "we" statements: "I'm a bit confused by..." or "Could we simplify this by..."
- Avoid accusatory language: Not "You forgot error handling" but "We should add error handling here to handle..."
- Celebrate good code: "I really like how you modularized this" builds trust and respect.

### When Receiving Code Review
- Listen with curiosity, not defensiveness: The reviewer is trying to help, not attack.
- Ask clarifying questions: "I see your point about naming—did you have a specific name in mind?"
- Thank reviewers: "Great catch! I'll update this."

---

## Next Steps

Now that you've practiced reviewing code, you're ready to:
1. Review real pull requests on open-source projects (start small and friendly)
2. Participate in code reviews in your team
3. Ask experienced developers for feedback on your code

Code review is a conversation, not a judgment. The best teams view it as a collaborative improvement process where everyone learns and grows.

Great work completing this activity! You've learned a professional skill that will serve you throughout your entire programming career.
