import React from "react";
import SearchIcon from "../logo/放大鏡.png";

const Food = ({
  keyWord,
  setKeyWord,
  foodkeyWord,
  setFoodKeyWord,
  ListSetFoodKeyWord,
  ListSetKeyWord,
  NotWork,
}) => {
  return (
    <div className="foodbox" style={{ height: "53.65vh" }}>
      <p id="whereEat">想吃什麼？</p>
      <div class="input-group mb-2">
        <div className="foodButton input-group ">
          <div>
            <button
              style={{
                border: "1px #9186cca1 solid",
                width: "137.1px",
                borderRadius: "0px",
                borderTopLeftRadius: "8px",
              }}
              class="btn  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {!keyWord && "全部"}
              {keyWord && keyWord}
            </button>

            <ul class="dropdown-menu">
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
          </div>
          <div>
            <button
              style={{
                border: "1px #9186cca1 solid",
                width: "132.1px",
                borderRadius: "0px",
                borderTopRightRadius: "8px",
              }}
              class="btn  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {!foodkeyWord && "全部"}
              {foodkeyWord && foodkeyWord}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  地方特產
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  異國料理
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  中式美食
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  夜市小吃
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  甜點冰品
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  伴手禮
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  素食
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  火烤料理
                </a>
              </li>
              <li>
                <a onClick={ListSetFoodKeyWord} class="dropdown-item" href="#">
                  其他
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="foodSearchInputBox">
          <input
            id="foodSearchInput"
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="搜尋地點"
          />

          <button onClick={NotWork}>
            <img
              style={{ padding: "0.3rem", width: "30px", height: "30px" }}
              src={SearchIcon}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
