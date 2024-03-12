import React from 'react';
import { render, screen, act } from '@testing-library/react';
import InternetConnectionAlert from './InternetConnectionAlert'; // Adjust the import based on your file structure

describe('InternetConnectionAlert', () => {
  test('does not show the alert when showAlert is false', async () => {
    await act(async () => {
      render(<InternetConnectionAlert showAlert={false} />);
    })
    const alertBox = screen.getByTestId('alert-transition-component');
    expect(alertBox).toHaveStyle({
      'display': 'none'
    })
  });

  test('shows the alert when showAlert is true', async () => {
    await act(async () => {
      render(<InternetConnectionAlert showAlert={true} />);
    });
    const alertBox = screen.getByTestId('alert-transition-component');
    expect(alertBox).not.toHaveStyle({
      'display': 'none'
    })
  });

  test('has correct initial styles when showAlert is false', async () => {
    await act(async () => {
      render(<InternetConnectionAlert showAlert={false} />);
    });
    const alertBox = screen.getByTestId('alert-transition-component');
    expect(alertBox.parentElement).toHaveClass('pb-0');
  });

  test('has correct styles when showAlert is true', async () => {
    await act(async () => {
      render(<InternetConnectionAlert showAlert={true} />);
    });
    const alertBox = screen.getByTestId('alert-transition-component');
    expect(alertBox.parentElement).toHaveClass('pb-[45px]');
  });
});