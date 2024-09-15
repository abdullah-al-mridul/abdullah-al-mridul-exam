import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

const HomePage = () => {
  return (
    <>
      <div>login success!</div>
      <button
        onClick={() => {
          getAuth().signOut();
        }}
      >
        sign out
      </button>
    </>
  );
};

export default HomePage;
