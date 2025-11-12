import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser'; // For minification

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.tsx', // Your entry file
    output: [
      {
        file: packageJson.main, // build/index.js (CommonJS format)
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module, // build/index.es.js (ES Module format)
        format: 'esm',
        sourcemap: true,
        plugins: [terser()], // Minify the ES module output
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    // Treat 'react' and 'react-dom' as external dependencies (Peer Dependencies)
    external: ['react', 'react-dom'],
  }
];
