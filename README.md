<div id="top" align="center">
<h1>rz-image-card</h1>

<p>A Web Component to show image-cards.</p>

[Report Issue](https://github.com/Zheng-Bote/rz-image-card/issues) [Request Feature](https://github.com/Zheng-Bote/rz-image-card/pulls)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz-image-card)

</div>

<hr>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Description](#description)
  - [Features](#features)
  - [Status](#status)
    - [Application / Tool](#application--tool)
    - [Documentation](#documentation)
      - [README](#readme)
      - [other Markdown files](#other-markdown-files)
- [Installation](#installation)
  - [Dependencies](#dependencies)
  - [folder structure](#folder-structure)
  - [Usage/Examples/Tests](#usageexamplestests)
- [API Reference](#api-reference)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Parameters](#parameters)
- [Documentation](#documentation-1)
  - [Architecture](#architecture)
    - [Github](#github)
      - [Github Repo](#github-repo)
      - [Github Actions / Workflows](#github-actions--workflows)
  - [Application](#application)
  - [DevOps](#devops)
  - [Github Page](#github-page)
  - [Github Wiki](#github-wiki)
  - [Comments](#comments)
  - [Screenshots](#screenshots)
- [Authors and License](#authors-and-license)
  - [License](#license)
    - [MIT License](#mit-license)
    - [Apache License](#apache-license)
  - [Authors](#authors)
    - [Code Contributors](#code-contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<hr>

# Description

![HTML5](https://img.shields.io/badge/HTML-5+-E34F26?logo=html5)
![Typescript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![Lit.js](https://img.shields.io/badge/Lit.js-324FFF?logo=lit)
![CSS3](https://img.shields.io/badge/CSS3-663399?logo=css3)

A Web Component to show image-cards.

### Features

- \[ ] advanced-super-extra-special feature xyz

  <br>

- \[x] OSS and license
- \[x] works as designed
- \[ ] no bugs

<br>

- \[x] runs on modern Internet Browsern with enabled Javascript

<p align="right">(<a href="#top">back to top</a>)</p>

# Status

![GitHub Created At](https://img.shields.io/github/created-at/Zheng-Bote/rz-image-card)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz-image-card)

![Status](https://img.shields.io/badge/Status-under_construction-red)
![Status](https://img.shields.io/badge/Status-works_as_designed-green)

![GitHub Issues](https://img.shields.io/github/issues/Zheng-Bote/rz-image-card)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Zheng-Bote/rz-image-card)

# Documentation

## Usage

```html
&lt;rz-image-card&gt; card_img="path/to/image" card_title="optional"
card_brief="optional" card_desc="optional" //card_btn="optional: modal text"
card_url_text="optional: URL text" card_url="optional: url"
&lt;/rz-image-card&gt;
```

### html example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>rz-image-card</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate icon" href="/favicon.ico" />

    <script type="module" crossorigin src="/assets/index-B5_sMTbN.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-CBREutKa.css" />
  </head>
  <body>
    <div class="card-wrapper">
      <rz-image-card
        card_title="Mr. Douglas Adams"
        card_brief="English author, humorist, and screenwriter"
        card_desc="Creator of &laquo;The Hitchhiker's Guide to the Galaxy&raquo;."
        card_img="/h2g2.jpg"
        card_url_text="Original"
        card_url="https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy#/media/File:H2G2_UK_front_cover.jpg"
      >
      </rz-image-card>
    </div>
  </body>
</html>
```

> \[!TIP]
> _see also:_ [./index.html](./index.html)

### css example

```css
.card-wrapper {
  list-style: none;
  padding: 0;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
```

> \[!TIP]
> _see also example:_ [index.css](./index.css)

<p align="right">(<a href="#top">back to top</a>)</p>

# Screenshots

![screenshot](./docs/screenshot.png)

<p align="right">(<a href="#top">back to top</a>)</p>

# Installation

```bash
npm install
npn run build
```

- copy content of folder `dist/*` into your web folder
- add `<script type="module" src="<path/to/>rz-image.card.js"></script>` to your html-header
- add `<rz-image-card />` to the body of your html-file (don't forget the attributtes).

## Dependencies

![Lit.js](https://img.shields.io/badge/Lit.js-324FFF?logo=lit)

Simple. Fast. Web Components.

Lit is a simple library for building fast, lightweight web components.

[Lit.js](https://lit.dev/)

## folder structure

<!-- readme-tree start -->
```
.
├── .github
│   ├── actions
│   │   └── doctoc
│   │       ├── README.md
│   │       ├── action.yml
│   │       └── dist
│   │           ├── index.js
│   │           ├── index.js.map
│   │           ├── licenses.txt
│   │           └── sourcemap-register.js
│   └── workflows
│       ├── ghp-call_Readme.yml
│       ├── ghp-create_doctoc.yml
│       ├── ghp-markdown_index.yml
│       ├── repo-actions_docu.yml
│       ├── repo-call_Readme.yml
│       ├── repo-create_doctoc.yml_
│       ├── repo-create_doctoc_md.yml
│       └── repo-create_tree_readme.yml
├── .gitignore
├── LICENSE
├── README.md
├── docs
│   └── screenshot.png
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── ad.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── h2g2.jpg
│   ├── lit.svg
│   ├── marvin.jpg
│   ├── robo_1.png
│   ├── robo_2.png
│   └── rz-image-card
│       └── rz-image-card.css
├── src
│   ├── index.css
│   ├── rz-image-card.ts
│   └── vite-env.d.ts
├── tree.bak
└── tsconfig.json

10 directories, 35 files
```
<!-- readme-tree end -->

<p align="right">(<a href="#top">back to top</a>)</p>

# Authors and License

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2025 ZHENG Robert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

        https://choosealicense.com/licenses/mit/

## Authors

- [![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

### Code Contributors

![Contributors](https://img.shields.io/github/contributors/Zheng-Bote/rz-image-card?color=dark-green)

[![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

<hr>

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
