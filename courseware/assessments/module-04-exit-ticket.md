# Module IV Exit Ticket — Software Development Lifecycle & Collaboration

**Module IV** · The SDLC; Git (commit, branch, merge); code review and teamwork
**~5–7 minutes · Not graded · Anonymous is fine**

> Git is new to most people at first. If commits, branches, or merges are still hazy, that's normal — just tell us.

---

## Quick Recap (4 questions)

**1. (Multiple choice)** A team is deciding between a **Waterfall** and an **Agile** approach for a two-year project. Which statement best describes the trade-off?

- A. Waterfall plans the whole project up front and builds in sequence; Agile builds in short increments and re-plans as it learns
- B. Waterfall is used for small projects and Agile for large ones
- C. Waterfall skips the testing phase, while Agile includes it
- D. Waterfall is used by government teams and Agile by private companies

**2. (Multiple choice)** In Git, what is a **commit**?

- A. A saved snapshot of your project at a point in time, with a message describing the change
- B. A copy of your project uploaded to GitHub so teammates can see it
- C. The act of merging your branch into the main line of work
- D. A saved list of the files you plan to change next

**3. (Short answer)** What is a **merge conflict**, in plain terms — when does Git ask *you* to step in?

**4. (Explain in your own words)** What is the purpose of a **code review**, and name one thing that makes feedback *constructive* rather than discouraging?

---

## Muddiest Point

What's the **one thing** from this module that's still fuzzy? (Commit vs. branch vs. merge, conflicts, remotes/pull requests, Markdown, code review — anything.)

---

## Connect It

We treated CivicTrack's docs as a team artifact — version-controlling its README, branching, and reviewing a change. Think of a document or process from your **prior work** that several people edited (a policy, a form, a shared report). How did your old workplace handle "who changed what" and conflicting edits — and how does Git's approach compare?

---

<details>
<summary><strong>Instructor Answer Key</strong> (review before building on this module — collapsed for in-class use)</summary>

**1.** A. The real distinction is *when you commit to the plan* — Waterfall decides everything up front and discovers problems late; Agile deliberately re-plans every couple of weeks. Watch for students who picked B or D: both are common workplace folklore, and both are worth correcting out loud, since this audience will hear them said confidently on real projects. C is simply false — Waterfall has a testing phase; it just comes last, which is the problem.

**2.** A. Reinforce the "save point / labeled checkpoint" mental model. B is a *push*, C is a *merge*, and D is roughly the **staging area** — all three are things students genuinely confuse with committing, so whichever wrong answer comes up is a useful five seconds of clarification rather than a throwaway.

**3.** A merge conflict happens when two branches changed the *same* lines (or one edited what another deleted) and Git can't decide automatically, so it marks the spot and asks a human to choose the correct result. Listen for "same lines changed two ways → human resolves."

**4.** *Purpose:* catch bugs early, share knowledge, keep quality/consistency, manage technical debt — not to judge the person. *Constructive feedback:* specific, kind, focused on the code not the author, explains the "why," suggests an alternative, acknowledges what's good. Any one solid trait is enough.

**Muddiest Point / Connect It:** Not graded. Merge conflicts and the branch→merge flow are the classic fuzzy spots — re-demo if they recur. Strong "Connect it" answers often surface real document-versioning pain ("emailing v7_FINAL_final.docx"), which is a great hook for the value of version control.

</details>
