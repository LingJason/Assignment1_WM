"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();
  const [history, setHistory] = useState([]);

  const onSubmit = (data) => {
    setHistory((prevHistory) => [...prevHistory, data]);
    reset();
  };

  return (
   <div class="col-md-6 offset-md-3">
      <h1 className="mb-4">Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/
              },
            })}
            type="text"
            className="form-control"
            id="firstName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/
              },
            })}
            type="text"
            className="form-control"
            id="lastName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telephoneNumber" className="form-label">
            Telephone Number
          </label>
          <input
            {...register("telephoneNumber", {
              required: "Telephone number is required",
              pattern: {
                value: /^[0-9]*$/
              },
            })}
            type="text"
            className="form-control"
            id="telephoneNumber"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h2 className="mt-4">History</h2>
      <ul className="list-group">
        {history.map((item, index) => (
          <li key={index} className="list-group-item">
            <b>Name:</b> {item.firstName} {item.lastName} <b>#</b> {item.telephoneNumber}
          </li>
        ))}
      </ul>
    </div>
);
}