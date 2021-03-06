# cypress-test-tiny

> Tiny Cypress E2E test case

| Build status                                                                                                                                                                                  | Description    |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| [![Buildkite status](https://badge.buildkite.com/92a6cb692df44e8ab1f5ba77e75aae920042353955a19d5389.svg)](https://buildkite.com/cypress-io/cypress-test-tiny)                                 | Mac            |
| [![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-tiny.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-tiny)                                                       | Linux          |
| [![Build status](https://ci.appveyor.com/api/projects/status/bpwo4jpue61xsbi5?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-test-tiny)                                        | Windows        |
| [ ![Codeship Status for cypress-io/cypress-test-tiny](https://app.codeship.com/projects/98843020-d6d6-0135-402d-5207bc7a4d86/status?branch=master)](https://app.codeship.com/projects/263289) | Codeship Basic |

[![Greenkeeper badge](https://badges.greenkeeper.io/cypress-io/cypress-test-tiny.svg)](https://greenkeeper.io/)

## Running This Example

```
cd app
yarn install
yarn start
```

Then run cypress tests at the project root with `npm run cypress:run`

## Actual Behavior

The cxs example loses styling when navigating between snapshots.

However, the styled-components styling is retained. So it seems this might be an issue explicitly with how cxs is injecting styles. You can see [here](https://github.com/jxnblk/cxs/blob/master/src/monolithic.js#L88) that cxs uses `styleTag.sheet.insertRule` to inject styles, and these styles that get inserted aren't actually viewable in the DOM inspector; it seems they are attached to the element directly.
