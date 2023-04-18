import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p>name : {user ? user.displayName : "not found"}</p>
      <p>email : {user ? user.email : "email not found"}</p>
      {console.log(user)}
    </div>
  );
};

export default Home;
