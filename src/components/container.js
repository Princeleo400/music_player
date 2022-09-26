import { useState, useEffect, useRef } from "react";
import "./index.scss";
import { player, tracks } from "./player";
import Avatar from "./avatar";
import Progress from "./progress";
import Control from "./controls";
import Options from "./options";

const Container = () => {
  const [idx, setIdx] = useState(0);
  const [playState, setPlayState] = useState(false);
  const oldIdx = useRef(idx);

  useEffect(() => {
    if (playState === true) player.play();
    else player.pause();
    if (idx !== oldIdx.current) {
      player.pause();
      player.src = tracks[idx].source;
      player.load();
      player.play();
      setPlayState(true);
      oldIdx.current = idx;
    }
  }, [playState, idx]);

  return (
    <div className="playerContaier">
      <Avatar idx={idx} />
      <Progress setIdx={setIdx} idx={idx} />
      <Control
        setIdx={setIdx}
        idx={idx}
        playState={playState}
        setPlayState={setPlayState}
      />
      <Options setIdx={setIdx} idx={idx} />
    </div>
  );
};

export default Container;
