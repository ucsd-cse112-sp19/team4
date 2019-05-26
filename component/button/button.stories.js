import { storiesOf } from '@storybook/html'
import './button-component.js'

storiesOf('button-component', module)
  .add('button', () => {
    const el = document.createElement('button-component')
    el.type = 'primary'
    el.textContent = 'Button'
    document.body.append(el)
    return el
  })
