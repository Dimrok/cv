# CV

Antony Méchin's resume, published at [dimrok.github.io/cv](https://dimrok.github.io/cv).

The content lives in [`src/data`](src/data) and is rendered three ways:

| Version  | Source                                         | Output                         |
| -------- | ---------------------------------------------- | ------------------------------ |
| Website  | Vue 3 app ([`src/views`](src/views))           | `dist/` (GitHub Pages)         |
| Markdown | [`scripts/generate-resume.ts`](scripts/generate-resume.ts) | [`resume/resume.md`](resume/resume.md) |
| LaTeX    | [`scripts/generate-resume.ts`](scripts/generate-resume.ts) + [`resume/latex/resume.cls`](resume/latex/resume.cls) | `resume/latex/build/resume.pdf` |

Edit `src/data` (or the LaTeX layout in `resume.cls`), never `resume.md` or `resume.tex`: both are generated.

## Website

```bash
yarn install
yarn dev        # local server
yarn build      # type-check + production build
yarn deploy     # publish dist/ to GitHub Pages
```

## Markdown and LaTeX

```bash
yarn resume:generate   # write resume/resume.md and resume/latex/resume.tex
yarn resume:pdf        # compile resume/latex/build/resume.pdf
yarn resume            # both
```

`yarn resume:pdf` runs `make -C resume/latex`, which uses a local `latexmk` + LuaLaTeX when available and the
[`texlive/texlive`](https://hub.docker.com/r/texlive/texlive) Docker image otherwise. Force one or the other with
`make -C resume/latex local` or `make -C resume/latex docker`.
