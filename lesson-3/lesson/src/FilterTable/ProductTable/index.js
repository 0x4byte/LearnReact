import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

const ProductTable = ({ list }) => {

  /**
   * return [
   *   <ProductCategoryRow category={item.category} />,
   *   <ProductRow row={item} />,
   *   ...
   * ]
   */
  const formatRows = () => {
    const rows = {}
    
    list.forEach(item => {
      let row = rows[item.category]
  
      if(!row) {
        row = [<ProductCategoryRow category={item.category} />]
      }
  
      row.push(<ProductRow row={item} />)
      rows[item.category] = row
    })

    return Object.values(rows)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { formatRows() }
      </tbody>
    </table>
  )
}

ProductTable.propTypes = {
  list: PropTypes.array,
}

export default ProductTable
