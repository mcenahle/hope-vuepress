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

## Site migration

`mcenahle.com` is scheduled to migrate to `mcenahle.page` before June 29, 2026.

For details, visit: https://mcenahle.com/coding-standards/migration-to-mcenahle-page.html