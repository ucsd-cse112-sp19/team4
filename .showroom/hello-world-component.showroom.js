export default {
  component: 'hello-world-component',
  path: '../component/hello-world-component.js',
  // events: ,
  attributes: {
    rainbow: 'false',
    language: 'en'
  },
  functions: {
    handleRainbow: () => {
      dashboard.targetComponent.handleRainbow();
    },
    handleLanguage: () => {
      dashboard.targetComponent.handleLanguage();
    }
  }
}