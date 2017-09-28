import React from 'react'
import Proptypes from 'prop-types'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{ category }</th>
    </tr>
  )
}

ProductCategoryRow.proptypes = {
  row: Proptypes.object
}

export default ProductCategoryRow
