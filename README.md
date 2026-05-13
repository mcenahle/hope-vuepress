# Development Workflow

This repository uses a single branch workflow:

- `main` → Development and production branch

## Workflow

```text
main
↓
commit
↓
push
↓
production deployment
```

## Rules

- Do not use `git push --force` unless absolutely necessary.
- Commit messages should include the diffs in each of the modified files.

## Deployments

|  Branch  |       Environment       |
|:--------:|:-----------------------:|
|  `main`  |  Development and production  |
