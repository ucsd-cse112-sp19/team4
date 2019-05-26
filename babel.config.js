const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '16.16299',
        firefox: '64',
        chrome: '74',
        safari: '12.0'
      },
      useBuiltIns: 'usage'
    }
  ]
]

module.exports = { presets }
