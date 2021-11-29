import { useEffect, useState } from 'react';

export interface Data {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjusted: number;
  }
  
const createData = ( date: string, open: number, high: number, low: number, close: number, volume: number, adjusted: number): Data => {
  return {date, open, high, low, close, volume, adjusted};
};
const data = [
  createData('2010-01-04', 12.747, 12.885, 12.597, 10.28, 60855800, 8.201456),
  createData('2010-01-05', 13.098, 14.098, 13.036, 10.96, 215620200, 8.7439367),
  createData('2010-01-06', 14.051, 14.364, 13.951, 11.37, 200070600, 9.071067),
  createData('2010-01-07', 14.364, 14.653, 14.189, 11.66, 130201700, 9.302429),
  createData('2010-01-08', 14.747, 14.885, 14.597, 12.28, 80855800, 10.201456),
  createData('2010-01-09', 12.947, 10.645, 18.597, 13.28, 70855800, 11.201456),
];      
    
export const useCreateData = () => {
  const [rows, setRows] = useState<Data[]>([]);
  useEffect(() => {
    setRows(data);
  }, []);
  return {rows};
};