import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

  it('renders the h1 title correctly', () => {
    render(<Header />);
    const titleElement = screen.getByTestId('projectTitle');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('ROOSEVELT ISLAND');
  });

  it('renders the logo image', () => {
    render(<Header />);
    const imageElement = screen.getByTestId('logo');
    expect(imageElement).toBeInTheDocument();
  });

  it('parent is an anchor with href to "/"', () => {
    render(<Header />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  }); 
})
