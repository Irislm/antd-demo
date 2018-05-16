import React from 'react';
import { Button, Input, Icon } from 'antd';
import './App.css';

class SearchDropDown extends React.Component {
  state = {
    searchText: '',
  };
  onChangeSearchText = (value) => {
    this.setState({
      searchText: value,
    });
  }

  onClearSearch = () => {
    this.setState({
      searchText: '',
    }, () => {
      this.props.onSearch('');
    });
  }

  render() {
    const { searchText } = this.state;
    const { onSearch } = this.props;
    const {
      onChangeSearchText,
      onClearSearch,
    } = this;
    return (
      <div className="customerFilterDropdown">
        <Input
          placeholder="筛选"
          value={searchText}
          onPressEnter={onSearch}
          onClick={e => e.stopPropagation()}
          onChange={e => onChangeSearchText(e.target.value)}
        />
        {
          searchText && <a onClick={(e) => { e.stopPropagation(); onClearSearch(); }}><Icon type="close-circle" className="clearSearchBtn" /></a>
        }
        <Button type="primary" onClick={onSearch}>搜索</Button>
      </div>
    );
  }
}

export default SearchDropDown;
