import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";
/**
 *
 * @param {ReactNode} param childer - app components
 * @returns React Elements layout
 */
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
