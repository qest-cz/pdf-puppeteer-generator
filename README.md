# Puppeteer pdf generator

Written in nodejs and Typescript

### Basic  scripts

- `yarn`
install dependencies
- `yarn build`
build application
- `yarn dev`
start development mode
- `yarn test`
run tests
- `yarn code:fix`
apply prettier and eslint rules for project
- `yarn start`
start compiled application

### PDF
- `yarn generatePdf`
script for generate test pdf, result will be placed at `./test.pdf`
- start application (`yarn dev` | `yarn start`) and go to `http://localhost:8000/api/v1/pdf` for serve pdf