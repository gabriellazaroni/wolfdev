import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './index';

describe('when rendered verify Header', () => {
  it('should verify SignIn button is rendered correctly.', () => {
    render(<Header />);
    expect(screen.getByText('ENTRAR')).toBeInTheDocument();
  });
  it('should verify SignOut button is rendered correctly.', () => {
    render(<Header />);
    expect(screen.getByText('CADASTRAR')).toBeInTheDocument();
  });
});
