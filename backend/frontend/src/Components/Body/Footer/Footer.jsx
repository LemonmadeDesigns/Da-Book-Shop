import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/fontawesome-free-solid'
import './footer.css'

const Footer = () => (
  <footer className="nav-footer bg-light p-3 text-center">
    <div id="footer-row">
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ 'textShadow': "1px 1px 1px black" }} 
        href="./Products">
        <FontAwesomeIcon id="lemon-footer" icon={faLemon} />
      </a>
      <p className="yellow">
        copyright &copy; 2022 by {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
        href="https://github.com/LemonmadeDesigns/FULLSTACK-MYSQL-APP">
          Lemon'made Design
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
