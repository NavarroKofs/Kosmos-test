import React from "react";

const Input = ({
  label,
  type = "text",
  id,
  isRequired = false,
  name,
  options = [],
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      {type === "text" && (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            required={isRequired}
            name={name}
            style={{ maxWidth: "100%" }}
          />
        </>
      )}
      {type === "radio" && (
        <>
          <input type={type} id={id} style={{ maxWidth: "100%" }} />
          <label htmlFor={id}>{label}</label>
        </>
      )}
      {type === "select" && (
        <>
          <select name="select" style={{ maxWidth: "100%" }}>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default Input;
