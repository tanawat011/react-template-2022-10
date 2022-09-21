# Git & Changelog Format

## Active branch

- `dev`     -> development server -> for developer
- `uat`     -> development server -> QA testing
- `staging` -> staging server     -> QA testing
- `main`    -> production server  -> for production

## Format for new branch

- feature/{task-id}     -> for new feature
  - `feature/fix-1000`
- cr/{task-id}          -> for cr
  - `cr/fix-1000`
- fix/{task-id}         -> for fix a bug
  - `fix/fix-1000`
- hotfix/{task-id}      -> for hotfix on staging or production
  - `hotfix/fix-1000`
- refactor/{task-id}    -> for refactor code
  - `refactor/fix-1000`

## Format for commit

- [`{action -> (add/change/remove/test/refactor)}`]: `short description`
  - `[add]: function generate id`
  - `[change]: type of product service`
  - `[remove]: function calculate data, because unused`
  - `[test]: update snapshot of product feature`
  - `[refactor]: product detail`

## How to create the `Merge Request(MR)`

### Title of `MR`

- [{action -> (feature/cr/fix/hotfix)}]: [{task-id}] description
  - `[feature]: [fix-1000] add product service`
  - `[cr]: [fix-1000] re-design of product detail`
  - `[fix]: [fix-1000] product detail none display id`
  - `[hotfix]: [fix-1000] product detail screen not responsive`

### Description

- Tag your team member
- Add `jira card number` + `link of that jira number` in this MR
  - Format -> `` [fix-1000](http://localhost/jira/fix-1000) `{action}` description ``
    - `` [fix-1000](http://localhost/jira/fix-1000) `feature` add product service ``
- Unit test `capture screen`
- If is display
  - Please `capture display or component display screen` to show in this `MR`

```markdown
@ExampleMember @ExampleMember2 @ExampleMember3

[fix-1000](http://localhost/jira/fix-1000) `feature` add product service

![image](/uploads/6518c48e1495a28b8d2622ab219740fb/image.png)

// For resize image (When you want to resize image in this MR)
<img src='/uploads/6518c48e1495a28b8d2622ab219740fb/image.png' width='320'>
```

## Format for Changelog

```markdown
### Added

- [fix-1000](http://localhost/jira/fix-1000) `feature` add product service

### Changed

- [fix-2000](http://localhost/jira/fix-2000) `change` re-design product detail

### Fixed

- [fix-3000](http://localhost/jira/fix-3000) `fix` product detail none display id
- [fix-4000](http://localhost/jira/fix-4000) `hotfix` product detail screen not responsive

### Removed

- [fix-5000](http://localhost/jira/fix-5000) `remove` function calculate data, because unused
```
