import React from 'react'

const BlueBackground = (props) => {
  const { children, bold } = props
  return (
    <div style={{fontWeight:(bold?"900":"400"),background:"blue"}}>
      {children}
    </div>
  )
}

export default BlueBackground
