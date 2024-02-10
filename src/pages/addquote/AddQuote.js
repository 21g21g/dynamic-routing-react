import React, { useState } from "react";

const AddQuote = ({ addTo }) => {
  const [entervalue, setEntervalue] = useState({
    name: "",
    text: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    addTo(entervalue);
    setEntervalue({
      name: "",
      text: "",
    });
  };

  const handleChange = (event) => {
    setEntervalue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="container bg-tertiary">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleForm.ControlInput1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={entervalue.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleForm.ControlTextarea1" className="form-label">
            Text
          </label>
          <textarea
            className="form-control"
            id="exampleForm.ControlTextarea1"
            rows={3}
            name="text"
            value={entervalue.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-success align-items-end mr-10"
        >
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default AddQuote;
