import "./GettingData.css";
import React from "react";
import { useEffect, useState } from "react";

import Movie2 from "./videos/cute.mp4";

import Movie17 from "./videos/cute.mp4";

import { sendDataToServer } from "./logic/sendDataToServer";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import Changeimg from "./clickk.png";
import Likert from "react-likert-scale";
import { Finished } from "./finished";

export function GettingData() {
  const videos = [
    { id: "Film 2", name: Movie2 },
    { id: "Film 17", name: Movie17 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // Iteration of the videos array
  const [time, setTime] = useState("0:00"); // Video time
  var complexity = null; // Complexity value
  var stability = null; // Stability value
  const [clicks, setClicks] = useState([]); // Collecting click response
  const w = (window.innerWidth * 75) / 100; // 75% of the screen size - for measuring the screen part
  const [isChangeed, setIsChangeed] = useState(false);
  var form = [];

  function btnOnclick(e) {
    clicks.push({ Complexity: complexity, Stability: stability });

    downloadObjectAsJson(clicks, `${videos[currentIndex].id}INFO.txt`); // Downloading data when btn clicked

    // downloadObjectAsJson(form, `${videos[currentIndex].id}FORM.json`); // Downloading data when btn clicked
    sendDataToServer(clicks);
    if (currentIndex === videos.length - 1) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setClicks([]);
  }

  const ComplexityQue = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
    ],
    onChange: (val) => {
      complexity = val;
    },
  };

  const StabilityQue = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
    ],
    onChange: (val) => {
      stability = val;
    },
  };

  function convertTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = (seconds % 60).toFixed(0);
    return `${min} : ${sec}`;
  } // Converting time to min : sec

  const videoRef = React.useRef(null);

  function getData(e) {
    e.preventDefault();
    const videoRect = videoRef.current.getBoundingClientRect();
    const clickX = e.clientX - videoRect.left;
    const clickY = e.clientY - videoRect.top;
    // Getting x and y positions of click event

    const vid = videoRef.current;
    const clickTime = convertTime(vid.currentTime);
    const clickSecond = vid.currentTime;
    setTime(clickTime);
    // Getting time of the click event

    var name = "";
    if (clickX < (w * 32) / 100) {
      name = "Left-Peripheral";
    } else if (clickX < (w * 67.2) / 100) {
      name = "Center";
    } else {
      name = "Right-Peripheral";
    }
    // The screen part of the click event

    // console.log(complexity);

    setClicks([
      ...clicks,
      {
        videoId: videos[currentIndex].id,
        name,
        clickX,
        clickY,
        clickTime,
        clickSecond,
        time: new Date().toISOString(),
      },
    ]);
    // Pushing data to the clicks array

    // Pushing data to the Changes array

    setIsChangeed(true); // For click image

    setTimeout(() => {
      setIsChangeed(false);
    }, 1000);

    console.log(name);
  }

  function downloadObjectAsJson(exportObj, exportName) {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  // JSON download

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
    <div className="Data">
      {currentIndex === null ? (
        <Finished />
      ) : (
        <div className="everything">
          <div className="movie">
            <div className="outcomeData">
              {isChangeed ? (
                <img src={Changeimg} alt="Tık!" className="clickk" />
              ) : null}
            </div>
            <video
              onClick={getData}
              src={videos[currentIndex].name}
              type="video/mp4"
              muted
              style={{
                backgroundColor: "black",
                position: "absolute",
                width: "77%",
                height: "100%",

                alignSelf: "center",
              }}
              ref={videoRef}
            ></video>
          </div>

          <div className="controls">
            <h2 className="head">{videos[currentIndex].id}</h2>
            <div className="form">
              <p className="question">
                Videonun karmaşıklık derecesini (videoda bulunan kaza
                olasılıklarının fazlalığını) değerlendiriniz.
              </p>
              <div className="likertinfo">
                Hiç Karmaşık Değil
                <Likert {...ComplexityQue} />
                Tamamen Karmaşık
              </div>
            </div>
            <div className="form">
              <p className="question">
                Videonun çekim sırasındaki sabitliğini (kameranın sallanma
                derecesini) değerlendiriniz
              </p>
              <div className="likertinfo">
                Hiç Sabit Değil
                <Likert {...StabilityQue} />
                Tamamen Sabit
              </div>
            </div>
            <button className="btn" onClick={btnOnclick}>
              İleri
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default GettingData;
