import React from 'react'

import Part from './Part'

const Contents = ({parts}) => {
  return (
    <div>
        {parts.map(item => 
            <Part part={item} />
        )}
    </div>
  )
}

export default Contents