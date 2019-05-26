import { storiesOf } from '@storybook/html'
import '../component/button/button-component.js'
import '../component/slider/slider-component.js'

storiesOf('button-component', module)
  .add('button', () => {
    const el = document.createElement('button-component')
    el.type = 'primary'
    el.size = 'medium'
    document.body.append(el)
    return el
  })

storiesOf('slider-component', module)
  .add('slider', () => {
    const el = document.createElement('slider-component')
    document.body.append(el)
    return el
  })
