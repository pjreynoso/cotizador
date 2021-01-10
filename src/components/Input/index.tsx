import React, { ChangeEvent } from 'react'

interface Props {
  label: string
  value: string
  name: string
  handleChange: (e: ChangeEvent) => void
}

const Input: React.FC<Props> = ({value, name, label, handleChange}) => {
  
  return (
    <div className="wrapper">
      {
        value ? 
          <p className='label'>{label}</p>
        : 
          null
      }
      <input
        name={name}
        value={value}
        onChange={handleChange}
        className='wrapper__input'
        placeholder={label}
      />
    </div>
    )
}

export default Input