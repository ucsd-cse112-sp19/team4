import { storiesOf } from '@storybook/html'
import '../component/button/button-component.js'
import '../component/slider/slider-component.js'

storiesOf('Web Components', module)
  .add('button', () => {
    const el = document.createElement('button-component')
    el.type = 'danger'
    el.size = 'medium'
    document.body.append(el)
    return el
  })
