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

As documented in [this file](https://mcenahle.com/site-affairs-documents/2026-3.html) on May 9, 2026, the following config files will need to be updated once I purchase `mcenahle.page`.

The planned purchase date is either the first working day of the summer vacation or the confirmed dental appointment date, whichever comes earlier.

See [this commit](https://github.com/mcenahle/hope-vuepress/commit/995a737847397d24721ade8bf039656b9610f8e8) for the files modified previously.

1. `src/.vuepress/config.ts` (Line 12)
2. `src/.vuepress/theme.ts` (Line 7)
3. `src/README.md` (Line 10)
4. `src/med/2026-05-17.md` (Line 8)
5. `src/med/2026-05-17-policies.md` (Line 9)
6. `src/med/2026-05-18.md` (Line 8)
7. `src/med/2026-05-19.md` (Line 8)
8. `src/med/README.md` (Line 8)