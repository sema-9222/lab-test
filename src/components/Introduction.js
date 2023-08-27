import React from "react";
import "./style.css";
import "./introduction.css";
import gif from "./gif.gif";

export function Introduction(props) {
  return (
    <div className="All">
      <div className="infos">
        <h1>Hoşgeldiniz!</h1>
        <div className="cont">
          <div className="par">
            <p className="introduction">
              Birazdan ekrana çeşitli videolar gelecek. Videolar gündelik
              hayatta araç kullanırken karşılaşabileceğiniz yol sahnelerini
              içermektedir. Sizden istenen izlediğiniz sahne içerisinde bulunan{" "}
              <b>kaza tehlikelerini</b> belirlemenizdir. Kaza tehlikesi
              sürücünün <u>hızını, yönünü değiştirmesini</u> veya{" "}
              <u>durmasını</u> gerektiren durumlar olarak tanımlanmaktadır.
              <br /> • yola çıkan bir yaya,
              <br /> • tali yoldan çıkan bir araç,
              <br /> • park halindeki arabaların arasından koşan bir çocuk, kaza
              tehlikelerine örnek olarak gösterilebilir.
            </p>
          </div>
          <div className="gif">
            <img src={gif} alt="Kaza tehlikesi gif" style={{ width: "90%" }} />
          </div>
        </div>
        <button className="btn btni" onClick={props.onClick}>
          İleri
        </button>
      </div>
    </div>
  );
}
export default Introduction;
