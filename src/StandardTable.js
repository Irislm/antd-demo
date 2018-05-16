import React from 'react';
import { Table, Icon } from 'antd';
import './App.css';
import SearchDropDown from './SearchDropDown';

const StandardTable = ({ columns, ...restProps }) => {
  const standardTableCols = columns.map((col) => {
    if (col.ncSearch) {
      const newCol = {
        ...col,
        onHeaderCell: (column) => {
          return {
            className: 'enableSearchHeader',
            onClick: () => {
              column.onSearchDropdownVisibleChange(true);
            },
          };
        },
        // something wrong with this??
        filterDropDown: <SearchDropDown onSearch={col.onSearch} />,
        filterDropdownVisible: col.searchDropDownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          if (!visible) {
            // not sure it can work, but has no effects on this issue
            col.onSearchDropdownVisibleChange(visible);
          }
        },
        filterIcon: <Icon type="search" style={{ color: col.filtering ? '#3480C4' : '#aaa', lineHeight: 1.28 }} />,
      };
      return newCol;
    } else {
      return col;
    }
  });
  return (
    <Table columns={standardTableCols} {...restProps} style={{width: '1000px'}} />
  );
};

export default StandardTable;
