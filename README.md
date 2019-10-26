# Help + Running tests locally
The steps below will take you all the way through Cypress.

**If you get stuck, here is more help:**

* [Cpress Visual Testing](https://docs.cypress.io/guides/tooling/visual-testing.html)
* [Cypress Support](https://on.cypress.io/support)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)


### 2. Run tests locally
If you want to experiment with running this project in Continuous Integration, you'll need to fork it first.

If you’re not using Node or npm in your project or you want to try Cypress out quickly, you can always download Cypress directly from our CDN.
[Follow these instructions to install Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download)

After forking this project in Github, follow these commands to run tests locally:
```bash
## Clone the repo locally
git clone https://github.com/<your-username>/cypress-visual-tests.git

##  Launch cypress desktop app

## Open local repo manually or drag-drop it in cypress app
Click "visual-test.spec.js"
```

### 3. Experiment with tests using npm

If you want to experiment with running this project in Continuous Integration, you'll need to fork it first.

After forking this project in `Github`, follow these commands to run tests locally using npm:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-visual-tests.git

## cd into the cloned repo
cd cypress-visual-tests

## install the node_modules
npm install

## start the tests
cypress run
```

### 4. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/writing-your-first-test)

### 5. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/continuous-integration)
