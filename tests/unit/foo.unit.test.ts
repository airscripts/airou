import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

import CONSTANTS from '../constants/index.js';

describe(CONSTANTS.test.unit.describe.foo, () => {
  it(CONSTANTS.test.unit.it.foo, () => {
    deepStrictEqual(true, true);
  });
});
