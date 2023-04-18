import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const auth = getAuth(app);
const Login = () => {
  // const { setLoginUserInfo } = useContext(AuthContext);
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => {
        console.log(res.user);
        // setLoginUserInfo(res.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  const resetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const valid = regex.test(email);
      if (valid) {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert("have a look your email");
          })
          .catch((err) => console.log(err.massage));
      }
    } else {
      alert("provide a valid email");
    }
    // sendPasswordResetEmail(auth,)
  };
  return (
    <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>
      </form>
      <button onClick={resetPassword} className="underline my-2">
        forget password
      </button>
      <p className="my-4 text-center">
        <span>
          New in this site please{" "}
          <Link className="underline text-lg" to="/register">
            Register
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
