const plugins = ['babel-plugin-styled-components']

if (process.env.CYPRESS === 'true') {
  plugins.push('istanbul')
}

module.exports = {
  presets: ['next/babel'],
  plugins: plugins,
}
