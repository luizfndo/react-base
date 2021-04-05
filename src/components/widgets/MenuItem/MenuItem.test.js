import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Icon from '@widgets/Icon';
import LabeledIcon from '@widgets/LabeledIcon';
import ExternalLink from '@widgets/ExternalLink';
import MenuItem from './MenuItem';


describe('MenuItem component', () => {
  test('It should have a DIV element as root tag.', () => {
    const component = create(
      <MemoryRouter>
        <MenuItem />
      </MemoryRouter>,
    );

    expect(component.toJSON().type).toBe('div');
  });

  test('It should contains a default className called "menu-item".', () => {
    const component = create(
      <MemoryRouter>
        <MenuItem />
      </MemoryRouter>,
    );
    expect(component.toJSON().props.className).toContain('menu-item');
  });

  test(
    `It should render a button in cases where no "to" propertities 
    was fill in.`,
    () => {
      const component = create(
        <MemoryRouter>
          <MenuItem />
        </MemoryRouter>,
      );

      expect(component.root.findByType('button')).toBeTruthy();
    },
  );

  test('It should render a Link component when fill in the to property.', () => {
    const component = create(
      <MemoryRouter>
        <MenuItem to="/some-path/" />
      </MemoryRouter>,
    );

    expect(component.root.findByType(Link)).toBeTruthy();
  });

  test(
    `It should render a ExternalLink component when fill in the to 
    external property with "true".`,
    () => {
      const component = create(<MenuItem to="/some-path/" external />);
      expect(component.root.findByType(ExternalLink)).toBeTruthy();
    },
  );

  test(
    `It should render a LabeledIcon component when fill in the icon and 
    label properties".`,
    () => {
      const component = create(<MenuItem icon="/my-icon.svg" label="My item" />);
      expect(component.root.findByType(LabeledIcon)).toBeTruthy();
    },
  );

  test(
    `It should not render a LabeledIcon component when fill in just the
    icon property, but should still render a Icon component.`,
    () => {
      const component = create(<MenuItem icon="/my-icon.svg" />);
      expect(() => component.root.findByType(LabeledIcon)).toThrowError('LabeledIcon');
      expect(component.root.findByType(Icon)).toBeTruthy();
    },
  );

  test('It should call the oncClick callback when click on the action component.', () => {
    const label = 'Login';
    const handleOnClick = jest.fn();
    const { getByText } = render(<MenuItem label={label} onClick={handleOnClick} />);

    fireEvent.click(getByText(label));
    expect(handleOnClick.mock.calls.length).toBe(1);
  });

  test('It should call the beforeOnClick callback when click on the action component.', () => {
    const label = 'Login';
    const handleOnBeforeClick = jest.fn();
    const { getByText } = render(<MenuItem label={label} beforeOnClick={handleOnBeforeClick} />);

    fireEvent.click(getByText(label));
    expect(handleOnBeforeClick.mock.calls.length).toBe(1);
  });
});
