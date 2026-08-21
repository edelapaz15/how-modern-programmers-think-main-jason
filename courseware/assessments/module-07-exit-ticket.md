# Module VII Exit Ticket — Programming Syntax & Logic

**Module VII** · Real code at last — JavaScript syntax, reading a function, a Java contrast, and how a web page fits together
**~5–7 minutes · Not graded · Anonymous is fine**

> You've read and written real code now. If syntax, JavaScript, or how the pieces fit still feels fuzzy, tell us.

---

## Quick Recap (4 questions)

**1. (Multiple choice)** In JavaScript, which line correctly stores the text `New` in a variable called `status`?

- A. `status = New`
- B. `let status = "New";`
- C. `let status == New;`
- D. `variable status: New`

**2. (Short answer)** Here's a small function:

```javascript
function countOpen(requests) {
  let total = 0;
  for (const r of requests) {
    if (r.status === "New" || r.status === "In Progress") {
      total = total + 1;
    }
  }
  return total;
}
```

You don't have to write anything like it yet — just read it. **What does it give back, and what would it return for the 14 CivicTrack requests?**

**3. (Short answer)** On a web page, what is the rough job of each: **HTML**, **CSS**, and **JavaScript**? (One short phrase each.)

**4. (Explain in your own words)** We contrasted **JavaScript** and **Java**. Name one important way they differ (think about where each runs, or compiled vs. interpreted).

---

## Muddiest Point

What's the **one thing** from this module that's still fuzzy? (Variables, syntax like `=` vs `==`, the HTML/CSS/JS split, or the Java contrast — anything.)

---

## Connect It

CivicTrack went from "an app we took apart" to a small piece of **real logic in code** in this module. Think about a rule from your **prior work** ("if the request is older than 30 days, flag it") and describe, in plain words or rough code, how you'd express it as a condition — the same `if (...)` shape we practiced.

---

<details>
<summary><strong>Instructor Answer Key</strong> (review before building on this module — collapsed for in-class use)</summary>

**1.** B — `let status = "New";`. Declares a variable, uses single `=` to assign, quotes the string, ends with a semicolon. (`==` is comparison, not assignment; the others aren't valid JS.)

**2.** It counts how many requests are still open, and returns **9** for the CivicTrack data (5 New + 4 In Progress). *Listen for:* "it goes through the list one at a time," "it adds one each time the status matches," "it hands back a number." Reading comprehension is the skill here, not syntax — accept a plain-English description. If the number is wrong but the *shape* is right ("it counts the ones matching those two statuses"), that's a pass; go back to the count itself, not the code. This same function is the loop-plus-conditional pattern from Demo 28 and the `COUNTIF` from Demo 22, in a third form.

**3.** HTML = structure/content (the elements on the page); CSS = presentation/styling (layout, color, fonts); JavaScript = behavior/interactivity (responding to clicks, changing the page). Accept any clear phrasing of structure / style / behavior.

**4.** *Listen for any one real difference:* JavaScript typically runs in the **browser** and is **interpreted** and loosely typed; Java is **compiled** first (`javac` → bytecode on the JVM) and is strongly typed. They are different languages with similar-looking syntax — not two names for the same thing.

**Muddiest Point / Connect It:** Not graded. The `=` vs `==` distinction and "JavaScript ≠ Java" are the classic fuzzy spots — re-demo in VS Code if they recur. Strong "Connect it" answers (a clear condition drawn from real experience) show the logic model transferred.

</details>
