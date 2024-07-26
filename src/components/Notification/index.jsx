import React from 'react';
import './index.scss';

export const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose} className="notification__close-button">X</button>
    </div>
  );
};