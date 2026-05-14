# Development Workflow

This repository uses a single-branch workflow:

- `main` → Used for both development and production

## Workflow

```text
main
↓
commit
↓
push
↓
automatic production deployment
```

## Rules

- Do not use `git push --force` unless absolutely necessary.
- Commit messages should include the diffs in each of the modified files.

## Deployments

| Branch |        Environment         |
|:------:|:--------------------------:|
| `main` | Development and production |
