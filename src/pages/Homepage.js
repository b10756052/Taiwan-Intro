import React from "react";
import { useNavigate } from "react-router-dom";
// 輪播照片
import jiufen from "../images/九份.jpg";
import oneZone from "../images/101.jpg";
import love from "../images/愛河.jpg";
// 旅遊card照片
// 北台灣
import Taipei from "../images/台北.jpg";
import NewTaipei from "../images/新北.jpg";
import Taoyuan from "../images/桃園.jpg";
import Keelung from "../images/基隆.png";
import Hsinchu from "../images/新竹.jpg";
import Yilan from "../images/宜蘭.jpg";
// 中台灣
import Taichung from "../images/台中.jpg";
import Changhua from "../images/彰化.jpg";
import Nantou from "../images/南投.jfif";
import Yunlin from "../images/雲林.jpg";
import Miaoli from "../images/苗栗.jpg";
// 南台灣
import Tainan from "../images/台南.jpg";
import Kaohsiung from "../images/高雄.jpg";
import Chiayi from "../images/嘉義.webp";
import Pingtung from "../images/屏東.jpg";
// 東台灣
import Hualien from "../images/花蓮.jpg";
import Taitung from "../images/台東.jpeg";
// 外島
import Kinmen from "../images/金門.jpg";
import Penghu from "../images/澎湖.jpg";
import Mazu from "../images/馬祖.jpg";
// 食物card照片
import speciality from "../images/地方特產.png";
import ExotiCuisine from "../images/異國料理.jpg";
import ChineseCuisine from "../images/中式美食.jpg";
import NightSnack from "../images/夜市小吃.jpg";
import dessert from "../images/甜點冰品.jpg";
import Souvenir from "../images/伴手禮.jpg";
import vegetarianDiet from "../images/素食.png";
import barbecue from "../images/火烤料理.jpg";
import OtherFood from "../images/其他.jpg";

const Homepage = ({
  keyWord,
  setKeyWord,
  NotWork,
  foodkeyWord,
  setFoodKeyWord,
}) => {
  const navigate = useNavigate();

  const NouthOnclick = (e) => {
    // button設active
    e.target.classList.toggle("active");

    // 其餘button刪active
    e.target.parentElement.parentElement.children[1].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[2].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[3].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[4].children[0].classList.remove(
      "active"
    );
    // display設flex
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
      "flex";
    // 其餘設none
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[3].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[4].style.display =
      "none";
  };

  const MidOnclick = (e) => {
    // button設active
    e.target.classList.toggle("active");
    // 其餘button刪active
    e.target.parentElement.parentElement.children[0].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[2].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[3].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[4].children[0].classList.remove(
      "active"
    );
    // display設flex
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].style.display =
      "flex";
    // 其餘設none
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[3].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[4].style.display =
      "none";
  };

  const SouthOnclick = (e) => {
    // button設active
    e.target.classList.toggle("active");
    // 其餘button刪active
    e.target.parentElement.parentElement.children[1].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[0].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[3].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[4].children[0].classList.remove(
      "active"
    );
    // display設flex
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].style.display =
      "flex";
    // 其餘設none
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[3].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[4].style.display =
      "none";
  };

  const EastOnclick = (e) => {
    // button設active
    e.target.classList.toggle("active");
    // 其餘button刪active
    e.target.parentElement.parentElement.children[1].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[2].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[0].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[4].children[0].classList.remove(
      "active"
    );
    // display設flex
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[3].style.display =
      "flex";
    // 其餘設none
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[4].style.display =
      "none";
  };

  const OtherOnclick = (e) => {
    // button設active
    e.target.classList.toggle("active");
    // 其餘button刪active
    e.target.parentElement.parentElement.children[1].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[2].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[3].children[0].classList.remove(
      "active"
    );
    e.target.parentElement.parentElement.children[0].children[0].classList.remove(
      "active"
    );
    // display設flex
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[4].style.display =
      "flex";
    // 其餘display設none
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[1].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[3].style.display =
      "none";
    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
      "none";
  };

  const cardKeyWord = (e) => {
    let word;
    if ((e.target.class = "mask")) {
      word = e.target.parentElement.children[0].innerText;
    } else if ((e.target.class = "cardP")) {
      word = e.target.innerText;
    }

    if (
      word == "地方特產" ||
      word == "異國料理" ||
      word == "中式美食" ||
      word == "夜市小吃" ||
      word == "甜點冰品" ||
      word == "伴手禮" ||
      word == "素食" ||
      word == "火烤料理" ||
      word == "其他"
    ) {
      setFoodKeyWord(word);
      navigate("/food");
    } else {
      setKeyWord(word);
      navigate("/play");
    }
  };
  return (
    <div id="homepage" className="homepagebox">
      {/* 照片輪播 */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
        data-bs-wrap="true"
        data-bs-interval="1500"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="active"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div id="carousel-inner" class="carousel-inner">
          <div class="carousel-item ">
            <img src={jiufen} class="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item active ">
            <img src={oneZone} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item ">
            <img src={love} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/*display none*/}
      {/* class="card text-center" */}
      <div id="cardsBox" style={{ marginTop: "2.5rem", marginBottom: "8rem" }}>
        {/* class="card-header" */}
        <div id="cardsHeader">
          {/* class="nav nav-tabs card-header-tabs" */}
          <ul id="cardsNavUl">
            {/* 切換的按鈕的li們 */}
            <li class="nav-item">
              <button onClick={NouthOnclick} class="nav-link active">
                北台灣
              </button>
            </li>
            <li class="nav-item">
              <button onClick={MidOnclick} class="nav-link ">
                中台灣
              </button>
            </li>
            <li class="nav-item">
              <button onClick={SouthOnclick} class="nav-link ">
                南台灣
              </button>
            </li>
            <li class="nav-item">
              <button onClick={EastOnclick} class="nav-link ">
                東台灣
              </button>
            </li>
            <li class="nav-item">
              <button onClick={OtherOnclick} class="nav-link ">
                外島
              </button>
            </li>
          </ul>
        </div>

        {/* class="card-body" */}
        <div id="cardsBody">
          {/* 北台灣 */}
          <div style={{ display: "flex" }} className="NouthCard">
            {/* 台北 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">台北</p>
              <div className="mask">
                <img src={Taipei} alt="" />
              </div>
            </div>
            {/* 新北 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">新北</p>
              <div className="mask">
                <img src={NewTaipei} alt="" />
              </div>
            </div>
            {/* 桃園 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">桃園</p>
              <div className="mask">
                <img src={Taoyuan} alt="" />
              </div>
            </div>
            {/* 基隆 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">基隆</p>
              <div className="mask">
                <img src={Keelung} alt="" />
              </div>
            </div>
            {/* 新竹 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">新竹</p>
              <div className="mask">
                <img src={Hsinchu} alt="" />
              </div>
            </div>
            {/* 宜蘭 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">宜蘭</p>
              <div className="mask">
                <img src={Yilan} alt="" />
              </div>
            </div>
          </div>

          {/* 中台灣 */}
          <div style={{ display: "none" }} className="MidCard">
            {/* 台中 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">台中</p>
              <div className="mask">
                <img src={Taichung} alt="" />
              </div>
            </div>
            {/* 彰化 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">彰化</p>
              <div className="mask">
                <img src={Changhua} alt="" />
              </div>
            </div>
            {/* 南投 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">南投</p>
              <div className="mask">
                <img src={Nantou} alt="" />
              </div>
            </div>
            {/* 雲林 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">雲林</p>
              <div className="mask">
                <img src={Yunlin} alt="" />
              </div>
            </div>
            {/* 苗栗 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">苗栗</p>
              <div className="mask">
                <img src={Miaoli} alt="" />
              </div>
            </div>
          </div>

          {/* 南台灣 */}
          <div style={{ display: "none" }} className="SouthCard">
            {/* 台南 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">台南</p>
              <div className="mask">
                <img src={Tainan} alt="" />
              </div>
            </div>
            {/* 高雄 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">高雄</p>
              <div className="mask">
                <img src={Kaohsiung} alt="" />
              </div>
            </div>
            {/* 嘉義 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">嘉義</p>
              <div className="mask">
                <img src={Chiayi} alt="" />
              </div>
            </div>
            {/* 屏東 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">屏東</p>
              <div className="mask">
                <img src={Pingtung} alt="" />
              </div>
            </div>
          </div>

          {/* 東台灣 */}
          <div style={{ display: "none" }} className="EastCard">
            {/* 花蓮 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">花蓮</p>
              <div className="mask">
                <img src={Hualien} alt="" />
              </div>
            </div>
            {/* 台東 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">台東</p>
              <div className="mask">
                <img src={Taitung} alt="" />
              </div>
            </div>
          </div>

          {/* 外島 */}
          <div style={{ display: "none" }} className="OtherCard">
            {/* 金門 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">金門</p>
              <div className="mask">
                <img src={Kinmen} alt="" />
              </div>
            </div>
            {/* 澎湖 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">澎湖</p>
              <div className="mask">
                <img src={Penghu} alt="" />
              </div>
            </div>
            {/* 馬祖 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">馬祖</p>
              <div className="mask">
                <img src={Mazu} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*吃東西cards*/}
      {/* class="card text-center" */}

      <div id="cardsBox">
        {/* class="card-header" */}
        <div id="cardsHeader">
          {/* class="nav nav-tabs card-header-tabs" */}
          <ul id="cardsNavUl">
            {/* 切換的按鈕的li們 */}
            <li class="nav-item">
              <p id="FoodCardTitle" class="nav-link active">
                人氣美食
              </p>
            </li>
          </ul>
        </div>
        {/* class="card-body" */}
        <div id="cardsBody">
          <div style={{ display: "flex" }} className="NouthCard">
            {/* 地方特產 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">地方特產</p>
              <div className="mask">
                <img src={speciality} alt="" />
              </div>
            </div>

            {/* 異國料理 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">異國料理</p>
              <div className="mask">
                <img src={ExotiCuisine} alt="" />
              </div>
            </div>

            {/* 中式美食 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">中式美食</p>
              <div className="mask">
                <img src={ChineseCuisine} alt="" />
              </div>
            </div>

            {/* 夜市小吃 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">夜市小吃</p>
              <div className="mask">
                <img src={NightSnack} alt="" />
              </div>
            </div>

            {/* 甜點冰品 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">甜點冰品</p>
              <div className="mask">
                <img src={dessert} alt="" />
              </div>
            </div>

            {/* 伴手禮 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">伴手禮</p>
              <div className="mask">
                <img src={Souvenir} alt="" />
              </div>
            </div>

            {/* 素食 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">素食</p>
              <div className="mask">
                <img src={vegetarianDiet} alt="" />
              </div>
            </div>

            {/* 火烤料理 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">火烤料理</p>
              <div className="mask">
                <img src={barbecue} alt="" />
              </div>
            </div>

            {/* 其他 */}
            <div
              style={{ zIndex: "500", position: "relative" }}
              className="card"
              onClick={cardKeyWord}
            >
              <p className="cardP">其他</p>
              <div className="mask">
                <img src={OtherFood} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 解決跟footer色塊重疊問題 */}
      <div id="Box" className="try"></div>
    </div>
  );
};

export default Homepage;
