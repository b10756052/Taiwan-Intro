import React, { useState } from "react";
import "./styles/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Play from "./pages/Play";
import Food from "./pages/Food";
import { Routes, Route } from "react-router-dom";

function App() {
  let [keyWord, setKeyWord] = useState("");
  let [foodkeyWord, setFoodKeyWord] = useState("");
  const ListSetKeyWord = (e) => {
    setKeyWord(e.target.innerText);
  };
  const ListSetFoodKeyWord = (e) => {
    setFoodKeyWord(e.target.innerText);
  };
  const NotWork = () => {
    alert("此專案為切版練習，因此本功能未實作");
  };
  return (
    <div className="App">
      <Nav NotWork={NotWork} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              keyWord={keyWord}
              setKeyWord={setKeyWord}
              foodkeyWord={foodkeyWord}
              setFoodKeyWord={setFoodKeyWord}
            />
          }
        />
        <Route
          path="/Taiwan-Intro"
          element={
            <Homepage
              keyWord={keyWord}
              setKeyWord={setKeyWord}
              foodkeyWord={foodkeyWord}
              setFoodKeyWord={setFoodKeyWord}
            />
          }
        />
        <Route
          path="/play"
          element={
            <Play
              keyWord={keyWord}
              setKeyWord={setKeyWord}
              ListSetKeyWord={ListSetKeyWord}
              NotWork={NotWork}
            />
          }
        />
        <Route
          path="/food"
          element={
            <Food
              keyWord={keyWord}
              setKeyWord={setKeyWord}
              ListSetFoodKeyWord={ListSetFoodKeyWord}
              ListSetKeyWord={ListSetKeyWord}
              foodkeyWord={foodkeyWord}
              setFoodKeyWord={setFoodKeyWord}
              NotWork={NotWork}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
