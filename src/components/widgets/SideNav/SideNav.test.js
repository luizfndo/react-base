import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from '@widgets/MenuItem';

import SideNav from './SideNav';


describe('SideNav component', () => {
  test('It should call handleBeforeItemOnclick when clicked on menu items.', () => {
    const label = 'My item';
    const handleBeforeItemOnclick = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <SideNav beforeItemOnClick={handleBeforeItemOnclick}>
          <MenuItem label={label} />
        </SideNav>
      </MemoryRouter>,
    );

    fireEvent.click(getByText(label));
    expect(handleBeforeItemOnclick.mock.calls.length).toBe(1);
  });
});
