import React from "react";
import Input from "../Input";

const InputOption = ({ type = "text", onAddHandler = () => {}, label }) => {
  return (
    <form
      onSubmit={(e) => {
        onAddHandler(e, type);
      }}
    >
      <p>
        Input de <b>{type}</b>:
      </p>
      <Input label={label} isRequired={true} name="label" />
      {type === "select" && (
        <Input
          label="Ingresa las opciones separado por comas"
          isRequired={true}
          name="options"
        />
      )}
      <input
        type="submit"
        value="Add"
        style={{
          backgroundColor: "#40C5F7",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      />
    </form>
  );
};

export default InputOption;
