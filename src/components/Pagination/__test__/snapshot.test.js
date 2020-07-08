import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(
      <Pagination
        limit="sample title"
        setFilter={() => console.log('set filter')}
        setActivePage={() => console.log('set active page')}
        activePage={7}
        leftLabel="left label"
        rightLabel="right label"
        lastQueriedLength={3}
        itemsCountPerPage={5}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
