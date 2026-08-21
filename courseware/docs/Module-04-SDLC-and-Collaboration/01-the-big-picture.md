# Topic 1: The Big Picture

## What Is the Software Development Lifecycle?

At its core, the Software Development Lifecycle (SDLC) is a structured process for taking an idea and turning it into software that people actually use. It's not unique to software — every industry has a development lifecycle. Manufacturing plants follow processes to turn raw materials into finished goods. Pharmaceutical companies follow rigorous phases to develop and test drugs. Construction follows blueprints through planning, permits, building, inspection, and handoff.

![The software development lifecycle as a clockwise loop of six phases: requirements, design, implementation, testing, deployment and maintenance, with a dashed feedback arrow from maintenance back to requirements.](../../diagrams/png/sdlc-lifecycle.png)

*Six phases, one continuous loop. Waterfall runs it once; Agile runs it in small loops, over and over.*

Software development is no different in principle. What differs is the specific phases, the pace at which they move, and the nature of what's being produced.

The SDLC typically includes these major phases:

1. **Requirements gathering** — Understanding what the software should do
2. **Design** — Planning how the software will be structured
3. **Implementation (Development)** — Writing the actual code
4. **Testing** — Verifying that the software works as intended
5. **Deployment** — Getting the software to users
6. **Maintenance** — Fixing bugs and making improvements after release

However, the SDLC isn't just a list of phases. It's a *framework for thinking about how these phases relate to each other*, who's responsible for what, how feedback flows, and how teams manage the inevitable changes that come up during development.

Different organizations and projects emphasize these phases differently. Some follow them sequentially, like a waterfall. Others loop through them repeatedly. Some compress all of them into a two-week cycle. Understanding how your organization approaches these phases is essential to succeeding as a programmer.

## Historical Context: Waterfall and Why It Emerged

To understand modern software development, it helps to understand where we've been. In the 1960s and 70s, when software engineering was young, the dominant model was **Waterfall**.

Waterfall treats software development like traditional engineering projects. You gather all requirements upfront, design everything, build everything, test everything, then deploy. Each phase flows into the next, like water cascading down a waterfall. It's called Waterfall precisely because going back upstream is very difficult.

Why did Waterfall emerge? Because it made sense given the constraints of the time:

- **Hardware was expensive.** You couldn't easily test on multiple machines or environments, so you had to get the design right before implementation.
- **Change was costly.** Modifying code after it was built often meant recompiling on expensive machines or re-running long test procedures.
- **Users couldn't easily provide feedback.** If the software was for a missile guidance system or a space probe, you couldn't iterate — it had to be right the first time.
- **Documentation was primary.** Without version control or easy communication tools, comprehensive written documentation was how knowledge was preserved.

These constraints created a model that actually worked well for the hardware-constrained, change-averse world of the 1960s. But by the 1990s, circumstances had changed dramatically.

### Why Waterfall Persisted (Even as Problems Appeared)

Even though computers became cheaper and more flexible, Waterfall persisted in many organizations because:

- **Risk aversion.** For large, critical systems, the idea of planning everything upfront still felt safer than the alternative.
- **Organizational structure.** Waterfall maps well onto traditional hierarchies: analysts gather requirements, architects design, developers build, QA tests, operations deploys. Each role has a clear phase where they lead.
- **Budgeting and contracts.** If you're a software vendor selling to a large client, Waterfall makes it easy to estimate costs upfront and sign a fixed-price contract. Agile makes this much harder.
- **Predictability theater.** Waterfall creates the *appearance* of control and predictability, even when it doesn't actually deliver it.

The problem: in practice, Waterfall failed frequently and spectacularly. Requirements weren't truly final until developers started building (surprising!). Designs had flaws that only appeared during implementation. Users couldn't really evaluate the software until it was mostly built. Delays in early phases cascaded catastrophically to later phases.

Many projects followed the "Waterfall trajectory" — looking great on schedule until suddenly, late in the process, massive problems emerged that couldn't be fixed within the original budget and timeline. This became the standard software industry experience for decades.

## The Agile Revolution: Manifesto, Principles, and Why It Changed Everything

By the late 1990s, a group of software practitioners — some working at startups where speed mattered, others on projects that had been burned by Waterfall — started experimenting with radically different approaches. Instead of trying to perfect the plan upfront, they built in small increments, got feedback frequently, and adapted based on what they learned.

In 2001, seventeen of these practitioners met in a ski resort in Utah and wrote the **Agile Manifesto** — a brief document that articulated their values:

> We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:
>
> **Individuals and interactions** over processes and tools
>
> **Working software** over comprehensive documentation
>
> **Customer collaboration** over contract negotiation
>
> **Responding to change** over following a plan

These four lines might seem obvious now, but they were genuinely revolutionary in 2001. They explicitly rejected Waterfall's heavy documentation, fixed plans, and top-down control.

The Manifesto also articulated twelve principles, including:

- Welcome changing requirements, even late in development
- Deliver working software frequently
- Business people and developers must work together daily
- Build projects around motivated individuals and trust them
- The most efficient communication is face-to-face conversation
- Working software is the primary measure of progress
- Sustainable development — maintain a constant pace indefinitely
- Continuous attention to technical excellence

### Why Agile Changed Everything

Agile worked because it acknowledged several realities that Waterfall tried to deny:

1. **You can't gather perfect requirements upfront.** Users don't know exactly what they want until they see something concrete. Requirements naturally evolve as understanding increases.

2. **Working software provides feedback that nothing else can.** A prototype or half-finished feature tells you more than a thousand pages of requirements documentation. Real feedback is better than theoretical correctness.

3. **Change is not exceptional — it's normal.** Business conditions change, technology changes, understanding deepens. A process that treats change as failure is fighting reality.

4. **Small, frequent feedback loops catch problems early.** Instead of discovering a fundamental design flaw after six months of development, you discover it in a two-week cycle and adjust.

5. **Motivated, trusted teams are more productive than control-heavy processes.** People want to do good work. Processes that trust professional judgment and empower decision-making attract and retain good people.

Agile didn't eliminate the need for planning, design, testing, or documentation. Instead, it changed when and how these activities happened. Rather than a phase called "design" that everyone does together, design becomes something that happens continuously as the code is built. Rather than a phase called "testing" after development is "complete," testing is integrated throughout.

## Common Methodologies Compared

The Agile Manifesto is a set of values, not a specific process. Many methodologies have emerged that claim to follow Agile principles, and they differ significantly in their practices.

### Waterfall

**When it's used:** Large government contracts, hardware-software integrated systems, regulated industries where change control is legally mandated, projects where users are not available for feedback, embedded systems where deployment is expensive.

**Core cycle:** Requirements → Design → Development → Testing → Deployment → Maintenance

**Strengths:**
- Clear deliverables and timeline predictability
- Good for projects with stable, well-understood requirements
- Extensive documentation created during the process
- Suits fixed-price contracts and traditional procurement

**Weaknesses:**
- Doesn't handle requirement changes well
- Testing happens late, so problems emerge late
- Users don't see working software until the very end
- Heavy upfront planning often produces plans that don't match reality

### Scrum (The Most Popular Agile Framework)

**When it's used:** Mobile app development, web applications, startups, projects where requirements are somewhat uncertain, teams that want predictable delivery schedules.

**Core cycle:** Sprint planning → Daily standup → Development → Sprint review → Sprint retrospective (repeat in 1–4 week cycles, typically 2 weeks)

**Key concepts:**
- **Sprint:** A fixed time box (usually 2 weeks) during which a team builds a specific set of features
- **Product backlog:** A prioritized list of features/requirements
- **Sprint backlog:** The subset of the product backlog the team commits to in the current sprint
- **Standup:** A 15-minute daily synchronization meeting
- **Sprint review:** Demo of completed work to stakeholders
- **Retrospective:** Team reflection on what went well and what could improve

**Strengths:**
- Clear rhythm and predictability
- Regular feedback from stakeholders
- Easy to measure progress (completed features per sprint)
- Supports teams and organizations of many sizes
- Excellent for managing changing requirements

**Weaknesses:**
- Can devolve into theater if not practiced carefully (standups become status reports instead of synchronization)
- Sprints can feel arbitrary and fragmented
- Works best with co-located or highly synchronized teams
- Can create pressure to add features instead of maintain quality

### Kanban

**When it's used:** Ongoing maintenance work, support teams, systems that need continuous deployment, teams with highly variable work.

**Core cycle:** Continuous, with work flowing through states (To Do → In Progress → Done)

**Key concepts:**
- **Work-in-progress (WIP) limit:** A cap on how many items can be in progress at once (enforces focus and quality)
- **Flow:** Work moves through the system as quickly as possible, reducing delays
- **Visualize the workflow:** Typically on a physical or digital board showing all work stages

**Strengths:**
- Supports continuous delivery
- Flexible for work that doesn't fit into sprints
- Reduces work-in-progress and context switching
- Good for teams supporting multiple products
- Less ceremony than Scrum

**Weaknesses:**
- Requires discipline to maintain WIP limits
- Less natural rhythm than Scrum for teams that like predictable cycles
- Can be harder to estimate and forecast
- Needs clear definition of "done"

### Lean

**When it's used:** Organizations trying to eliminate waste broadly, manufacturing companies moving to software, teams focused on efficiency metrics.

**Core principles:**
- **Identify value:** What does the customer actually care about?
- **Eliminate waste:** Anything that doesn't contribute to value (meetings, processes, documentation, partially done work)
- **Optimize the whole:** Don't optimize individual pieces at the expense of the whole system
- **Continuous improvement:** Small, constant enhancements
- **Respect people:** Involve workers in identifying waste and improvements

**Strengths:**
- Forces focus on what customers actually value
- Naturally leads to efficiency and speed
- Applies to the entire organization, not just engineering
- Strong emphasis on removing bureaucracy

**Weaknesses:**
- Can be misinterpreted as "work faster" or "cut costs"
- Requires buy-in from across the organization
- Can lead to rushing quality if not balanced carefully
- Harder to apply to entirely new products (where value definition is unclear)

### DevOps

**When it's used:** Cloud-native applications, companies with rapid deployment cycles, systems where operations and development must be deeply integrated.

**Core focus:** Breaking down the barrier between development (building features) and operations (running systems in production).

**Key practices:**
- **Automation:** Automated testing, deployment, infrastructure provisioning
- **Continuous Integration/Continuous Deployment (CI/CD):** Code changes are tested and deployed automatically
- **Monitoring and feedback:** Constant telemetry from production systems
- **Shared responsibility:** Developers are responsible for code in production, operations engineers understand how to write code
- **Infrastructure as Code:** Servers and infrastructure are defined in code, version-controlled, and reproducible

**Strengths:**
- Enables very rapid deployment (dozens of changes per day for some organizations)
- Catches problems quickly through automated testing
- Reduces handoffs and finger-pointing between teams
- Supports the scalability demands of modern cloud applications

**Weaknesses:**
- Requires significant investment in automation and tools
- High barrier to entry for smaller teams or organizations
- Can deprioritize long-term planning in favor of constant change
- Requires significant upfront work before benefits appear

### The Spectrum

These methodologies exist on a spectrum. Waterfall is plan-heavy, change-resistant, and sequential. Scrum is iterative and adaptive, with structured rhythms. Kanban is continuous and flow-based. DevOps emphasizes automation and production integration.

![Waterfall shown as a staircase of six phases descending once from requirements to maintenance, beside Agile shown as three repeating two-week sprint circles, each containing plan, build, test and ship.](../../diagrams/png/waterfall-vs-agile.png)

*The same six phases. Completely different rhythm.*

In practice, most teams borrow from multiple approaches. A team might use Scrum for feature development but Kanban for support work. A company might use Lean principles to guide overall strategy while Scrum structures the engineering work.

## Key Phases of Software Development

Regardless of which methodology you use, the fundamental activities of software development remain consistent. Let's examine each phase:

### Requirements Gathering

The essential question: "What should this software do?"

In Waterfall, this is a discrete phase that happens once, upfront. A team of business analysts and product managers works with stakeholders to document requirements, often producing a lengthy requirements specification document.

In Agile, requirements gathering is continuous. The product manager maintains a prioritized list of features (the "product backlog"), and the team regularly discusses priorities and clarifications with stakeholders.

**Key considerations:**
- Not all stakeholders know what they need upfront
- Good requirements are specific and testable ("Users should be able to reset their password via email" is better than "The system should be user-friendly")
- Gathered requirements are necessarily incomplete — new needs emerge during development
- Requirements can conflict (speed vs. accuracy, features vs. cost), requiring explicit prioritization

### Design

The question: "How will we build this?"

Design in software ranges from high-level architecture (how many servers? where does data live? how do components communicate?) to low-level design (what data structures will this function use? what's the algorithm?).

In Waterfall, design is a distinct phase that produces design documents, often produced before any code is written.

In Agile, design is distributed. Some design happens before coding (perhaps sketching out the database schema), but much happens as code is written. Agile teams often practice "emergent design" — letting the design evolve as the code grows.

**Key considerations:**
- Design constrains implementation, so getting it right matters
- But no design is perfect until you start implementing it
- Over-designing wastes time; under-designing creates problems later
- Design is a conversation between developers and architects, not a top-down mandate

### Implementation (Development)

The question: "How do we write the code?"

This is where developers spend most of their time. Modern development involves:

- Writing code that solves the requirements
- Writing tests alongside or before the code
- Documenting complex logic
- Reviewing code with peers
- Integrating with existing systems
- Managing versions and changes

The "how" of development — the programming languages used, the frameworks, the coding standards — is often already decided by the organization. As a new programmer, you'll fit into existing development practices.

**Key considerations:**
- Development is not just typing code — it's constant problem-solving, learning, and adaptation
- Code quality matters because developers spend more time *maintaining* code than writing it
- Development is usually the longest phase in absolute time

### Testing

The question: "Does the software work as intended?"

Testing is often described as a phase that happens after development, but modern practice integrates testing throughout development. Developers write unit tests as they build. QA teams write integration and system tests. Users conduct acceptance testing.

Types of testing:
- **Unit tests:** Individual functions or components tested in isolation
- **Integration tests:** Multiple components working together
- **System tests:** The entire system tested as a whole
- **User acceptance testing (UAT):** Real users testing against actual requirements
- **Regression testing:** Ensuring new changes don't break existing functionality

**Key considerations:**
- Testing can't prove software is perfect, only that it works in tested scenarios
- Automated testing is more cost-effective than manual testing at scale
- Testing is an investment, not a cost — it prevents expensive bugs in production

### Deployment

The question: "How do we get this to users?"

Deployment used to be a big event — the "go-live" where the entire new system switched over. Modern deployment is often continuous — new features go to users as soon as they're ready.

Deployment involves:
- Setting up the necessary infrastructure
- Moving code and data to production systems
- Configuring the live environment
- Running migrations if the data structure changed
- Monitoring for problems
- Coordinating with operations teams
- Communicating with users about new features

**Key considerations:**
- Deployment is an operational concern, not just a development concern
- Failed deployments are costly (angry users, revenue loss, emergency fixes)
- Automating deployment reduces human error and enables faster iteration

### Maintenance

The question: "How do we keep this working and evolving?"

After deployment, the work doesn't end. Teams must:

- Fix bugs that users discover
- Patch security vulnerabilities
- Make small enhancements
- Keep the system running smoothly
- Eventually, make major improvements

Maintenance can consume 40–80% of a system's total cost over its lifetime. Code that's easy to understand, test, and modify is significantly cheaper to maintain.

**Key considerations:**
- Maintenance is not optional — all software needs it eventually
- The code you write today is someone's maintenance burden tomorrow (often you)
- Maintenance is often underestimated or undervalued, but it's where software spends most of its life

## Roles in a Software Team

Software teams require diverse skills and perspectives. Let's examine common roles:

### Developers (Software Engineers, Programmers)

Developers write code. But that's almost trivial. Really, developers:

- Translate requirements into working code
- Design solutions that balance many competing concerns (performance, maintainability, correctness, simplicity)
- Collaborate with other developers to ensure consistency
- Fix bugs and respond to change requests
- Learn continuously (languages, frameworks, best practices evolve constantly)
- Take responsibility for code quality

Developers often specialize: frontend developers build user interfaces, backend developers build business logic and data access, full-stack developers do both. Mobile developers focus on iOS/Android. Data engineers focus on large-scale data processing. DevOps engineers focus on infrastructure and deployment automation.

### Quality Assurance (QA) Specialists

QA specialists ensure the software works correctly. They:

- Design and execute test plans
- Find bugs and document them clearly
- Understand both the requirements and the system
- Think about edge cases and failure modes
- Automate repetitive testing
- Advocate for user needs

QA is not "finding bugs at the end." Modern QA is integrated throughout development, often in partnership with developers.

### Product Managers/Product Owners

Product managers represent users and business interests. They:

- Understand user needs and market conditions
- Define priorities for features
- Make tradeoff decisions (this feature vs. that one, speed vs. thoroughness)
- Communicate with stakeholders
- Constantly adapt priorities based on feedback

In Scrum, the "Product Owner" role is explicit. In other organizations, this might be called Product Manager or simply the business stakeholder who works with the development team.

### Scrum Masters (Agile Coaches)

Scrum Masters facilitate Agile processes. They:

- Coach teams on Agile practices
- Remove obstacles that block progress
- Facilitate ceremonies (standups, retros, planning)
- Help teams continuously improve
- Shield teams from external disruption

Scrum Masters are not project managers in the traditional sense — they don't assign tasks or monitor individual performance. They're facilitators and teachers.

### Architects and Technical Leads

Architects (in larger organizations) design the overall structure of systems:

- Make large-scale technical decisions
- Balance tradeoffs (scalability vs. simplicity, performance vs. maintainability)
- Ensure different components work together
- Guide teams on technical direction
- Often have deep expertise in specific domains (databases, security, cloud infrastructure)

Technical leads are senior developers who also mentor, review code, and guide architectural decisions within a smaller scope.

### Designers

User experience (UX) designers and user interface (UI) designers:

- Create interfaces that are usable, attractive, and aligned with business goals
- Understand user workflows
- Iterate on designs based on user feedback
- Provide specifications for developers
- Often conduct user research to validate assumptions

### DevOps Engineers (Site Reliability Engineers)

DevOps engineers focus on operations and reliability:

- Build and maintain the infrastructure that runs the software
- Implement automated testing and deployment
- Monitor production systems
- Respond to outages
- Optimize systems for performance, cost, and reliability
- Write code (increasingly), but infrastructure code rather than application code

### Data Analysts and Data Scientists

On teams working with data:

- Analyze data to answer business questions
- Build machine learning models
- Design data pipelines
- Communicate insights to business stakeholders
- Often act as liaisons between business and technical teams

---

## How Teams Organize: Sprints, Standups, Retrospectives, Planning Poker

Beyond individual roles, teams need processes to coordinate work. Agile/Scrum practice provides a specific structure:

### Sprints

A sprint (typically 1–4 weeks, most commonly 2 weeks) is a time-boxed iteration. The team commits to completing a specific set of work during the sprint, then reviews progress and plans the next sprint.

Why sprints work:

- **Regular rhythm:** Teams know when planning happens, when reviews happen, when retrospectives happen
- **Psychological commitment:** The sprint creates closure — you finish something, you celebrate it, you start fresh
- **Regular feedback:** Every sprint review is an opportunity for stakeholders to see progress and provide input
- **Iterative refinement:** Problems discovered in one sprint can be addressed in the next

### Daily Standups

A 15-minute daily meeting where each team member briefly answers three questions:

1. What did I complete yesterday?
2. What do I plan to complete today?
3. What's blocking me?

The purpose is not reporting to a manager — it's synchronization. Team members find out about changes, offer help to blocked colleagues, and coordinate dependencies.

Good standups are *fast* and *focused*. Problem-solving happens offline, not during the standup.

### Sprint Planning

At the start of a sprint, the team meets to:

- Select work from the product backlog
- Break work down into tasks
- Estimate the effort involved
- Commit to a sprint goal

This is where priorities set by the product owner meet the reality of what the team can achieve. Teams estimate their own capacity based on experience.

### Planning Poker

An estimation technique used during planning. Each team member has cards numbered like the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, etc.). For each piece of work, everyone estimates simultaneously by holding up a card. If estimates differ widely, the team discusses until reaching consensus.

Why this works:

- Estimates are faster than lengthy discussion
- Discussion happens only when there's disagreement
- Quieter team members aren't steamrolled by confident ones
- The Fibonacci sequence reflects uncertainty (is something a 3 or 5 hours? hard to say, so estimate at 5)

### Sprint Review

At the end of a sprint, the team demos completed work to stakeholders and gathers feedback. This is a key feedback loop in Agile.

### Retrospective

After the sprint review, the team meets without stakeholders to reflect:

- What went well?
- What could we improve?
- What will we commit to improving next sprint?

Retrospectives are sacred in healthy Agile teams. They're where continuous improvement happens.

## Success Factors in Software Projects

What makes some projects succeed while others fail? Research has identified consistent factors:

### Clear Requirements

Not "perfect" requirements (impossible), but clear enough that the team understands what success looks like. Ambiguity creates scope creep, missed expectations, and rework.

In Agile, this means prioritized user stories that the team understands. In Waterfall, it means documented specifications. The key is clarity and testability.

### Strong Communication

Software teams depend on sharing information constantly. Successful teams have:

- Regular synchronization (standups, reviews, retros)
- Easy discussion channels (not hidden in long email chains)
- Documentation that reflects current reality
- Cross-functional collaboration (developers talking to designers and product, not siloed)

### Comprehensive Testing

Software is complex. Testing provides confidence that it works. Successful teams:

- Write tests as code is developed, not after
- Automate repetitive testing
- Include both unit tests (individual components) and integration tests (components working together)
- Have QA specialists who think critically about edge cases
- Use production monitoring to catch problems users experience

### Iteration and Feedback

Plan based on assumptions, build, get feedback, adjust. This cycle should be short (days to weeks) rather than long (months to years).

Successful teams:

- Release frequently (even if not to all users)
- Gather metrics and user feedback
- Adapt based on what they learn
- Treat plans as hypotheses, not gospel

### Technical Discipline

Good code matters. It's more maintainable, has fewer bugs, and enables faster change.

Successful teams:

- Enforce code review (discussed more later)
- Invest in testing and automation
- Pay down technical debt gradually rather than letting it accumulate
- Refactor regularly to improve code quality
- Use tools and practices that catch errors automatically

### Psychological Safety

People need to feel safe admitting mistakes, asking questions, and speaking up about problems. Teams without psychological safety hide problems until they become emergencies.

Successful teams:

- Blameless postmortems (focus on preventing recurrence, not blame)
- Celebrate learning from mistakes
- Empower team members to make decisions
- Trust professionals to do their work without micromanagement

---

## Why Projects Fail: The Common Patterns

Understanding success factors is useful, but understanding failure is often more instructive. Here are the patterns that lead to failed projects:

### Scope Creep

The project expands beyond initial plans as "just one more feature" is added repeatedly. This is usually caused by:

- Unclear priorities (everything is equally important)
- Weak product management (no one saying "no" to new requests)
- Waterfall approaches that don't allow early feedback (all features must fit in the initial contract)
- Teams not tracking scope against timeline

### Poor Communication

When information doesn't flow:

- Requirements are misunderstood
- Developers work at cross-purposes
- Problems aren't escalated until they're emergencies
- Designs conflict because teams didn't coordinate

Poor communication is often root cause disguised as technical problems.

### Technical Debt

The metaphor: borrowing against your future by taking shortcuts now. Skipping tests, copying code instead of reusing, quick fixes that make the code harder to understand — these work short-term but create problems long-term.

When technical debt accumulates without being addressed:

- Adding features becomes slower
- Bugs become more common (changes break unexpected things)
- Team morale declines (working in ugly code is miserable)
- New developers spend months learning overly complex systems

### Skipped Testing

Testing is often the first thing cut when a project is behind schedule. This is almost always a mistake:

- Bugs that would have been caught in testing escape to users
- Developers waste time on manual testing
- Problems compound as developers work on buggy code
- User trust erodes

### Unrealistic Schedules

Sometimes projects fail simply because they were planned to fail. Timelines are set based on wishful thinking rather than realistic estimation.

Experienced teams get better at estimation, but some patterns are perennial:

- Managers commit to dates before understanding the work
- Individual contributors pad estimates because they're not trusted
- Risk and uncertainty are ignored in planning
- Learning and ramp-up time are underestimated

### Weak Product Management

Great software solves problems people care about. Without clear understanding of user needs and business goals:

- The team builds the wrong thing
- Priorities shift constantly (no clear vision)
- Stakeholder expectations are unmet

### Insufficient Team Capacity or Skill

Building software requires specific skills: programming, testing, design, infrastructure, etc. Teams that lack necessary skills or are understaffed struggle regardless of methodology.

This is compounded by poor hiring decisions or inadequate onboarding.

---

## Bridge from Business: Software Development and Other Industries

If you're coming from another career, you might notice that software development isn't as unique as it sometimes seems. Let's draw some parallels:

### SDLC and Product Development

The SDLC parallels how manufacturing or consumer product companies develop new products:

- **Requirements phase** ≈ Market research and product specification
- **Design phase** ≈ Engineering and tooling design
- **Implementation phase** ≈ Manufacturing setup and production
- **Testing phase** ≈ Quality control and beta testing
- **Deployment phase** ≈ Distribution and launch
- **Maintenance phase** ≈ Customer support and product iterations

One key difference: software is infinitely reproducible (you can deploy to millions of users instantly), while physical products have manufacturing constraints. This changes economics.

### Agile and Lean Manufacturing

Agile software development borrows heavily from Lean manufacturing principles. Both share:

- **Focus on value:** What do customers actually want?
- **Eliminate waste:** Remove unnecessary work
- **Continuous improvement:** Small, regular enhancements
- **Respect for people:** Trust workers to optimize their own processes

Toyota's production system, developed in the 1950s, is a precursor to Agile software. If you have manufacturing experience, Agile will feel familiar.

### Code Review and Quality Processes

Code review (where developers examine each other's work before merging) parallels:

- **Financial audits:** External review for correctness and compliance
- **Manufacturing quality gates:** Inspection before the product moves forward
- **Editorial review:** Before publication, documents are reviewed by others
- **Medical peer review:** Surgeons and researchers present work to peers before implementation

The principle is consistent: having a peer review something independently catches errors and raises quality.

### Version Control and Change Management

Git's version control parallels:

- **Financial ledgers:** Every transaction is recorded with timestamp and who made it
- **Building permits and architectural drawings:** Versions of plans are tracked with dates and approval authority
- **Document management systems:** Corporate documents are versioned with change history and approval workflows

The principle: track who changed what and when, so you can understand history and, if needed, reverse changes.

---

## Key Takeaways

- The Software Development Lifecycle is a structured process with consistent phases: requirements, design, implementation, testing, deployment, and maintenance.
- Waterfall treats these phases sequentially, which works for stable requirements but struggles with change.
- Agile treats these phases iteratively, assuming that learning and feedback will happen throughout development.
- Different methodologies (Scrum, Kanban, Lean, DevOps) are tools for different contexts.
- Software teams require diverse roles: developers, QA, product managers, designers, architects, and others.
- Success depends on clear communication, continuous feedback, technical discipline, and psychological safety.
- Projects fail for predictable reasons: scope creep, poor communication, accumulated technical debt, insufficient testing, unrealistic schedules, weak product management, or inadequate team capacity.

---

## Review and Discussion Questions

1. **Reflect on your experience before programming:** Did your previous career involve phases similar to software development? (e.g., product launches, projects, quality checks) How were they similar or different from the SDLC as described?

2. **Think about the last major project you worked on:** Where would you place it on the Waterfall-to-Agile spectrum? Did the team use practices that felt more aligned with Waterfall, Agile, or some hybrid?

3. **Technical debt is described as "borrowing against your future."** Have you seen this pattern in other fields — taking shortcuts now that create problems later? How was it handled?

4. **Psychological safety is listed as a success factor.** What does it look like when a team has high psychological safety? What behaviors destroy it?

5. **Scope creep is identified as a common failure pattern.** Why do you think "just one more feature" is so compelling? How might a team prevent it?

6. **Which of the roles described (developer, QA, product manager, designer, etc.) do you think would be most interesting to work with as a programmer?** What questions do you have about how developers collaborate with that role?
