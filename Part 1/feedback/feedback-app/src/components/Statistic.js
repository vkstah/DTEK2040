import React from 'react'

const Statistic = ({text, data}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{data}</td>
    </tr>
  )
}

export default Statistic