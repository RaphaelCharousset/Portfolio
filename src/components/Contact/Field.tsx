import React, { memo } from "react"

const Field = (
  { type, name, setState, placeholder, value } 
  : { type: string, name: string, setState: React.Dispatch<React.SetStateAction<string>>, placeholder: string, value: string}
) => {
  console.log('render field');
  
  return (
    <input
      type={type}
      id={name}
      name={name}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default memo(Field)
