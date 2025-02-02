import React from 'react'

function Button({btnType, children}) {
  return (
    <>
    <button type={btnType}>{children}</button>
    </>
  )
}

export default Button