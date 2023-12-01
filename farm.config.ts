import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    script: {
      plugins: [],
      parser: {
        tsConfig: {
          decorators: true,
          dts: false,
          noEarlyErrors: false,
          tsx: false,
        },
      },
    },
    input: {
      main: 'src/broken.ts',
    },
    output: {
      targetEnv: 'node',
    },
  },
});
