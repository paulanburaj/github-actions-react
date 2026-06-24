import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
    test('renders the main heading and documentation links', () => {
        render(<App />);

        expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /explore vite/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /learn more/i })).not.toBeInTheDocument();
    });

    test('increments counter when button is clicked', async () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });

        await userEvent.click(button);

        expect(button).toHaveTextContent(/count is 1/i);
    });
});
