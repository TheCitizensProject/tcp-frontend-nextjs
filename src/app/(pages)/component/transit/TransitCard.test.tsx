import { render, screen } from '@testing-library/react';
import TransitCard from './TransitCard'; // Adjust the import path as needed

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('TransitCard', () => {
  it('renders correctly with all props', () => {
    const props = {
      train: 'F',
      time: '5',
      direction: 'Queens',
      alertLink: 'http://example.com/alert'
    };

    render(<TransitCard {...props} />);

    expect(screen.getByText('Queens')).toBeInTheDocument();
    expect(screen.getByAltText('Queens')).toHaveAttribute('src', '/f-letter.png');
    expect(screen.getByText('5 mins')).toBeInTheDocument();
    expect(screen.getByText('21st Queensbridge')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Service Alerts' })).toHaveAttribute('href', 'http://example.com/alert');
  });

  it('renders the correct icon based on the ferry type', () => {
    render(<TransitCard train="ferry" time="3" direction="Manhattan" />);

    expect(screen.getByAltText('Manhattan')).toHaveAttribute('src', '/ferry_icon.png');
    expect(screen.queryByText('63rd Lexington Ave')).toBeNull();
  });
  
  it('renders the correct icon based on the tram type', () => {
    render(<TransitCard train="tram" time="3" direction="Manhattan" />);
    expect(screen.getByAltText('Manhattan')).toHaveAttribute('src', '/tcp-tram.png');
  });

  it('does not render service alerts if alertLink is not provided', () => {
    const props = {
      train: 'F',
      time: '5',
      direction: 'Queens'
    };

    render(<TransitCard {...props} />);
    const alertLink = screen.queryByText('Service Alerts');
    expect(alertLink).toBeNull();
  });
});