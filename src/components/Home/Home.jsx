import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p>{user ? user.displayName : "not found"}</p>
    </div>
  );
};

export default Home;
