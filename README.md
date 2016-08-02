# Cpmech presentation template

cpmech Presentation Template using RevealJS and Jstar

## Installation

```bash
git clone https://github.com/cpmech/presentation.git
cd presentation
jspm install
```

## Run presentation (see below for required tools)

```bash
npm run serve
```

## Install tools if not available

```bash
sudo apt-get install nodejs-legacy npm
sudo npm install -g browser-sync jspm
```

## How to create a new JSPM package (dev setup)
```
npm install jspm@beta --save-dev
jspm init
jspm install github:hakimel/reveal.js
jspm install github:cpmech/jstar
```
