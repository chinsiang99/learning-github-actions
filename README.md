# Overview

A repository for me to learn more about basic concepts and **CI/CD Pipeline** with **Docker** in *Github*

# What is GitHub Actions?
- A platform to **automate developer workflows**
- **CI/CD tool** is one of many workflows

# What are the workflows?
- GitHub Actions workflows are **automated processes** defined in YAML files that allow you to automate various tasks, such as **building**, **testing**, and **deploying** your code directly from your GitHub repository. These workflows are **triggered** by **events** such as *pushes* to the repository, *pull* requests, or *scheduled* intervals.

# Key Components of GitHub Actions Workflows:
1. Workflow File (YAML):

- A .github/workflows directory in your repository contains **YAML files** defining workflows.
- Each file represents a **workflow** and defines the **series of steps** to execute.

2. Events:

- Workflows are **triggered** by *events* such as **push**, **pull_request**, **schedule**, **repository_dispatch**, etc.
- For example, you can set up a workflow to trigger whenever code is pushed to a specific branch (on: push).

3. Jobs:

- Each workflow file can define *one* or more *jobs* (jobs section in YAML).
- Jobs **run in parallel by default** but can be configured to run sequentially.
- Jobs typically **represent separate tasks**, such as *building*, *testing*, or *deploying* your application.

4. Steps:

- Each job consists of a series of **steps** (steps section in YAML).
- Steps are individual tasks that execute commands, such as installing dependencies, compiling code, running tests, etc.
- GitHub provides a wide range of predefined actions (like Docker actions, actions for specific programming languages, etc.) that you can use as steps in your workflows.

5. Actions:

- Actions are reusable units of code that can be used as steps in workflows.
- Actions can be published by GitHub, open-source community members, or yourself.
- They encapsulate logic for common tasks, such as interacting with cloud services, sending notifications, or deploying applications.

6. Workflow Syntax:

- GitHub Actions workflows use YAML syntax to define configuration.
- You can define environment variables, secrets (encrypted variables), matrix builds (parallel builds with different configurations), and more within the workflow YAML.

# How GitHub Actions automate these workflows?
1. listen to event - push, pull, merge, etc...
2. trigger workflow

## example of common workflow
- commit code -> test -> build -> push -> deploy

# Where does the workflow run?
- it is managed by GitHub (BUT we can also host our own one)
- **each job** in a workflow **runs in a fresh** virtual environment