import React from "react";
import SearchIcon from "../logo/放大鏡.png";

const Play = ({ keyWord, setKeyWord, ListSetKeyWord, NotWork }) => {
  return (
    <div className="playbox" style={{ height: "53.65vh" }}>
      <p id="wherePlay">想去哪玩？</p>
      <div class="input-group mb-2">
        <button
          id="DropButton"
          style={{ border: "1px #9186cca1 solid", padding: "0rem 1rem" }}
          class="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {!keyWord && "全部"}
          {keyWord && keyWord}
        </button>
        <ul
          class="dropdown-menu"
          style={{
            minWidth: "26.5%",

            height: "200px",
            overflow: "auto",
          }}
        >
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              台北
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              新北
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              桃園
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              台中
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              台南
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              高雄
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              基隆
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              新竹
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              彰化
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              南投
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              雲林
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              嘉義
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              屏東
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              宜蘭
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              花蓮
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              台東
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              金門
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              澎湖
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              馬祖
            </a>
          </li>
          <li>
            <a onClick={ListSetKeyWord} class="dropdown-item" href="#">
              苗栗
            </a>
          </li>
        </ul>
        <input
          style={{
            border: "1px #9186cca1 solid",
            borderRight: "0px #9186cca1 solid",
          }}
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
          placeholder="搜尋地點"
        />

        <button
          style={{
            margin: "0rem",
            border: "1px #9186cca1 solid",
            borderLeft: "none",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
          }}
          onClick={NotWork}
        >
          <img
            style={{ padding: "0.3rem", width: "30px", height: "30px" }}
            src={SearchIcon}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Play;
