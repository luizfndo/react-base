import React from 'react';
import { create } from 'react-test-renderer';
import SVG from 'react-inlinesvg';
import Icon from './Icon';


/**
 * Using SVG in encoded in base64 to avoid the async loading.
 * */
const fixtures = {
  base64: 'data:image/svg+xml;base64,PHN2Zz48Y2lyY2xlIC8+PC9zdmc+',
};

describe('Icon component', () => {
  test('It should guarantee that a src property was fill in.', () => {
    expect(() => create(<Icon />)).toThrow();
  });

  test('It should have a span tag as its root tag.', () => {
    const component = create(<Icon src={fixtures.base64} />);
    expect(component.toJSON().type).toBe('span');
  });

  test('It should return a svg tag as content by default.', () => {
    const component = create(<Icon src={fixtures.base64} />);
    expect(component.root.findByType('svg')).toBeTruthy();
  });

  test(
    `It should return a img tag as content when the img property 
    is filled in.`,
    () => {
      const component = create(<Icon src={fixtures.base64} img />);
      expect(component.root.findByType('img')).toBeTruthy();
    },
  );

  test('It should contains a default className called "icon".', () => {
    const component = create(<Icon src={fixtures.base64} />);
    expect(component.toJSON().props.className).toContain('icon');
  });

  test(
    `It should forward the value of the className property to the 
    attribute className of the tags.`,
    () => {
      const className = 'my-icon';
      const component = create(<Icon src={fixtures.base64} className={className} />);
      expect(component.toJSON().props.className).toContain(className);
    },
  );

  test(
    `It should forward the value of the src property to the 
    attribute src of the tags.`,
    () => {
      const src = '/my.svg';
      const componentSVG = create(<Icon src={src} />);
      expect(componentSVG.root.findByType(SVG).props.src).toBe(src);

      const componentImg = create(<Icon src={src} img />);
      expect(componentImg.root.findByType('img').props.src).toBe(src);
    },
  );

  test(
    `It should forward the alt property to the alt attribute of the 
    img tag if a img tag is returned.`,
    () => {
      const alt = 'This is my SVG icon.';
      const component = create(<Icon src={fixtures.base64} alt={alt} img />);
      expect(component.root.findByType('img').props.alt).toBe(alt);
    },
  );
});
