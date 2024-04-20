import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

import CONSTANTS from '../constants/index.js';

describe(CONSTANTS.tests.unit.describes.foo, () => {
  it(CONSTANTS.tests.unit.it.foo, () => {
    deepStrictEqual(true, true);
  });
});
