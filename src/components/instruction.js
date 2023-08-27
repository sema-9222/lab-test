import "./style.css";
import clickpng from "./clickk.png";

export function Instruction(props) {
  return (
    <div className="All">
      <div className="infos">
        <p className="instruction">
          <p className="trialresult">
            <b>Deneme aşamasını tamamladınız.</b>
          </p>{" "}
          <br /> Değerlendirme aşamasında her biri ortalama 1 dakika olan 19
          adet video izleyeceksiniz. Bu aşamada cevabınızın doğru veya
          yanlışlığına yönelik bir geribildirim değil, bunun yerine{" "}
          <b>ekrana tıklayıp tıklamadığınıza</b> yönelik bir geribildirim
          alacaksınız.
        </p>
        <img src={clickpng} alt="click" style={{ width: "12%" }} />
        <p className="instruction">
          Ekranda her bir videonun yanında izlemiş olduğunuz videonun{" "}
          <b>karmaşıklığı</b> ve <b>sabitliği</b> ile ilgili 2 soru yer
          almaktadır. Her bir videoyu izledikten sonra diğer videoya geçmeden
          hemen önce soruları cevaplamalısınız. Değerlendirme aşamasına geçmek
          için <b>"İLERİ"</b> tuşuna tıklayınız.
        </p>
        <button className="btn btni" onClick={props.onClick}>
          İleri
        </button>
      </div>
    </div>
  );
}
