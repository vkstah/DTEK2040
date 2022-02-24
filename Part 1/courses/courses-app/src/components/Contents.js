import React from 'react'

const Contents = ({contents}) => {
  return (
    <div>
        {contents.map(item => 
            <p>{item.part} {item.exercises}</p>
        )}
    </div>
  )
}

export default Contents