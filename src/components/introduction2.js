import React from "react";
import "./style.css";
import keyboard from "./keyboard.png";
import mouse from "./mouse.png";

export function Introduction2(props) {
  return (
    <div className="All">
      <div className="infos">
        <p className="introduction">
          Videoları izlerken cevap vermek için <b>“SPACE”</b> tuşunu ve{" "}
          <b>bilgisayar faresinin sol</b> tuşunu kullanmanız gerekmektedir.
          İzlediğiniz videoda kaza tehlikesini gördüğünüz anda <b>“SPACE”</b>{" "}
          tuşuna basarak videoyu durdurmalı ve <b>bilgisayar faresi</b> ile
          ekranda kaza tehlikesinin olduğu kısma tıklamalısınız.
        </p>
        <div className="img1">
          <img src={keyboard} alt="keyboard" style={{ width: "25%" }} />
          <img src={mouse} alt="mouse" style={{ width: "10%" }} />
        </div>

        <button className="btn btni" onClick={props.onClick}>
          İleri
        </button>
      </div>
    </div>
  );
}
export default Introduction2;
