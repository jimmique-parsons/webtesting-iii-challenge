// Test away
import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import Dashboard from './Dashboard';

test("it shows the controls and display", () => {
    const { container } = render(<Dashboard />);

    const display = getByTestId(container, 'display');
    const controls = getByTestId(container, 'controls');

    expect(display).toBeTruthy()
    expect(controls).toBeTruthy()
});