// dependencies
import { render, screen } from '@testing-library/react';

// component
import App from 'src/pages';

describe('Sample test', () => {
    it('render the app', () => {
        render(<App />);

        const text = screen.getByText(/get started/i);

        expect(text).toBeInTheDocument();
    });
});
