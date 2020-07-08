import React from 'react';
import renderer from 'react-test-renderer';
import Table from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(
      <Table
        abstractData={[{ id: '1' }, { id: '2' }]}
        itemClickHandler={(id) => console.log(`clicked ${id}`)}
        dataType="history"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
