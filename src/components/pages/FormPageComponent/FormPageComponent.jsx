import React, { useState } from "react";
import Input from "../../Input";
import InputOption from "../../InputOption/InputOption";
import { v4 as uuid } from "uuid";
import data from "../../../fields.json";

const FormPageComponent = () => {
  const [fields, setFields] = useState([]);

  const addFieldHandler = (e, type) => {
    e.preventDefault();
    const id = uuid();
    let field;
    if (type !== "select") {
      field = { type: `${type}`, label: `${e.target.label.value}`, id };
    } else {
      let options = e.target.options.value.split(",");
      field = {
        type: `${type}`,
        label: `${e.target.label.value}`,
        id,
        options: options,
      };
    }
    setFields([...fields, field]);
  };

  const deleteFieldHandler = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
        <h3>Opciones de inputs del formulario:</h3>
        {data.map((input) => (
          <InputOption
            type={input.type}
            onAddHandler={addFieldHandler}
            key={input.id}
            label={input.label}
          />
        ))}
      </div>
      <hr style={{ margin: 10 }} />
      <form style={{ width: "40%" }}>
        {fields.map((field) => (
          <div key={field.id} style={{ margin: 10 }}>
            <Input
              type={field.type}
              label={field.label}
              id={field.id}
              options={field?.options}
            />
            <button
              style={{
                backgroundColor: "#D60600",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                color: "white",
              }}
              onClick={(e) => {
                e.preventDefault();
                deleteFieldHandler(field.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormPageComponent;
