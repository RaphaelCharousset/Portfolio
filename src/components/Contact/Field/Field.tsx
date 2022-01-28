import { memo, ReactElement, useEffect } from "react"

import './field.scss'

type FieldType = (props: {
  type: string,
  name: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  label: string,
  value: string,
  isTextarea: boolean,
  errorMsg: string
}) => ReactElement<HTMLDivElement>

const Field: FieldType = (
  { type, name, setState, label, value, isTextarea, errorMsg } 
) => {
  useEffect(() => {
  }, [errorMsg])
  
  return (
  <div className="form-field">
    <label 
      htmlFor={name}
      className={value === '' ? "form-field__label field-empty" : "form-field__label field-fill"}
    >
      {label}
    </label>
    
    {isTextarea ? (
      <textarea 
        required
        minLength={20}
        maxLength={1000}
        className="form-field__input"
        id={name}
        name={name}
        onChange={(e) => setState(e.target.value)}
        value={value}
      />
    ) : (
      <input
        required
        minLength={3}
        className="form-field__input"
        type={type}
        id={name}
        name={name}
        onChange={(e) => setState(e.target.value)}
        value={value}
      />
    )}

    {errorMsg && (
      <div className="form-field__error-msg">
        {errorMsg}
      </div>
    )}

  </div>
)}

export default memo(Field)
