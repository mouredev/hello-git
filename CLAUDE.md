# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Hello Git & GitHub**, an educational course repository by Brais Moure (mouredev). It is NOT a traditional software project with builds or tests - it's a learning resource with:
- 45+ video lessons (5h 45min total) teaching Git and GitHub fundamentals
- A published book (2nd edition, April 2024) with 300+ pages
- Interactive community learning through a fork-based contribution workflow
- 2,600+ merged PRs from course participants practicing Git/GitHub

## Repository Purpose

The repository serves as both:
1. **Course material**: README.md contains complete course documentation with timestamped video links
2. **Practice sandbox**: Students fork the repo and contribute to practice real Git/GitHub workflows

## Key Architecture

### Directory Structure
- **Media/** - Course multimedia assets (header images, book screenshots, Git command GIF)
- **clases/** - Simple Python example files (hellogit.py, hellogit2.py) for Git practice
- **hello.md** - THE PRIMARY COLLABORATIVE FILE - participant list where students add their GitHub username
- **README.md** - Complete course documentation with 45 lessons organized into Git (1-22) and GitHub (23-46) sections
- **notas_segunda_ed.md** - Release notes for book second edition

### The Core Exercise

**hello.md is the central interactive learning tool**. The workflow students practice:
1. Fork this repository
2. Clone their fork locally
3. Create a new branch
4. Add their GitHub username to hello.md (one line per participant)
5. Commit and push changes
6. Open a Pull Request to the main repository

This exercise (introduced in Lesson 37) teaches the complete collaborative Git/GitHub workflow.

## Working with This Repository

### No Build/Test/Lint Commands
This repository has:
- No package.json, requirements.txt, or dependency files
- No test framework or CI/CD pipelines
- No build process
- Only a .gitignore file (excludes .DS_Store)

### Standard Git Workflow for Contributing

When helping users contribute to this repository (adding names to hello.md):

```bash
# Ensure you're on the correct branch
git checkout -b <branch-name>

# Edit hello.md to add username
# (Add one line with GitHub username to the participant list)

# Stage and commit
git add hello.md
git commit -m "Add <username> to participant list"

# Push to remote branch
git push -u origin <branch-name>

# Create PR through GitHub
```

### Course Structure Reference

- **Lessons 1-22**: Git fundamentals (init, add, commit, branch, merge, stash, conflict resolution, etc.)
- **Lesson 23-46**: GitHub concepts (remotes, authentication, fork, PR, collaborative workflow, GitHub flow, Actions, Pages)
- **Lesson 37**: The practical exercise where students add their name to hello.md

### Important Files Context

**README.md** (2,400+ lines):
- Complete course curriculum with YouTube timestamps
- Learning objectives and course structure
- Links to the published book (paperback, Kindle, eBook)
- External resources (official Git docs, GitHub docs, tools)

**hello.md** (2,321+ lines):
- Growing list of 200+ community participants
- Each line represents one student who completed the fork-and-PR exercise
- Header instructs: "Haz un fork del proyecto y añade tu usuario de GitHub en una nueva línea"

**License**: Apache 2.0 (permissive open-source)

## Language

Primary language: **Spanish** (course, book, documentation)
The repository demonstrates Git/GitHub concepts that are universal across languages.

## Community

- **Discord**: "git-github" channel for questions and help (mouredev.com/discord)
- **Twitch**: Live streams where the course was originally created
- **Book Sales**: Thousands sold (first and second editions)
- **Active Contributions**: Continuous PRs from new learners adding themselves to hello.md
