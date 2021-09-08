import React from "react";
import './Header.css';

export default function Header({ black }) {
  return (
    <header className={ black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Cloneflix" />
        </a>
      </div>
      <div className="header--user">
        <img src="logo192.png" alt="User" />
      </div>
    </header>
  )
}