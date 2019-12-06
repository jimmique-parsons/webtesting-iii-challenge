// Test away!
import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Display from './Display';

test("it should default to 'unlocked' and 'open'", () => {
    const { getByText } = render(<Display />);

    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
});

test("Displays 'Closed' if the closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);

    expect(getByText(/closed/i))
});

test("Displays 'Open' if the closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);

    expect(getByText(/open/i))
});

test("Displays 'Locked' if the locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);

    expect(getByText('Locked'))
});

test("Displays 'Unlocked' if the locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);

    expect(getByText('Unlocked'))
});

test("When locked use the 'red-led' class", () => {
    const { container } = render(<Display locked={true} />);
    const displayLock = getByTestId(container, 'display-lock');

    expect(displayLock.className).toContain('red-led');
});

test("When closed use the 'red-led' class", () => {
    const { container } = render(<Display closed={true} />);
    const displayGate = getByTestId(container, 'display-gate');

    expect(displayGate.className).toContain('red-led');
});

test("When unlocked use the 'green-led' class", () => {
    const { container } = render(<Display closed={false} />);
    const displayLock = getByTestId(container, 'display-lock');

    expect(displayLock.className).toContain('green-led');
});

test("When open use the 'green-led' class", () => {
    const { container } = render(<Display closed={false} />);
    const displayGate = getByTestId(container, 'display-gate');

    expect(displayGate.className).toContain('green-led');
});
