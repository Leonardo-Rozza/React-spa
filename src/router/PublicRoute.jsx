// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? <Navigate to="/marvel" /> : children;
};
