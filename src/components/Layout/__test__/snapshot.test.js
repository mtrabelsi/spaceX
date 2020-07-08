import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(
      <Layout
        style={{ width: 500 }}
        title="sample title"
        topBarStyle="100px"
        showBackButton
        history={{ goBack: () => {} }}
      >
        <span>some child data</span>
      </Layout>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
