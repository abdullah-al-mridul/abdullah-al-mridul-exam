import React, { useEffect, useState } from "react";
import { Navigate, replace, Route, Routes } from "react-router";
import Login from "../routes/Login";
import Register from "../routes/Register";
import HomePage from "../routes/HomePage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
    console.log(user);
  }, []);
  return (
    <>
      {/* {user === null ? (
        <Navigate to="/at" replace={true} />
      ) : (
        <Navigate to={"/"} replace />
      )}{" "} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
