import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '..';

it('Should consider all props and generate unique html based on that', () => {
  const tree = renderer
    .create(
      <Modal
        title="sample title"
        onCloseHandle={() => console.log('should close')}
        onSubmitHandle={() => console.log('should submit')}
        history={{ goBack: () => {} }}
      >
        <span>some modal child data</span>
      </Modal>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
