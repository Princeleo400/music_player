import "./index.scss";
import {
  PauseFill,
  PlayFill,
  SkipBackwardFill,
  SkipForwardFill,
} from "react-bootstrap-icons";

const Control = ({ idx, setIdx, playState, setPlayState }) => {
  return (
    <div className="controls">
      <button
        className="controlButton"
        onClick={(x) => setIdx(idx - 1 < 0 ? 8 : idx - 1)}
      >
        <SkipBackwardFill />
      </button>
      {playState === true ? (
        <button className="centerButton" onClick={(x) => setPlayState(false)}>
          <PauseFill />
        </button>
      ) : (
        <button className="centerButton" onClick={(x) => setPlayState(true)}>
          <PlayFill />
        </button>
      )}
      <button className="controlButton" onClick={(x) => setIdx((idx + 1) % 9)}>
        <SkipForwardFill />
      </button>
    </div>
  );
};

export default Control;
