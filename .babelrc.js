const { NODE_ENV, BABEL_ENV } = process.env
const modules = BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false
const loose = true

module.exports = {
  presets: [['env', { modules, loose, targets: { uglify: true } }], 'stage-2', 'react', 'flow'],
}
