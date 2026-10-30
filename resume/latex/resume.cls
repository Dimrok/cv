% Layout of the LaTeX resume. The content lives in resume.tex, which is generated
% from src/data by scripts/generate-resume.ts. Compile with LuaLaTeX (see Makefile).
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2026/10/30 Resume class]

\LoadClass[10pt]{article}

\RequirePackage[a4paper, hmargin=1.5cm, vmargin=1.3cm]{geometry}
\RequirePackage{fontspec}
\RequirePackage{xcolor}
\RequirePackage{graphicx}
\RequirePackage{fontawesome5}
\RequirePackage{enumitem}
\RequirePackage{titlesec}
\RequirePackage{needspace}
\RequirePackage{tabularx}
\RequirePackage[hidelinks]{hyperref}

\setmainfont{TeX Gyre Heros}
\graphicspath{{../../src/assets/}}

\definecolor{accent}{HTML}{2F5F9E}
\definecolor{muted}{HTML}{5F6368}

\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\linespread{1.05}
\raggedbottom

% Sections: accent title with a rule underneath.
\titleformat{\section}
  {\large\bfseries\color{accent}}{}{0pt}{\MakeUppercase}
  [\vspace{-0.55em}{\color{accent}\rule{\linewidth}{0.8pt}}]
\titlespacing*{\section}{0pt}{0.9em}{0.45em}

\setlist[itemize]{
  leftmargin=1.1em, itemsep=0.05em, topsep=0.15em, parsep=0pt,
  before=\small, label={\color{accent}\textbullet}
}

% Keeps a section title with the beginning of its content.
\newcommand{\resumesection}[1]{\Needspace{6\baselineskip}\section{#1}}

% \resumeheader{first name}{last name}{headline}{picture}{locations}{nationality}{age}{contacts}
\newcommand{\resumeheader}[8]{%
  \begin{minipage}[c]{0.83\linewidth}
    {\fontsize{24}{28}\selectfont #1 \textbf{#2}}\par\smallskip
    {\large\color{accent}\textbf{#3}}\par\smallskip
    {\small\color{muted}\faMapMarker*\ #5 \quad \faFlag\ #6 \quad \faUser\ #7 years old}\par\smallskip
    {\small\raggedright #8\par}
  \end{minipage}%
  \hfill
  \begin{minipage}[c]{0.14\linewidth}
    \raggedleft\includegraphics[width=\linewidth]{#4}
  \end{minipage}
  \par\medskip
}

% \contact{icon}{url}{label}
\newcommand{\contact}[3]{\mbox{{\color{accent}#1}\ \href{#2}{#3}}\quad\allowbreak}

\newcommand{\summary}[1]{{\small #1}\par}

% \experience{company}{title}{location}{dates}
\newcommand{\experience}[4]{%
  \Needspace{6\baselineskip}\medskip
  {\large\textbf{#1}} \textendash\ #2 \hfill {\small\color{muted}#4}\par
  {\small\color{muted}\faMapMarker*\ #3}\par
}

\newcommand{\about}[1]{{\small\itshape\color{muted}#1}\par}

% \stage{name}{dates}
\newcommand{\stage}[2]{%
  \Needspace{4\baselineskip}\smallskip
  {\color{accent}\textbf{#1}} \hfill {\small\color{muted}#2}\par
}

% \project{name}{dates}
\newcommand{\project}[2]{%
  \Needspace{4\baselineskip}\smallskip
  {\large\textbf{#1}} \hfill {\small\color{muted}#2}\par
}

% \education{institution}{degree}{dates}
\newcommand{\education}[3]{%
  \Needspace{3\baselineskip}\smallskip
  \textbf{#1} \textendash\ #2 \hfill {\small\color{muted}#3}\par
}

\newcommand{\stagedescription}[1]{{\small\itshape #1}\par}
\newcommand{\stack}[1]{{\footnotesize\color{muted}\faTools\ #1}\par}

% Key/value list for skills, languages and interests.
\newenvironment{facts}
  {\small\tabularx{\linewidth}{@{}>{\bfseries}l X@{}}}
  {\endtabularx}
\newcommand{\fact}[2]{#1 & #2 \\}
