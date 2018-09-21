import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const libraryName = 'ts-package-boilerplate';

/**
 * Include all of the dependencies here to exclude all node modules from the build
 * Make sure to also include node libraries you're using e.g. 'crypto'
 */

const external = [...Object.keys(pkg.dependencies || {})];

export default {
  input: `src/index.ts`,

  output: [
    {
      file: pkg.main,
      name: libraryName,
      format: 'umd',
      sourcemap: true,
    },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],

  // exclude all node modules
  external,

  watch: {
    include: 'src/**',
  },
  plugins: [
    // Compile TypeScript files
    typescript({
      tsconfig: './tsconfig-build.json',
    }),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
