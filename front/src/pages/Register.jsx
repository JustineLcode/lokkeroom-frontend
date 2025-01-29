import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const generateError = (error) =>
    toast.error(error, { position: "bottom-right" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/register",
        values
      );

      setIsLoading(false);

      if (response.status === 201) {
        navigate("/login");
      } else {
        generateError("Registration failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      generateError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Register Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
