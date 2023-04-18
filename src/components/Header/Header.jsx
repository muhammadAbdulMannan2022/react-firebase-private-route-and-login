import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
const Header = () => {
  const { user, setLoginUserInfo } = useContext(AuthContext);
  const hendleLogOut = () => {
    signOut(auth)
      .then(() => {
        setLoginUserInfo(null);
        console.log("log out success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Log in
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user ? (
          <button
            onClick={hendleLogOut}
            className="btn btn-ghost normal-case text-xl"
          >
            Log Out
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
