
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Logo from '../../assets/Logo.svg';

// Prueba básica para asegurarte de que se renderiza el componente
test('Renderiza el componente Logo', () => {
    const { getByAltText } = render(<Logo />);
    const logoElement = getByAltText('Logo Happy Travel'); // Reemplaza 'Logo' con el texto adecuado

    expect(logoElement).toBeInTheDocument();
});
