import React from 'react';
import { create } from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Icon from '@widgets/Icon';
import LabeledIcon from '@widgets/LabeledIcon';
import ExternalLink from '@widgets/ExternalLink';
import Clickable from './Clickable';


describe('Clickable component', () => {
  test('It should contains a default className called "clickable".', () => {
    const component = create(
      <MemoryRouter>
        <Clickable />
      </MemoryRouter>,
    );

    expect(component.toJSON().props.className).toContain('clickable');
  });

  test(
    `It should render a button in cases where no "to" propertities 
    was fill in.`,
    () => {
      const component = create(
        <MemoryRouter>
          <Clickable />
        </MemoryRouter>,
      );

      expect(component.root.findByType('button')).toBeTruthy();
    },
  );

  test('It should render a Link component when fill in the to property.', () => {
    const component = create(
      <MemoryRouter>
        <Clickable to="/some-path/" />
      </MemoryRouter>,
    );

    expect(component.root.findByType(Link)).toBeTruthy();
  });

  test(
    `It should render a ExternalLink component when fill in the to 
    external property with "true".`,
    () => {
      const component = create(<Clickable to="/some-path/" external />);
      expect(component.root.findByType(ExternalLink)).toBeTruthy();
    },
  );

  test(
    `It should render a LabeledIcon component when fill in the icon and 
    label properties".`,
    () => {
      const component = create(<Clickable icon="/my-icon.svg" label="My item" />);
      expect(component.root.findByType(LabeledIcon)).toBeTruthy();
    },
  );

  test(
    `It should not render a LabeledIcon component when fill in just the
    icon property, but should still render a Icon component.`,
    () => {
      const component = create(<Clickable icon="/my-icon.svg" />);
      expect(() => component.root.findByType(LabeledIcon)).toThrowError('LabeledIcon');
      expect(component.root.findByType(Icon)).toBeTruthy();
    },
  );
});
