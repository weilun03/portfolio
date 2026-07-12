# Command Notes

Quick reference for the commands you'll use most on this project.

## Yarn (package manager / dev scripts)

```bash
yarn install        # Installs all dependencies listed in package.json into node_modules
yarn dev             # Starts the Next.js dev server (localhost:3000), hot-reloads on save
yarn build           # Builds an optimized production version into .next/
yarn start           # Runs the production build (must run `yarn build` first)
yarn lint            # Runs ESLint to check code style/errors
yarn add <package>   # Installs a new dependency and adds it to package.json
yarn add -D <package> # Installs a new dev-only dependency (e.g. tooling, types)
yarn remove <package> # Uninstalls a dependency and removes it from package.json
```

- `package.json` — lists your dependencies and the scripts above.
- `yarn.lock` — pins exact dependency versions so installs are reproducible. Always commit this file.
- `node_modules/` — installed packages, never commit (already in `.gitignore`).

## Git (version control)

### Everyday workflow
```bash
git status                    # Shows what's changed, staged, or untracked
git add .                     # Stages all changed files for the next commit
git add <file>                # Stages one specific file
git commit -m "message"       # Saves staged changes as a new commit with a description
git push                      # Uploads your local commits to GitHub (origin/main)
git pull                      # Downloads and merges changes from GitHub into your local branch
```

### Checking history / undoing things
```bash
git log --oneline             # Shows commit history, one line per commit
git diff                      # Shows unstaged changes (what's different from the last commit)
git diff --staged             # Shows staged changes (what's about to be committed)
git restore <file>             # Discards uncommitted changes to a file (careful, not reversible)
git restore --staged <file>    # Unstages a file without discarding its changes
```

### Branching (for working on features without touching main)
```bash
git branch                    # Lists local branches
git checkout -b <name>        # Creates and switches to a new branch
git checkout main             # Switches back to the main branch
git merge <name>               # Merges another branch into your current branch
```

### Remote (GitHub connection)
```bash
git remote -v                 # Shows the GitHub URL(s) this repo is connected to
git push -u origin main       # First push of a branch: uploads + remembers this as its default remote
```

## Feature branch workflow (branch → edit → push → PR → merge)

Use this when making changes without touching `main` / production directly.

### 1. Start from an up-to-date main
```bash
git checkout main        # switch to main branch
git pull                 # get latest changes from GitHub
```

### 2. Create and switch to a new branch
```bash
git checkout -b feature/update-about-page   # -b creates + switches in one step
```
Name it something descriptive, e.g. `feature/add-projects`, `fix/navbar-bug`.

### 3. Edit your files
Make changes as normal, then check what changed:
```bash
git status
```

### 4. Commit your changes
```bash
git add .
git commit -m "Update about page content"
```

### 5. Push the branch to GitHub
```bash
git push -u origin feature/update-about-page
```
`-u` links this branch to GitHub so future pushes on it just need `git push`. This does NOT touch `main` or trigger a production deploy — your live site stays untouched.

### 6. Open a Pull Request on GitHub
- Go to `https://github.com/weilun03/portfolio`
- Click **Compare & pull request** (yellow banner), or **Pull requests → New pull request** with base: `main`, compare: your branch
- Add a title/description → **Create pull request**
- Vercel auto-deploys a **preview URL** for the PR so you can check changes visually before merging (look for the Vercel bot comment).

### 7. Merge the Pull Request
- On the PR page: **Merge pull request → Confirm merge**

### 8. Sync local main and clean up
```bash
git checkout main
git pull                                    # bring merged changes down locally
git branch -d feature/update-about-page     # delete the local branch, no longer needed
```

Once merged into `main`, Vercel auto-deploys to production (`portfolio-tanweilun.vercel.app`) in ~1–2 min.

## This project's setup (for reference)

- Remote: `https://github.com/weilun03/portfolio.git`
- Default branch: `main`
- Git identity: set globally via `git config --global user.name/user.email`
- Auth: GitHub Personal Access Token, cached in macOS Keychain (`credential.helper=osxkeychain`) — you won't be prompted again unless the token expires or is revoked.
