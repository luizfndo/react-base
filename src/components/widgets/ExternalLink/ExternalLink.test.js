import React from 'react';
import { create } from 'react-test-renderer';
import ExternalLink from './ExternalLink';


describe('ExternalLink component', () => {
  test('It matches the snapshot.', () => {
    const component = create(
      <ExternalLink to="/">My external link</ExternalLink>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
