// Standard JS Rules:
//    2 spaces – for indentation
/**
 * Three spaces
 */
function test () {
  console.log('three spaces')
}

//    Single quotes for strings – except to avoid escaping
console.log('double quoted string')

//    No unused variables – this one catches tons of bugs!
unused_var = 10

//    No semicolons – It's fine. Really!
console.log('semicolon ending')

//    Space after keywords if (condition) { ... }
if (true) {
  console.log('no space after if')
}
if (true) {
  console.log('no space before opening curly brace')
}

//    Space after function name function name (arg) { ... }
function no_space (arg) {
  console.log('no space after function name')
}

//    Always use === instead of == – but obj == null is allowed to check null || undefined.
temp = 'hi'
if (temp == temp) {
  console.log('not using triple equals')
}

//    Always handle the node.js err function parameter
//    Declare browser globals with /* global */ comment at top of file
//    Prevents accidental use of vaguely-named browser globals like open, length, event, and name.
//    Example: /* global alert, prompt */
//    Exceptions are: window, document, and navigator

