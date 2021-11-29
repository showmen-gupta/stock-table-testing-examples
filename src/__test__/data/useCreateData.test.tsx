import React from 'react';
import { Data, useCreateData } from '../../stock-table/data/useCreateData';

const mockedData : Data [] =[
  {
    date: '2010-01-04',
    open: 12.747,
    high: 12.885,
    low: 12.597,
    close: 10.28,
    volume: 60855800,
    adjusted: 8.201456
  },
]; 

let data: Data[] = [];

describe('When this hook is called', () => {
  beforeEach(() => {
    React.useState = jest.fn().mockReturnValue([mockedData, {}]);
    React.useEffect = jest.fn().mockReturnValue([mockedData]);
    const {rows} = useCreateData();
    data = rows;  
  }); 
  
  it('should load with data', () => {
    expect(data.length).toBeGreaterThan(0);
  });

  it('should have a date', () => {
    const mockedEbossCode = data.map(x => x.date).pop();

    expect(mockedEbossCode).not.toBe('');
  });

  it('should have a number type value of open', () => {
    const mockedOpen = data.map(x => x.open).pop();

    expect(mockedOpen).not.toBe(null);
    expect(typeof mockedOpen).toBe('number');
  });

  it('should have a number type value of high', () => {
    const mockedHigh = data.map(x => x.high).pop();

    expect(mockedHigh).not.toBe(null);
    expect(typeof mockedHigh).toBe('number');
  });

  it('should have a number type value of low', () => {
    const mockedLow = data.map(x => x.low).pop();

    expect(mockedLow).not.toBe(null);
    expect(typeof mockedLow).toBe('number');
  });

  it('should have a number type value of close', () => {
    const mockedClose = data.map(x => x.close).pop();

    expect(mockedClose).not.toBe(null);
    expect(typeof mockedClose).toBe('number');
  });

  it('should have a number type value of volume', () => {
    const mockedVolume = data.map(x => x.volume).pop();

    expect(mockedVolume).not.toBe(null);
    expect(typeof mockedVolume).toBe('number');
  });

  it('should have a number type value of adjusted', () => {
    const mockedAdjusted = data.map(x => x.adjusted).pop();

    expect(mockedAdjusted).not.toBe(null);
    expect(typeof mockedAdjusted).toBe('number');
  });

  it('should have higher value for high than low', () => {
    const mockedHigh = data.map(x => x.high).pop() as number;
    const mockedLow = data.map(x => x.low).pop() as number;

    expect(mockedHigh).toBeGreaterThan(mockedLow);
  });

  it('should have higher value for open than close', () => {
    const mockedOpen = data.map(x => x.open).pop() as number;
    const mockedClose = data.map(x => x.close).pop() as number;

    expect(mockedOpen).toBeGreaterThan(mockedClose);
  });

  it('should have value for volume greater than 50000', () => {
    const mockedVolume = data.map(x => x.volume).pop() as number;

    expect(mockedVolume).toBeGreaterThan(50000);
  });
});