import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    keyword: PropTypes.string,
    filterStock: PropTypes.bool,
    onChange: PropTypes.func,
  }

  render() {
    const { onChange, keyword, filterStock } = this.props

    return (
      <div>
        <input
          type='text'
          placeholder='请输入搜索关键词'
          value={keyword}
          onChange={event => onChange('keyword', event.target.value)} />
        <div>
          <input
            id='filter'
            type='checkbox'
            checked={filterStock}
            onChange={
              event => onChange('filterStock', event.target.checked)
            } />
          <label htmlFor='filter'>过滤有库存的货品</label>
        </div>
      </div>
    )
  }
}

export default SearchBar
