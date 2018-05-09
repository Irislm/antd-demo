import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerListSelected: [],
      loadingCustomer: false,
    }
  }
  render() {
    const customerList = [{
      id: '1',
      name: 'Lily',
    }, {
      id: '2',
      name: 'Sea',
    }, {
      id: '3',
      name: 'Mary'
    }];
    const { customerListSelected } = this.state;
    return (
      <div className="App">
        <Select
          showSearch
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          mode="multiple"
          style={{ minWidth: '20rem', width: 'auto' }}
          placeholder="请搜索选择客户，支持搜索和多选"
          value={customerListSelected.length > 0 ? customerListSelected : undefined}
          onSelect={(value) => {
            const temp = this.state.customerListSelected.concat(value);
            this.setState({
              customerListSelected: temp
            })
          }}
        >
          {
            this.state.loadingCustomer && customerList.length === 0 && <Select.Option key="searching" disabled><Spin /></Select.Option>
          }
          {
            customerList.length !== 0 && customerList.map((row) => {
              return <Select.Option key={row.id}>{row.name}</Select.Option>;
            })
          }
        </Select>
      </div>
    );
  }
}

export default App;
