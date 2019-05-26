const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '16.16299',
        ie: '11.0',
        firefox: '66',
        chrome: '74',
        safari: '12.0'
      },
      useBuiltIns: 'usage'
    }
  ]
]

module.exports = { presets }
