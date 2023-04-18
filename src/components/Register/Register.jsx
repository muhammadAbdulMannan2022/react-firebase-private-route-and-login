import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const auth = getAuth(app);

const Register = () => {
  // const { setLoginUserInfo } = useContext(AuthContext);
  // submit handeler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = e.target;
    console.log(email.value, password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => {
        // console.log(res.user, name.value);
        updateUserData(res.user, name.value);
        // setLoginUserInfo(res.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  return (
    <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </div>
      </form>
      <p className="my-4 text-center">
        <span>
          alrady registerd please{" "}
          <Link className="underline text-lg" to="/login">
            Log in
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
