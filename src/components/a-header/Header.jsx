import { IoCloseSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
// import { CiLight } from "react-icons/ci";
import { useState } from 'react';
import './header.css';
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setShowModel(true);
        }}
      >
        <IoMenuSharp />
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
      <IoMoonOutline  />
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                onClick={() => {
                  setShowModel(false);
                }}
                className="close"
              >
                <IoCloseSharp />
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
