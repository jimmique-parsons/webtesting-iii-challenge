// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test("provide buttons to toggle the 'closed' and 'locked' states", () => {
    const { container } = render(
        <Controls
            locked={false}
            closed={false}
        />);

    expect(container.getElementsByClassName('toggle-btn')).toHaveLength(2);
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const mockToggleLocked = jest.fn();
    const mockToggleClosed = jest.fn();

    const { getByText } = render(
        <Controls
            locked={true}
            closed={true}
            toggleLocked={mockToggleLocked}
            toggleClosed={mockToggleClosed}
        />
    );

    const lockBtn = getByText(/unlock gate/i);
    const gateBtn = getByText(/open gate/i);

    expect(lockBtn).toBeTruthy()
    expect(gateBtn).toBeTruthy()
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const mockToggleLocked = jest.fn();
    const mockToggleClosed = jest.fn();

    const { queryByText } = render(
        <Controls
            locked={false}
            closed={false}
            toggleLocked={mockToggleLocked}
            toggleClosed={mockToggleClosed}
        />
    );

    const lockBtn = queryByText(/lock gate/i);
    const gateBtn = queryByText(/close gate/i);

    expect(lockBtn).toBeTruthy()
    expect(gateBtn).toBeTruthy()
});

test("the closed toggle button is disabled if the gate is locked", () => {
    const mockToggleClosed = jest.fn();

    const { queryByText } = render(
        <Controls
            locked={true}
            closed={true}
            toggleClosed={mockToggleClosed}
        />
    );

    const gateBtn = queryByText(/open gate/i);
    expect(gateBtn).toBeTruthy();

    fireEvent.click(gateBtn);

    expect(mockToggleClosed).not.toHaveBeenCalled();
});

test("the locked toggle button is disabled if the gate is open", () => {
    const mockToggleLocked = jest.fn();

    const { getByText } = render(
        <Controls
            locked={false}
            closed={false}
            toggleLocked={mockToggleLocked}
        />
    );

    const lockBtn = getByText(/lock gate/i);
    expect(lockBtn).toBeTruthy();

    fireEvent.click(lockBtn);

    expect(mockToggleLocked).not.toHaveBeenCalled();
});