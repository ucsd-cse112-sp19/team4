import { storiesOf } from '@storybook/html'
import './slider-component.js'

storiesOf('slider-component', module)
  .add('slider', () => {
    const el = document.createElement('slider-component')
    el.textContent = 'slider'
    document.body.append(el)
    return el
  })
