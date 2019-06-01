/* global suite test assert */

suite('cascader-component', function () {
  test('temp', function () {
    const component = document.createElement('cascader-component')
    component.options = [{
      value: 'team 4',
      label: 'Team 4',
      children: [{
        value: 'team lead',
        label: 'Team Lead',
        children: [{
          value: 'christopher thomas',
          label: 'Christopher Thomas'
        }]
      },
      {
        value: 'team co-lead',
        label: 'Team Co-Lead',
        children: [{
          value: 'harrison wang',
          label: 'Harrison Wang'
        }]
      },
      {
        value: 'dev-ops',
        label: 'Dev-Ops',
        children: [{
          value: 'jiajin liang',
          label: 'Jiajin Liang'
        },
        {
          value: 'evan nguyen',
          label: 'Evan Nguyen'
        }]
      },
      {
        value: 'tools and utility',
        label: 'Tools and utility',
        children: [{
          value: 'amir farhan',
          label: 'Amir Farhan'
        },
        {
          value: 'yankai zhang',
          label: 'Yankai Zhang'
        }]
      },
      {
        value: 'coders',
        label: 'Coders',
        children: [{
          value: 'russel brobst',
          label: 'Russel Brobst'
        },
        {
          value: 'garett crawford',
          label: 'Garett Crawford'
        }]
      },
      {
        value: 'quality assurance',
        label: 'Quality Assurance',
        children: [{
          value: 'bart tam',
          label: 'Bart Tam'
        },
        {
          value: 'erick soto',
          label: 'Erick Soto'
        }]
      }]
    }]
    document.body.append(component)
    assert.isDefined(component)
  })
})