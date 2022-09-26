import { tracks } from "./player";
import "./index.scss";

const Avatar = ({ idx }) => {
  return (
    <>
      <img src={tracks[idx].cover} className="avatar1" alt="" />
      <img src={tracks[idx].cover} className="avatar" alt="" />
      <h4 className="name">{tracks[idx].artist}</h4>
      <h1 className="title">{tracks[idx].name}</h1>
    </>
  );
};

export default Avatar;
