import { configure } from '@storybook/html';

const req = require.context('../component/', true, /\/*\/.*stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);