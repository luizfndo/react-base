import React from 'react';
import { create } from 'react-test-renderer';
import Icon from '@widgets/Clickable/node_modules/@banking/widgets/Icon';
import LabeledIcon from './LabeledIcon';


describe('LabeledIcon component', () => {
  test('It should guarantee that a icon property was fill in.', () => {
    expect(() => create(<LabeledIcon />)).toThrowError(/icon.*required/);
  });

  test('It should guarantee that a label property was fill in.', () => {
    expect(
      () => create(<LabeledIcon icon="/my-icon.svg" />),
    ).toThrowError(/label.*required/);
  });

  test('It should have a DIV element as root.', () => {
    const component = create(
      <LabeledIcon label="My labeled icon" icon="/my-icon.svg" />,
    );

    expect(component.toJSON().type).toBe('div');
  });

  test('It should contains a default className called "labeled-icon".', () => {
    const component = create(<LabeledIcon label="My Label" icon="/my-icon.svg" />);
    expect(component.toJSON().props.className).toContain('labeled-icon');
  });

  test('It should have a Icon component as a child.', () => {
    const component = create(<LabeledIcon label="My Label" icon="/my-icon.svg" />);
    expect(component.root.findByType(Icon)).toBeTruthy();
  });

  test(
    `It should forward the icon property to the src property of 
    the Icon component.`,
    () => {
      const icon = '/my-icon.svg';
      const component = create(<LabeledIcon label="My Label" icon={icon} />);
      expect(component.root.findByType(Icon).props.src).toEqual(icon);
    },
  );

  test(
    `It should have a HTML element with a "label" class and with the 
    value of the label property as child.`,
    () => {
      const label = 'My label';
      const component = create(
        <LabeledIcon label={label} icon="/my-icon.svg" />,
      );

      expect(
        component.root.findByProps({ className: 'label' }).children,
      ).toContain(label);
    },
  );

  test(
    `It should forward the value of the className property to the 
    attribute className of the root tag.`,
    () => {
      const className = 'my-labeled-icon';
      const component = create(
        <LabeledIcon label="My label" icon="/my-icon.svg" className={className} />,
      );

      expect(component.toJSON().props.className).toContain(className);
    },
  );

  test(
    `It should added the "right" class when no the label 
    position was fill in.`,
    () => {
      const component = create(
        <LabeledIcon label="My label" icon="/my-icon.svg" />,
      );

      expect(component.toJSON().props.className).toContain('right');
    },
  );

  test(
    `It should forward the value of the labelPosition to the className 
    attribute of the root element.`,
    () => {
      const component = create(
        <LabeledIcon label="My label" icon="/my-icon.svg" labelPosition="bottom" />,
      );

      expect(component.toJSON().props.className).toContain('bottom');
    },
  );
});
