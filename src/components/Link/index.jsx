import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss';
export const Link = ({ text }) => {
  return (
    <NavLink to="/shop">
      <button className="button">
        {text}
      </button>
    </NavLink>
  );
};
