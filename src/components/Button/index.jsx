import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss';
export const Button = ({ label }) => {
  return (
    <NavLink to="/Магазин">
      <button className="button">
        {label}
      </button>
    </NavLink>
  );
};
