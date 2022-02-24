import React from 'react'

import Part from './Part'

const Contents = ({contents}) => {
  return (
    <div>
        {contents.map(item => 
            <Part content={item} />
        )}
    </div>
  )
}

export default Contents