import {
  ensureNxProject,
  runNxCommandAsync,
} from '@nrwl/nx-plugin/testing';

describe('internal-plugin e2e', () => {
  beforeAll(() => {
    ensureNxProject('@bg-hoard/internal-plugin', 'dist/libs/internal-plugin');
  });

  afterAll(() => {
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });
});
