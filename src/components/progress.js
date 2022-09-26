import { useContext, useState, useEffect } from "react";
import { userOptions, player } from "./player";
import "./index.scss";

const Progress = ({ idx, setIdx }) => {
  const [currLength, setCurrLength] = useState(0);
  const [length, setLength] = useState(0);
  const options = useContext(userOptions);
  const progressBar = document.querySelector(".progressBar");

  const updateProgress = (e) => {
    let offset = e.target.getBoundingClientRect().left;
    let newOffSet = e.clientX;
    let newWidth = newOffSet - offset;
    progressBar.style.width = newWidth + "px";
    let secPerPx = length / 280;
    player.currentTime = secPerPx * newWidth;
  };

  setInterval(() => {
    setLength(Math.ceil(player.duration));
    setCurrLength(Math.ceil(player.currentTime));
    let secPerPx = Math.ceil(player.duration) / 280;
    let newWidth = player.currentTime / secPerPx;
    document.querySelector(".progressBar").style.width = newWidth + "px";
    if (player.currentTime === player.duration) {
      if (options.shuffle === true) {
        setIdx(parseInt(Math.random() * 1000) % 9);
      } else if (options.repeat === true) {
        player.play();
      } else {
        setIdx((idx + 1) % 9);
      }
    }
  }, 1000);

  const formatTime = (s) => {
    return Number.isNaN(s)
      ? "0:00"
      : (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  };

  return (
    <div className="progress">
      <div className="currentTime">
        <p>{formatTime(currLength)}</p>
      </div>
      <div className="progressCenter" onClick={(e) => updateProgress(e)}>
        <div className="progressBar"></div>
      </div>
      <div className="songLength">
        <p>{formatTime(length)}</p>
      </div>
    </div>
  );
};

export default Progress;
