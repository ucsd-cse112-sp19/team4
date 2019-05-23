import { document, console } from 'global'
import { storiesOf } from '@storybook/html'

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button-component', () => {
    const button = document.createElement('button-component')
    document.body.append(button)
    button.size = 'medium'
    button.type = 'primary'
    button.innerText = 'Hello Button'
    button.addEventListener('click', e => console.log(e))
    return button
  })
