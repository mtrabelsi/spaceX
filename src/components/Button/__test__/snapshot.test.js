import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(<Button
      buttonStyle={{ color: 'red', padding: 5 }}
      imgStyle={{ width: 20 }}
      value="button value"
      hasIconLeft
      iconLeft="<"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
