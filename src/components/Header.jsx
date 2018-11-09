import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #7CE7C9;
          }
        `}</style>
    <h1>Keg World</h1>
    <Link to="/">Patron</Link> | <Link to="/adminview">Admin</Link>
    </div>
  );
}

export default Header;
