import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

const mergeAll = objs => Object.assign({}, ...objs)

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
};

const esm = {
  format: 'es',
  sourcemap: true,
};

const globals = { react: 'React', 'react-dom': 'ReactDOM' };

const commonPlugins = [
  typescript({
    typescript: require('typescript'),
  }),
]

const configBase = {
  output: {
    exports: 'named',
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: commonPlugins,
}

const umdConfig = mergeAll([
  configBase,
  {
    input: 'src/index.ts',
    output: mergeAll([
      configBase.output,
      {
        file: `dist/${pkg.name}.js`,
        format: 'umd',
        name: 'ContentLoader',
        globals
      },
    ]),
    external: Object.keys(pkg.peerDependencies || {}),
  },
])

const devUmdConfig = mergeAll([
  umdConfig,
  {
    input: 'src/index.ts',
    plugins: umdConfig.plugins.concat(
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      })
    ),
  },
])

const prodUmdConfig = mergeAll([
  umdConfig,
  {
    input: 'src/index.ts',
    output: mergeAll([
      umdConfig.output,
      { file: umdConfig.output.file.replace(/\.js$/, '.min.js') },
    ]),
  },
  {
    plugins: umdConfig.plugins.concat(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
      })
    ),
  },
])

const webConfig = mergeAll([
  configBase,
  {
    input: 'src/index.ts',
    output: [
      mergeAll([configBase.output, { ...esm, file: pkg.module }]),
      mergeAll([configBase.output, { ...cjs, file: pkg.main,  }]),
    ],
    plugins: configBase.plugins.concat(),
  },
])

const nativeConfig = mergeAll([
  configBase,
  {
    input: './src/native/index.ts',
    output: [
      mergeAll([configBase.output, { ...esm, file: `native/${pkg.name}.native.es.js` }]),
      mergeAll([configBase.output, { ...cjs, file: `native/${pkg.name}.native.cjs.js`,  }]),
    ],
    plugins: configBase.plugins.concat(copy({
      targets: [
        { src: 'src/native/package.json', dest: 'native' },
      ]
    }))
  },
])

export default [devUmdConfig, prodUmdConfig, webConfig, nativeConfig]
