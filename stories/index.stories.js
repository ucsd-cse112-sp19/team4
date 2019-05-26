import { storiesOf } from '@storybook/html'
import '../component/button/button-component.js'
import '../component/slider/slider-component.js'

storiesOf('Web Components', module)
  .add('button', () => {
    const el = document.createElement('button-component')
    el.type = 'primary'
    el.size = 'medium'
    document.body.append(el)
    return el
  })

  .add('slider', () => {
    const slider = document.createElement('slider-component')
    document.body.append(slider)
    return slider
  })
