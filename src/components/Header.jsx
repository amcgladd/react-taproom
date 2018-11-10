import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
          ul {
            list-style-type: none;
            padding: 10px;
            }
            li {
              display: inline;
              margin-right: 20px;
            }
        `}</style>
      <h1>Keg World</h1>
      <ul>
        <li><Link to="/">Patron</Link></li>
        <li><Link to="/adminview">Admin</Link></li>
      </ul>
    </div>
  );
}

export default Header;
