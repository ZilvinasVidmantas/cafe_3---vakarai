import React from 'react'

// Controlled component - Presentational/dumb
const TextField = ({
  label,
  value,
  onChange,
  type = 'text'
}) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default TextField