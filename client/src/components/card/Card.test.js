import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders card with title and text', () => {
    const props = {
      imageSrc: 'test-image.jpg',
      title: 'Test Title',
      text: 'Test Text',
    };

    const { getByAltText, getByText } = render(<Card {...props} />);

    const cardImage = getByAltText('Card');
    const cardTitle = getByText('Test Title');
    const cardText = getByText('Test Text');

    expect(cardImage).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const props = {
      imageSrc: 'test-image.jpg',
      title: 'Test Title',
      text: 'Test Text',
    };

    const { container } = render(<Card {...props} />);

    const cardElement = container.firstChild;

    expect(cardElement).toHaveClass('card');
    
  });
});
