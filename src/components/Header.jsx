import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #7CE7C9;
          }
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            }
            li {
              display: inline;
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
