import { useEffect, useRef } from "react";
import videoMp4 from "../assets/02.mp4";
import Snowfall from "react-snowfall";
import { useSelector } from "react-redux";
import { playSelect } from "../store/select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  const playValue = useSelector(playSelect);
  const videoRef = useRef();
  useEffect(() => {
    if (playValue) {
      videoRef.current.play();
    }
  }, [playValue]);
  return (
    <>
      <Snowfall
        color="pink"
        snowflakeCount={60}
        style={{
          minHeight: "600vh",
          position: "absolute",
          zIndex: 10,
        }}
      />
      {children}
      <video ref={videoRef} controls autoPlay className="hidden">
        {/* <source src={videoMp4} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Layout;
