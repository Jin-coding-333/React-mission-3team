import React from "react";
import homeImage from "./smiley-face-4269804_1920.jpg";
import "./MainPage.css";
import smileImg from "./smile,png.png";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page">
      <header className="header">
        <div className="headerBox">
          <img src={homeImage} className="home-icon" alt="스마일 이미지" />
          <div id="text">아이엠 그라운드</div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>3팀</h2>
          <p>우리 팀을 소개합니다!</p>
          <p>
            <strong>'ㅈ', 'ㅎ'</strong>으로 시작하는 단어를 생각해보세요.
          </p>
          <p>
            <a href="#knowledge">클릭</a> 또는 스크롤 하여 지식을 넓히세요.
          </p>
        </div>
        <img src={smileImg} id="smileimg" alt="돌탑위에 스마일 이미지가 올라가있음"/>
      </section>

      <section className="main-buttons" id="knowledge">
        <div className="buttonBox">
          <Link to="JongHun">
            <button className="intro-button">종훈</button>
          </Link>
            <button className="intro-button">진한</button>
          <Link to="HyuckJin">
            <button className="intro-button">혁진</button>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>
          3팀을 빛낸 인물들
          <br />
          김두봉(병원), 김혁진, 박지흔(병원), 임예지(학교), 최종훈, 배진한
        </p>
      </footer>
    </div>
  );
}

export default MainPage;
