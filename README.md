# Development Workflow

This repository uses a dual-branch workflow:

- `main` → production branch
- `dev` → development branch

## Workflow

```text
dev
↓
commit
↓
push
↓
Cloudflare Pages preview
↓
pull request
↓
merge into main
↓
production deployment
```

## Rules

- Do not use `git push --force` unless absolutely necessary.
- Commit messages should include the branch name when using multi-branch development.
- Always check preview deployments before merging into `main`.

## Deployments

|  Branch  |       Environment       |
|:--------:|:-----------------------:|
|  `main`  |       Production        |
|  `dev`   |  Preview / Development  |