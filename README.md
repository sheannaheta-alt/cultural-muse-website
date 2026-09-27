# Cultural Muse — Landing Page

Front-end landing page for **Cultural Muse**, the online shop for digital downloads and art prints by Sheanna Heta.

> Contemporary art, music and storytelling by Sheanna Heta.
> Connection • Memory • Belonging

This is a simple static website: plain HTML, CSS and JavaScript. No build tools, no installs. Open `index.html` in a browser to see it.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The page content: hero, shop formats, first collection, brand pillars, about, FAQ, email sign-up, footer |
| `styles.css` | The look: colours, fonts, layout. Brand colours are at the top of the file |
| `script.js` | Mobile menu and the email sign-up message |
| `assets/favicon.svg` | The small "CM" icon in the browser tab |

## Status of the content

These are **placeholders or drafts**, not final:

- **Artwork images** — the landscape shapes are CSS stand-ins. Replace them with real Cultural Muse artwork and product photos.
- **Product titles** ("Carrying home", "Between two shores", "A quiet morning") — working titles only.
- **Prices** — shown as "Price TBC" until costs are confirmed.
- **Brand colours** — a draft natural-green palette, to be confirmed in the brand kit.
- **Portrait** — placeholder until Sheanna chooses a photo.
- **Social links and contact email** — set to `#` and `hello@example.com`.
- **Email sign-up form** — works on the page but does not yet send emails anywhere. Connect it to an email platform (e.g. MailerLite, Kit or Mailchimp) when one is chosen.

Wording is drawn from the Cultural Muse Rebrand Plan (positioning, cover wording, pillars and FAQ).

## Brand colours (draft)

| Name | Hex | Used for |
|---|---|---|
| Forest | `#2f4a3a` | Primary green, buttons |
| Forest deep | `#1f3328` | Dark sections, footer |
| Moss | `#5e7d5a` | Secondary green |
| Sage | `#a3b79c` | Soft green details |
| Cream | `#f6f1e7` | Page background |
| Bone | `#ece4d3` | Alternate background |
| Charcoal | `#262a24` | Text |
| Clay | `#b5694a` | Small accents only |

These are design choices, not claims about cultural colour meaning.

---

## Pushing this to GitHub with Claude Code (first time)

### 1. One-off setup (about 15 minutes)

1. **Create your GitHub account** at github.com if you haven't already.
2. **Install Git**: download from git-scm.com and install with the default options.
3. **Install the GitHub CLI**: download from cli.github.com and install.
4. **Install Claude Code**: follow the instructions at claude.com/claude-code.
5. **Sign in to GitHub from your computer**: open a terminal (on Windows, search for "Terminal" or "PowerShell") and run:
   ```
   gh auth login
   ```
   Choose **GitHub.com → HTTPS → Yes → Login with a web browser**, then follow the prompts.

### 2. Push the site

1. In the terminal, go to this folder. For example:
   ```
   cd Documents\cultural-muse-website
   ```
2. Start Claude Code:
   ```
   claude
   ```
3. Paste this request:
   > Turn this folder into a git repository, make a first commit, create a new public GitHub repo called `cultural-muse-website` on my GitHub account `sheannaheta-alt` using the gh CLI, and push the code to it. Then turn on GitHub Pages from the main branch so the site has a live link.
4. Claude Code will ask permission before running each command. Read it and approve.

**Finished looks like:** you can see your files at `github.com/<your-username>/cultural-muse-website`, and (after a minute or two) the live page at `https://<your-username>.github.io/cultural-muse-website/`.

### 3. Making changes later

Edit the files, then in Claude Code ask:
> Commit my changes with a short message and push them to GitHub.

---

© Sheanna Heta. All artwork and written content belong to Cultural Muse and may not be reused without permission.
