---
title: "How I Ship Without Reading Code"
description: "How to use SLADE—Skill-Led Agentic Development & Engineering—to supervise agents and ship software."
date: 2026-08-03
slug: "how-i-ship-without-reading-code"
tags: ["ai", "agents", "software engineering", "SLADE"]
draft: false
---

I don’t read every line of code that my agents write.

That sounds irresponsible until you understand what I mean. I’m not merging code I have never thought about, and I’m not treating tests as magic. I supervise the intent, inspect the plan, keep implementation bounded, run tests, and make independent reviewers keep looking until the work is good enough to ship.

I call the method **SLADE**: Skill-Led Agentic Development & Engineering. It is my way of using skills as process supervision, so agents can move from an initial idea to a reviewed and shipped pull request.

## From copy-paste to agents

I started the same way many people did. I would ask [ChatGPT](https://chatgpt.com/) or Google’s [Bard](https://en.wikipedia.org/wiki/Google_Bard) a question about some code, copy an entire file into the chat, explain what I wanted changed, then copy the answer back into my editor.

It was manual, but it gave me a glimpse of what coding could become. I couldn’t have predicted the exact shape of agentic development. I just knew the work was going to change.

[GitHub Copilot](https://github.com/features/copilot) removed some of the copying with tab completion. Based on the first few lines, it could suggest the next line, variable, function, or class. Then [Cursor](https://cursor.com/) made prompting part of the editor itself. I was writing fewer lines and more instructions.

Later, tools such as [Claude Code](https://www.anthropic.com/claude-code) and [Codex](https://github.com/openai/codex) made it natural to work with an agent that could inspect a repository, run commands, change files, commit code, and open a pull request. The editor became less important. Planning became more important.

In January 2026, I posted that I had reached the top one percent of Cursor users with three billion tokens processed. I use the screenshot as a usage marker; the engineering-quality evidence comes from the review and shipping loop. It captures how much of my work had moved into prompting and iteration.

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">Ik I'm late to the party<br><br>But being in the top 1% of Cursor users is wild. 3B tokens, damn <a href="https://t.co/q1gxImVCMh">https://t.co/q1gxImVCMh</a></p>
  &mdash; timi the chef 👨🏾‍🍳 (@timithechef) <a href="https://twitter.com/timithechef/status/2008136073223029101?ref_src=twsrc%5Etfw">January 5, 2026</a>
</blockquote>

Eventually, the output became too large for me to supervise line by line. I needed a way to supervise the process that produced the code.

## SLADE starts with intent

A detailed feature spec is useful. The starting point can also be a PRD from a product manager, a feature request from a user, a bug report, or a conversation with an agent that eventually becomes clear enough to act on.

The first skill is [**kickoff**](https://github.com/Timmyy3000/skills/blob/main/skills/kickoff/SKILL.md). It captures the intent, understands the repository context, chooses the planning mode, and routes the work to the next stage. It stays thin: planning, implementation, review, and delivery remain separate stages.

This general idea of portable, composable skills has also been formalized by [Anthropic’s Agent Skills](https://claude.com/blog/skills): folders that package instructions, scripts, and resources an agent can load when they are relevant. My skills apply that idea to the software-development lifecycle.

Once the intent is clear, the loop looks like this:

```text
Intent
  ↓
kickoff and context capture
  ↓
plan-it
  ↓
adversarial review
  ↓
simplicity review
  ↓
optional human approval
  ↓
ship-it
  ↓
reviewed PR
```

- **[plan-it](https://github.com/Timmyy3000/skills/blob/main/skills/plan-it/SKILL.md):** turns the intent into scope, non-scope, affected files, phases, acceptance criteria, validation, and risks.
- **[adversarial-review](https://github.com/Timmyy3000/skills/blob/main/skills/adversarial-review/SKILL.md):** attacks the plan for missing requirements, hidden dependencies, bad sequencing, and untested risks.
- **[simplicity-review](https://github.com/Timmyy3000/skills/blob/main/skills/simplicity-review/SKILL.md):** asks whether the same requirements and safeguards can be met with less machinery.
- **[ship-it](https://github.com/Timmyy3000/skills/blob/main/skills/ship-it/SKILL.md):** executes the accepted plan through implementation, validation, code review, and PR readiness.
- **[code-review](https://github.com/Timmyy3000/skills/blob/main/skills/code-review/SKILL.md):** gives the finished branch a fresh pass for correctness, regressions, security, and missing tests.
- **[create-pr](https://github.com/Timmyy3000/skills/blob/main/skills/create-pr/SKILL.md):** packages the result with a useful summary and test plan instead of producing another vague PR description.

For larger work, I approve the plan before implementation. I use [Lavish](https://github.com/Timmyy3000/lavish-axi), an HTML plan editor, to read the plan, comment on specific sections, and discuss changes with the agent. The gate is there to catch a bad direction before it becomes a large diff.

## Ship-it is where the code moves

After the plan is approved, [ship-it](https://github.com/Timmyy3000/skills/blob/main/skills/ship-it/SKILL.md) takes over. It breaks the work into bounded packets with explicit ownership, dependencies, acceptance criteria, and validation.

The implementation follows [Red–Green TDD](https://en.wikipedia.org/wiki/Test-driven_development) when practical:

1. **Red:** write a test that expresses the behavior and fails.
2. **Green:** implement the smallest change that makes it pass.
3. **Refactor:** improve the implementation without changing the contract.

This matters because agents that write tests after the implementation tend to write worse tests. They already know how the code works, so the tests often describe the implementation instead of defining the behavior. Writing the failing test first gives the work a contract before the agent starts looking for a way to make its code pass.

When several packets can move independently, [Forest](https://github.com/Timmyy3000/git-forest) gives each loop its own Git worktree. I built it to make parallel agent work practical: multiple features can move through the same codebase without fighting over one working directory or branch.

The loop also supports delegated implementation. `ship-it` keeps the current agent as the orchestrator, then lets it resolve implementation as `never`, `auto`, or `always`. When delegation is enabled, the orchestrator turns the plan into bounded packets with exclusive ownership, dispatches dependency-ready packets in parallel, integrates the results, and reruns the checks itself.

That changes the model economics. A stronger model can conduct the work, make the shared decisions, and review the result while a fleet of smaller, cheaper workers handles well-bounded packets. Independent work can finish sooner and cost less than asking one expensive model to do everything. Worker reports are only inputs; the orchestrator inspects their diffs and validates the integrated result.

## The loop in production

The best example is [Nabu PR #13](https://github.com/Timmyy3000/nabu/pull/13), which added agent-first temporary shared spaces. Nabu is a Markdown-native, agent-first knowledge OS. This feature lets an agent inspect a requested folder, show the user what will be shared, get confirmation, create a temporary live shared space, and generate a one-time invite another human or agent can redeem.

I had already done the product thinking. The feature request covered the goals, non-goals, workflows, security model, tests, acceptance criteria, and API surface. Kickoff moved that decided intent into the engineering loop.

The first run moved through the stages in order: plan approval, adversarial review, implementation, Red–Green TDD, validation, independent review, and PR handoff.

<div class="workflow-gallery" aria-label="Nabu kickoff and ship-it workflow screenshots">
  <figure>
    <img src="/images/slade/nabu-plan-approval.png" alt="Nabu kickoff showing the reviewed implementation plan before code changes begin" />
    <figcaption><strong>Plan approval.</strong> The plan is reviewed before implementation begins.</figcaption>
  </figure>
  <figure>
    <img src="/images/slade/nabu-human-approval.png" alt="Nabu kickoff showing the human approval gate before implementation" />
    <figcaption><strong>Human approval.</strong> The accepted plan clears the gate and hands execution to ship-it.</figcaption>
  </figure>
  <figure>
    <img src="/images/slade/nabu-adversarial-review.png" alt="Nabu kickoff showing a fresh-context adversarial review of the plan" />
    <figcaption><strong>Adversarial review.</strong> A fresh context attacks the plan before implementation gets expensive.</figcaption>
  </figure>
  <figure>
    <img src="/images/slade/nabu-ship-it.png" alt="Nabu ship-it run showing bounded implementation and validation work" />
    <figcaption><strong>Ship-it.</strong> The accepted work moves through bounded implementation packets and validation.</figcaption>
  </figure>
  <figure>
    <img src="/images/slade/nabu-code-review.png" alt="Nabu workflow showing independent code review before pull request creation" />
    <figcaption><strong>Independent review.</strong> A separate pass checks the branch before the PR is handed off.</figcaption>
  </figure>
  <figure>
    <img src="/images/slade/nabu-pr-handoff.png" alt="Nabu workflow showing the completed branch being handed off to pull request review" />
    <figcaption><strong>PR handoff.</strong> The implementation leaves the local loop with its validation evidence attached.</figcaption>
  </figure>
</div>

<div class="post-stats" aria-label="Observed Nabu ship-it run details">
  <div><strong>66m 24s</strong><span>first ship-it run</span></div>
  <div><strong>175</strong><span>tests passed in the run</span></div>
  <div><strong>5/5</strong><span>later Enkii review state</span></div>
</div>

The PR was substantial, but I’m using it as workflow evidence rather than a file-by-file tour. The plan was reviewed, the implementation was bounded, the tests were written as part of the work, and the result passed through independent review before it merged and went to production.

## The PR keeps looping

After [create-pr](https://github.com/Timmyy3000/skills/blob/main/skills/create-pr/SKILL.md) opens the pull request, [Enkii](https://github.com/Timmyy3000/enkii) reviews it. Enkii is a tool I built for AI-powered pull-request review. It checks three things:

- code quality and bugs;
- security;
- repository-defined policy.

The agent checks for new review output, fixes the findings, and waits for another pass. The loop continues until every review lane reaches five out of five.

On Nabu PR #13, Enkii found a token-revocation mapping bug, an inconsistent duration default, and UI authorization paths that could turn an access failure into a 500 error. The security pass checked path traversal, symlink boundaries, scoped authorization, hashed secrets, atomic invite redemption, and revision-aware writes.

That is the difference between an agent that produces a diff and an engineering system that produces software I’m willing to ship.

## What I’m actually doing

I spend less time acting as a human syntax checker and more time deciding what should be built, whether the plan makes sense, whether the tradeoffs are acceptable, and whether the evidence is strong enough to ship.

That is how I can move tens of pull requests through a week, sometimes involving tens of thousands of lines of code. Those are my numbers, not a benchmark or a promise for everyone else.

<div class="velocity-card" aria-label="Engineering output over the last thirty days">
  <div class="velocity-card-top">
    <div>
      <span class="velocity-kicker">ENGINEERING VELOCITY</span>
      <h3>Last thirty days</h3>
    </div>
    <div class="velocity-total"><strong>68</strong><span>PRs merged</span></div>
  </div>
  <div class="velocity-metrics">
    <div><strong>10</strong><span>unique repos</span></div>
    <div><strong>496</strong><span>commits</span></div>
    <div><strong>+61.4k</strong><span>lines added</span></div>
  </div>
  <div class="velocity-table-wrap">
    <table>
      <caption>Scope breakdown</caption>
      <thead><tr><th>Scope</th><th>Repos</th><th>Commits</th><th>Code changes*</th><th>PRs opened</th><th>PRs merged</th></tr></thead>
      <tbody>
        <tr><td>Docsyde</td><td>4</td><td>363</td><td>+45,010 / −8,669</td><td>45</td><td>47</td></tr>
        <tr><td>Open source / agent-side repos</td><td>6</td><td>131</td><td>+16,363 / −10,421</td><td>19</td><td>17</td></tr>
        <tr class="combined"><td>Combined</td><td>10 unique</td><td>496</td><td>+61,412 / −19,098</td><td>68</td><td>68</td></tr>
      </tbody>
    </table>
  </div>
</div>

<small>* Lines added and removed in the report.</small>

SLADE is what makes this output sustainable. Agents handle more of the implementation; the system supplies intent, plans, bounded packets, tests, independent review, and explicit shipping gates. That is how I can move quickly without turning speed into guesswork.

Other approaches can work. Some people prefer multi-agent orchestration, loop engineering, graph engineering, or a much simpler single-agent workflow. SLADE is the arrangement I found useful because it lets me give agents more responsibility without giving up process control.

I supervise the intent, the plan, the boundaries, the tests, the reviews, the policies, and the final evidence. The agents handle more of the implementation, but they do it inside a system that keeps asking whether the work is correct, simple enough, secure enough, and ready to ship.

That is what I mean when I say I ship without reading code.

## Get started

You can start without rebuilding this whole system. Give your agent the intake boundary first:

```bash
npx skills add Timmyy3000/skills --skill kickoff
```

Then ask it to run kickoff on a real feature, bug report, or rough idea. Kickoff will gather the repository context, clarify the work, and route it into planning. Add the review and delivery skills when you are ready to run the full loop.
