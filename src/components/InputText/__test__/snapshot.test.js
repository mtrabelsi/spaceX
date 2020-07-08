import React from 'react';
import renderer from 'react-test-renderer';
import InputText from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(<InputText
      inputWrapperStyle={{ color: 'red', padding: 5 }}
      containerStyle={{ width: 200 }}
      value="some text in the input"
      hasIconLeft
      leftIcon="s"
      leftIconClickHandler={() => console.log('im snpashotted left click')}
      rightIconClickHandler={() => console.log('im snpashotted right click')}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
