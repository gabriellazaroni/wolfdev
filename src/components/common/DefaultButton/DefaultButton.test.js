import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DefaultButton from './index';

describe('when rendered verify ButtonHeader', () => {
  it('should verify ButtonHeader is rendered correctly and getting width props', () => {
    render(
      <DefaultButton width={'200px'}>
        <span>Hello World</span>
      </DefaultButton>
    );
    const testID = screen.getByTestId('button_header-component');
    expect(testID).toBeInTheDocument();
  });
});
