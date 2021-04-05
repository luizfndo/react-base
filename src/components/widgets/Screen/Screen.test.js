import React from 'react';
import { create } from 'react-test-renderer';
import Screen from './Screen';


describe('Scree component', () => {
  test('It matches the snapshot.', () => {
    const component = create(
      <Screen>
        <p>My screen</p>
      </Screen>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
