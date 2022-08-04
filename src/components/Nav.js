import React from "react";
import NavTaiwanIcon from "../logo/Vector 1.png";
import lightModelIcon from "../logo/Vector (Stroke).png";
import DarkModelIcon from "../logo/Subtract (Stroke).png";
import SearchIcon from "../logo/放大鏡.png";
import { useNavigate } from "react-router-dom";

const Nav = ({ NotWork }) => {
  const navigate = useNavigate();
  const IconLinkClick = () => {
    navigate("/");
  };

  const modeSwitch = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle(
      "dark"
    );

    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].children[0].classList.toggle(
      "navbar-dark"
    );
  };
  const GoToPlay = () => {
    navigate("/play");
  };
  const GoToEat = () => {
    navigate("/food");
  };
  return (
    <nav id="nav" class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <div onClick={IconLinkClick} className="homepageIconBox">
          <img src={NavTaiwanIcon} alt="NavTaiwanIcon" />

          <div id="homepageIconWord" className="homepageIconWord">
            <p id="eng" className="english">
              Taiwan
            </p>

            <p id="chi" className="chinese">
              島遊
            </p>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul>
            <li>
              <button onClick={GoToPlay} href="">
                旅遊景點
              </button>
            </li>

            <li>
              <button onClick={GoToEat}>美食餐廳</button>
            </li>
          </ul>
          <div className="searchForm" action="">
            <input
              className="serachInput"
              type="text"
              placeholder="想去哪裡玩?"
            />

            <button onClick={NotWork}>
              <img src={SearchIcon} alt="" />
            </button>
          </div>
          <div class="form-check form-switch modeSwitch">
            <div className="sun">
              <img src={lightModelIcon} alt="" />
            </div>
            <div>
              <input
                onClick={modeSwitch}
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              ></input>
            </div>
            <div className="moon">
              <img src={DarkModelIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
