import React from 'react';
import App from '../../App';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing App component', () => {
  afterEach(cleanup);
  test('Should render with the header', () => {
    const { container } = render(<App/>);

    expect(container.getElementsByClassName('MuiTypography-root')).toBeTruthy();
  });

  test('Should render with stock table', () => {
    const { container } = render(<App/>);
    
    expect(container.getElementsByClassName('MuiTable-root')).toBeTruthy();
  });
  
  test('Should render with stock chart', () => {
    const { container } = render(<App/>);
    
    expect(container.getElementsByClassName('echarts-for-react')).toBeTruthy();
  });
});