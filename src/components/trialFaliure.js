import "./style.css";

export function TrialFailure(props) {
  return (
    <div className="All4">
      <div className="infos">
        <p className="introduction">
          <b>Deneme aşamasında başarısız oldunuz.</b> <br /> <br /> Lütfen
          denemeyi tekrarlamak için <b>"DENEME"</b> tuşuna tıklayınız.
        </p>

        <button className="btn btndeneme" onClick={props.onClick}>
          Deneme
        </button>
      </div>
    </div>
  );
}
