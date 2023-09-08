import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';


test('renders Login component', () => {
  const component = render(<LoginForm/>);
  const heading = screen.getByText('Acceso de usuario');
  expect(heading).toBeInTheDocument();
});