---
title: "The Mind–Body Problem of AI"
description: "LLMs, harnesses, and agents—and how to become a first-class citizen in the age of agents."
date: 2026-07-29
slug: "mind-body-problem-of-ai"
tags: ["ai", "agents", "models", "open source"]
draft: false
---

A friend asked: “Is Codex an LLM or an agent? What is OpenClaw? And what exactly is the difference between all of this?”

The confusion is understandable. AI products often bundle several layers under one name, then expect everyone else to understand the difference.

Here’s my attempt to make the landscape less confusing: I’m borrowing a model from something we all already understand—a human being.

## The mind

Start with the [LLM](https://en.wikipedia.org/wiki/Large_language_model).

An LLM is like a mind inside a computer. It receives an input, thinks through patterns it has learned, and produces an output. The quality of that output depends on what the model learned during training, how it was tuned, and what information it receives in the moment.

If you want a sense of what these minds look like in practice, look at the current model catalogues from the major labs: OpenAI’s [GPT-5.6 Sol](https://developers.openai.com/api/docs/models), Anthropic’s [Claude Opus 5](https://platform.claude.com/docs/en/about-claude/models/overview), Google’s [Gemini models](https://ai.google.dev/gemini-api/docs/models), and Meta’s [Llama 4](https://developer.meta.com/ai/models/llama-4/). The open-model side includes releases such as [Kimi K3](https://platform.kimi.ai/docs/overview), [DeepSeek V4](https://api-docs.deepseek.com/), and [GLM 5.2](https://blogs.nvidia.com/blog/open-secure-ai-alliance/). Put the same prompt into each one and you will get very different responses. They differ in how they reason, what they can do, what it costs to access them, and where they fail.

There is a thought experiment that helps here: the [brain in a vat](https://en.wikipedia.org/wiki/Brain_in_a_vat). A brain receives signals that stand in for an entire world, but has no body with which to touch that world. An LLM is something like that: a mind that can process what reaches it, but cannot act on anything by itself.

A mind can solve a problem in its head. It can imagine lifting a table. It can explain how to build a house. But imagining the action is not the same as doing it.

A bare model can produce text, code, or a structured response. It does not independently open your filesystem, run a command, browse the web, or change the world outside the computation that produced its output.

That distinction matters because a model can be extremely capable and still be unable to accomplish a task on its own.

## The body

The harness is the body.

Give a mind a hand and it can lift something. Give it eyes and it can see. Give it a mouth and it can speak to another person. The body is the mechanism through which the mind interacts with the outside world.

A harness does something similar for an LLM. It gives the model ways to act:

- **Tools:** Read files, run shell commands, open applications, browse the web, play games, call APIs, or interact with a product environment.
- **Context:** Provide the codebase, documents, conversation history, or other information needed for the task.
- **Permissions:** Decide what the system is allowed to read, change, send, or execute.
- **Interface:** Give a person a way to direct the system: a terminal, desktop app, chat, API, or something else.

A [command-line interface](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) is one kind of body surface. It is a text interface for executing programs. For example, the [Codex CLI](https://github.com/openai/codex) is a coding harness delivered through that surface: the terminal is how you interact with it; the model is the mind doing the reasoning; the surrounding software is the body that lets it work on a codebase.

## The agent

An agent is what you get when the mind can act through the body.

> **Mind + body = an agent that can reason and act.**

The industry uses “agent” loosely. Sometimes it means a model with a tool. Sometimes it means a system that works through a complex task for hours. For this article, the useful distinction is simpler: an agent is a mind with a body that can act.

A human being can take in the world, think through a problem, and use a body to do something about it. An AI agent does a similar thing through software: it receives a task, reasons about what to do, uses the tools available to it, observes what happened, and continues.

The system may also have internal state, objectives, loops, or policies. Those are important for how it operates. They are not the central point of this analogy. The central point is simpler: the model supplies the reasoning, and the harness gives that reasoning a way to act.

## What the mind learns along the way

Human beings are not defined only by having a mind and a body. What we learn, remember, notice, and instinctively reach for changes what we can do with them.

A person who has learned how to use a saw is more useful in a workshop than someone who has never seen one. A doctor carries specialized knowledge. A person remembers what went wrong last time. The subconscious notices patterns before the conscious mind can explain them. Instinct can move a person before deliberation catches up.

AI systems have rough equivalents:

- **Skills:** Reusable instructions, tools, code, or workflows for a particular kind of work.
- **Memory:** Information carried across interactions or retrieved when it becomes relevant.
- **Specialization:** Design choices that make the system better at one kind of job than another.

These things make an agent more capable. They are not necessarily the core model, and they are not what makes the system an agent in the first place. They are closer to the things that shape a person over time: knowledge, memory, instinct, practice, and the environments in which they have learned to operate.

## Freaky Friday: one mind, different bodies

This is where the analogy breaks, but in a useful way!

Humans cannot swap minds and bodies. We do not get to put one person’s brain into the body of the world’s best swimmer and see what happens. We certainly do not get a *Freaky Friday* menu where we choose a new body for the same mind.

AI systems can be assembled more like that.

If you like how a particular model reasons, you are not automatically restricted to the one product that first exposed it to you. Depending on compatibility, licensing, cost, and access, the same model can work through different harnesses.

One body may be built for software engineering. Another may be built for security work. Another may be built to manage a person’s messages, files, calendar, and long-running responsibilities. The mind may be similar; the resulting agent can feel completely different because it has a different body and a different job.

That is also why these systems feel so different even when they use models with similar abilities.

[Codex CLI](https://github.com/openai/codex) gives a model a body shaped around software engineering. [OpenCode](https://opencode.ai/docs/) gives it another coding-oriented body, with its own providers, permissions, tools, and extension points.

[Hermes](https://hermes-agent.nousresearch.com/docs) and [OpenClaw](https://github.com/openclaw/openclaw) are shaped more like general personal assistants: they are built to move across conversations, files, reminders, channels, and long-running responsibilities.

My own product, [Docsyde](https://usedocsyde.com), gives an agent a body designed for document work—drawing context from documents and CRM systems rather than treating a codebase as its natural habitat.

## How to choose your stack

Once you separate the layers, choosing an AI system becomes less like picking a mascot and more like building a cyborg. You are weighing different minds, bodies, tools, costs, and behaviours, then deciding which combination fits the way you want to work.

- **Budget:** The most capable option is useless if its price or usage limits make it impractical.
- **Model:** Different labs and models have different habits, strengths, weaknesses, and styles of reasoning.
- **Reasoning:** Many products let you trade speed and cost for more deliberate reasoning.
- **Harness:** What can it read, write, execute, browse, remember, or connect to?
- **Job:** Do you need a coding agent, a research assistant, a security tool, or a personal assistant?
- **Openness:** Can you inspect, modify, self-host, or replace the parts that matter to you?

One resource I find useful for figuring out how models stack up—and how they perform across different harnesses—is [Artificial Analysis](https://artificialanalysis.ai/). It helps you compare models by capability, speed, and pricing instead of trusting somebody’s permanent declaration that one model is “the best.”

## Open source as biohacking

Open source makes the human analogy stranger—and more exciting.

As human beings, we are mostly “closed source,” if you think about it. We arrive with bodies we did not design and minds shaped by biology, upbringing, and experience. We can modify ourselves, but only within limits set by what we inherited.

Open source is closer to biohacking. It gives people access to the underlying machinery. They can inspect the system, understand how it works, change parts of it, and build a new version for a different purpose.

That can happen at different layers. An open-weight model gives you access to learned parameters that can run outside one hosted product. An open-source harness gives you code you can inspect and modify. A genuinely open-source AI system makes broader freedoms available across the components needed to study, change, and share it.

Those distinctions matter. “Open” is not one switch. According to the [Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition), an open-source AI system should let people use, study, modify, and share it. The preferred form for modifying a model includes information about its training data, the complete source code used to train and run it, and the model parameters. A model can be open-weight without meeting that definition. A product can expose an open-source CLI while keeping other parts of the overall service closed.

And this is no longer a fringe conversation. NVIDIA’s [Open Secure AI Alliance](https://blogs.nvidia.com/blog/open-secure-ai-alliance/) brings together companies including NVIDIA, Hugging Face, Mistral, Microsoft, GitHub, Cloudflare, Perplexity, OpenClaw, Nous Research, Thinking Machines Lab, and many others to build and share open tools for AI safety and security. Its argument is practical: defenders need systems they can inspect, adapt, and run on their own infrastructure.

The labs driving the open-weight frontier are not all in one country. Meta’s Llama, OpenAI’s GPT-OSS, DeepSeek’s open releases, and Kimi’s model family all show different versions of the same pressure: people want capable models they can run, study, connect to their own harnesses, and improve. The details differ by release and license, but the direction is unmistakable.

The more of the mind and body people can inspect and change, the more freedom they have to combine systems for their own purposes.

Understanding the parts means you can make better decisions about the systems you use. You can ask what kind of mind you want, what kind of body it needs, and what agent the two can create together.
