import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Snowfall from "react-snowfall";
import { playSelect } from "../store/select";
import videoMp4 from "../assets/02.mp4";
import double from "../assets/anh-doi.png";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  const playValue = useSelector(playSelect);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playValue && videoRef.current) {
      videoRef.current.play();
    }
  }, [playValue]);
  return (
    <>
      <div
        className="
      animation-icon-double"
      >
        <img
          className="w-[90px] h-[90px] z-40"
          style={{ zIndex: 40 }}
          src={double}
          alt=""
        />
      </div>
      <Snowfall
        color="pink"
        snowflakeCount={400}
        style={{
          minHeight: "600vh",
          position: "absolute",
          zIndex: 10,
        }}
      />
      {children}
      <video
        ref={videoRef}
        controls
        autoPlay
        className="hidden"
        style={{ display: "none" }}
      >
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Layout;
