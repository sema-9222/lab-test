import React from "react";
import "./style.css";
import checkedd from "./checked.png";
import crosss from "./cross.png";

export function Introduction2(props) {
  return (
    <div className="All">
      <div className="infos">
        <p className="introduction">
          Değerlendirme aşamasına geçmeden önce bir deneme yapacaksınız.
          Değerlendirme aşamasına geçebilmeniz için denemede en fazla <b>2</b>{" "}
          kez hata yapma hakkınız bulunmaktadır. 2'den fazla hata yaptığınız
          durumda deneme tekrarlanacaktır. Deneme videosunu izlerken verdiğiniz
          cevaba göre videonun üst kısmında <b>doğru</b> veya <b>yanlış</b>{" "}
          cevap verdiğinize yönelik bir geribildirim alacaksınız. Deneme
          aşamasına geçmek için <b>"İLERİ"</b> tuşuna tıklayınız.
        </p>
        <div className="img2">
          <img src={checkedd} alt="checked" style={{ width: "10%" }} />
          <img src={crosss} alt="cross" style={{ width: "10%" }} />
        </div>

        <button className="btn btni" onClick={props.onClick}>
          İleri
        </button>
      </div>
    </div>
  );
}
export default Introduction2;
