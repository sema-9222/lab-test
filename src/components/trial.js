import React, { useEffect, useState } from "react";
import trialVideo from "./cute.mp4";
import "./style.css";
import correct from "./checked.png";
import incorrect from "./cross.png";

export function Trial(props) {
  const videoRef = React.useRef(null);
  const w = window.innerWidth;
  const [result, setResult] = useState("");
  var item = "";
  const [answers, setAnswers] = useState([]);

  function trialevent(e) {
    e.preventDefault();
    const videoRect = videoRef.current.getBoundingClientRect();
    const trialX = e.clientX - videoRect.left;
    const trialY = e.clientY - videoRect.top;
    const vid = videoRef.current;
    const clickTime = vid.currentTime;

    if (trialY > (w * 25) / 100 && clickTime > 18 && clickTime < 23) {
      setResult("correct");
      item = "correct";
    } else {
      setResult("incorrect");
      item = "incorrect";
    }

    setTimeout(() => {
      setResult("");
    }, 2000);

    setAnswers([...answers, item]);

    console.log(clickTime);
  }

  var filteredIncorrect = answers.filter((item) => item === "incorrect").length;

  function onEnded() {
    if (filteredIncorrect < 3 && answers.includes("correct")) {
      props.onSuccess();
    } else {
      props.onFailure();
    }
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        // spacebar key code
        event.preventDefault();
        event.stopImmediatePropagation();
        const video = videoRef.current;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="Alltrial">
      <div className="infostrial">
        <div className="outcome">
          {result === "correct" ? (
            <img src={correct} alt="Doğru!" className="corr-incorr" />
          ) : result === "incorrect" ? (
            <img src={incorrect} alt="Yanlış" className="corr-incorr" />
          ) : null}
        </div>
        <div className="stuff">
          <video
            onEnded={onEnded}
            onClick={trialevent}
            src={trialVideo}
            type="video/mp4"
            muted
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "96.4%",
              position: "absolute",
              zIndex: "0",
              overflow: "hidden",
            }}
            ref={videoRef}
          ></video>
        </div>

        <button className="btn" onClick={props.onClick}>
          İleri
        </button>
      </div>
    </div>
  );
}
