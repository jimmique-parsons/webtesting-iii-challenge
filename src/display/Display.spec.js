// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test("it should default to 'unlocked' and 'open'", () => {
    const { getByText } = render(<Display />);

    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
});
