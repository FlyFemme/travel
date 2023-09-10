import { render, screen } from '@testing-library/react';
import CreateForm from './CreateForm';

test('renders crear destino title', () => {
    render(<CreateForm />);
    screen.debug();
    const title = screen.getByText(/crear destino/i);
    expect(title).toBeInTheDocument();
});