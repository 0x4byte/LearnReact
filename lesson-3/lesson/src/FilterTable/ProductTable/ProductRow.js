import React from 'react'
import Proptypes from 'prop-types'

const ProductRow = ({ row }) => {
  const getStyle = () => {
    if(row.stocked) return { color: '#000' }

    return { color: 'red' }
  }

  return (
    <tr>
      <td style={getStyle()}>{ row.name }</td>
      <td>{ row.price }</td>
    </tr>
  )
}

ProductRow.proptypes = {
  row: Proptypes.object
}

export default ProductRow
