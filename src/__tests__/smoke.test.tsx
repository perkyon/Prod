import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

const Dummy = () => <div data-testid="dummy">OK</div>;

describe('infrastructure', () => {
  it('renders a simple component', () => {
    const { getByTestId } = render(<Dummy />);
    expect(getByTestId('dummy').textContent).toBe('OK');
  });
});
