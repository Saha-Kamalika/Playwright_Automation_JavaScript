# Playwright Automation

This repository contains Playwright test automation for a web application using Playwright Test.

## Prerequisites

- Node.js installed (recommended: latest LTS)
- npm available on the command line

## Install dependencies

```bash
npm install
```

If this is the first time running Playwright in this repo, install browsers as well:

```bash
npx playwright install
```

## Run tests

Run all tests in the `tests/` directory:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/02_LoginRecord.spec.js
```

Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

Run tests in a specific project/browser:

```bash
npx playwright test --project=chromium
```

## View reports

The project is configured to generate an HTML report by default.

Open the report after a test run:

```bash
npx playwright show-report
```

## Playwright CLI reference

For more CLI options and usage, see the Playwright Test CLI docs:

- https://playwright.dev/docs/test-cli
