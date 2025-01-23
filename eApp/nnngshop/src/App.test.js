import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Test",()=>{
  render(<App />);

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/Become a seller/i);
    expect(linkElement).toBeInTheDocument();
  });
  
}) 