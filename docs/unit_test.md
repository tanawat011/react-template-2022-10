# Unit Test

- Unit test will write for each component, hook and helper only.

## How to write unit test

- `describe`
  - If is `component`, `describe` in the test file will be the component name.
    - for example `describe('<Button />', () => {})`
  - If is `hook` or `helper`, `describe` in the test file will be the hook or helper name.
    - for example `describe('useCounter', () => {})`
    - for example `describe('getRandomNumber', () => {})`
- `snapshot`
  - If is `component`, will always test together with snapshot.
  - If is `hook` or `helper`, unnecessary test with snapshot.
- All test file have to be always `pass` before commit by `100%` only.
- For container and feature, will test together with snapshot only.
