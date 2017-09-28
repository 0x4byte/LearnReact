import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductTable from './ProductTable/';
import SearchBar from './SearchBar';

class FilterTable extends Component {
  static propTypes = {
    list: PropTypes.array,
  }
  state = {
    keyword: '',
    filterStock: false,
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  get tableList() {
    const { keyword, filterStock } = this.state
    const { list } = this.props
    const re = new RegExp(keyword, 'i')
    
    return list.map(item => {
      // 匹配关键词
      if(!re.test(item.name)) return null
      // 过滤库存
      if(filterStock && !item.stocked) return null

      return item;
    }).filter(item => item !== null)
  }

  render() {
    const { keyword, filterStock } = this.state;

    return (
      <div className='content'>
        <SearchBar
          keyword={keyword}
          filterStock={filterStock}
          onChange={this.handleChange} />
        <ProductTable list={this.tableList} />
      </div>
    )
  }
}

export default FilterTable
