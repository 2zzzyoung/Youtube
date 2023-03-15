import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navnar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
