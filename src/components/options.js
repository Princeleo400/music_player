import { useState, useEffect, useRef, useContext } from "react";
import { tracks } from "./player";
import { userOptions } from "./player";
import {
  Shuffle,
  BoxArrowUpRight,
  HeartFill,
  Heart,
  ArrowRepeat,
} from "react-bootstrap-icons";

const Options = ({ idx }) => {
  const options = useContext(userOptions);
  const [shuffl, setShuffle] = useState(options.shuffle);
  const [repet, setRepeat] = useState(options.repeat);
  const [fav, setFav] = useState(tracks[idx].favorited);

  useEffect(() => {
    setFav(tracks[idx].favorited);
  }, [idx]);

  const shuffle = () => {
    options.shuffle = !options.shuffle;
    options.repeat = false;
    setShuffle(!shuffl);
    setRepeat(false);
  };

  const repeat = () => {
    options.repeat = !options.repeat;
    options.shuffle = false;
    setShuffle(false);
    setRepeat(!repet);
  };

  const favorite = () => {
    tracks[idx].favorited = !tracks[idx].favorited;
    setFav(tracks[idx].favorited);
  };

  const openURL = () => {
    window.open(tracks[idx].url, "_blank");
  };

  return (
    <div className="options">
      {(shuffl && (
        <button onClick={shuffle} className="opt" style={{ color: "#147CC0" }}>
          <Shuffle />
        </button>
      )) || (
        <button onClick={shuffle} className="opt">
          <Shuffle />
        </button>
      )}
      <button className="opt" onClick={openURL}>
        <BoxArrowUpRight />
      </button>
      {(fav && (
        <button onClick={favorite} className="opt" style={{ color: "#147CC0" }}>
          <HeartFill />
        </button>
      )) || (
        <button onClick={favorite} className="opt">
          <Heart />
        </button>
      )}
      {(repet && (
        <button onClick={repeat} className="opt" style={{ color: "#147CC0" }}>
          <ArrowRepeat />
        </button>
      )) || (
        <button onClick={repeat} className="opt">
          <ArrowRepeat />
        </button>
      )}
    </div>
  );
};

export default Options;
