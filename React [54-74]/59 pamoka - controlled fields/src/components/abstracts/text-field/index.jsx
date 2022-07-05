import React from 'react'

// Controlled component - Presentational/dumb
const TextField = ({
  label,
  type = 'text',
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={type} {...props} />
    </div>
  )
}

export default TextField