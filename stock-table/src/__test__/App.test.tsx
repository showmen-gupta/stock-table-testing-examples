import React from 'react';
import App from '../App';
import {render, shallow} from 'enzyme';
import { StockDataTable } from '../stock-table/StockDataTable';
import { CustomCharts } from '../stock-table/components/graph/CustomCharts';
import { Typography } from '@material-ui/core';

describe('Rendering component App', () => {
  it('renders correctly', () => {
    //given
    const wrapper = render(<App/>);
    //than
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with header', () => {
    //given
    const wrapper = shallow(<App/>);
    //when
    const stockHeader = wrapper.find(Typography);
    //than
    expect(stockHeader.exists()).toBeTruthy();
  });

  it('renders App with Stock table data without crashing', () => {
    //given
    const wrapper = shallow(<App/>);
    //when
    const wrapperStockTable = wrapper.find(StockDataTable);
    //than
    expect(wrapperStockTable.exists()).toBeTruthy();
  });

  it('renders App with Custom chart without crashing', () => {
    //given
    const wrapper = shallow(<App/>);
    //when
    const wrapperStockChart = wrapper.find(CustomCharts);
    //than
    expect(wrapperStockChart.exists()).toBeTruthy();
  });
});