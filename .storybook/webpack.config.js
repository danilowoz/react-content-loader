module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          reportFiles: ['src/**/*.{ts,tsx}', 'docs/**/*.{ts,tsx}'],
        },
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ]
  config.resolve.mainFields = ['browser', 'module', 'main']

  return config
}
