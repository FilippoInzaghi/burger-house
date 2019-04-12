import React from "react";

const Person = props => {
  const { name } = props;
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#eee",
        margin: "20px",
        border: "3px solid black"
      }}
    >
      <input
        type="text"
        id={props.id}
        onChange={event => props.inputChangeHandler(event, props.id)}
        value={name}
      />
      <p onClick={() => props.deletePerson(props.id)}>{name}</p>
    </div>
  );
};

export default Person;
