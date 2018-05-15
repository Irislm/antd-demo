import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import './App.css';
import StandardTable from './StandardTable';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchDropDownVisible: false,
      filtering: false,      
    }
  }
  onFilter = (value) => {
    this.setState({
      filtering: !!value,
    }, () => {
      // do async filter
    })
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        ncSearch: true,  // customized
        filtering: this.state.filtering,  // customized
        searchDropDownVisible: this.state.searchDropDownVisible,  // customized
        onSearch: value => this.onFilter(value),  // customized
        onSearchDropdownVisibleChange: (visible, callback) => {  // customized
          this.setState({
            searchDropDownVisible: visible,
          }, () => {
            callback();
          });
        },
      }, {
        title: '年龄',
        dataIndex: 'age',
      }
    ];
    const tableConfig = {
      dataSource: [{
        id: '1',
        name: 'Jessie',
        age: '18',
      }, {
        id: '2',
        name: 'Linda',
        age: '20',
      }],
      pagination: false,
      columns,
      rowKey: record => record.id,
    };
    return (
      <StandardTable {...tableConfig} />
    );
  }
}

export default App;
