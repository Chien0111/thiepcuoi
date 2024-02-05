import welcome from "../../../assets/04.jpg";
import sky from "../../../assets/01.jpg";
import "react-slideshow-image/dist/styles.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slide } from "react-slideshow-image";

const HeaderOR = () => {
  return (
    <>
      <div className="absolute text-white z-10">
        <h1>HeaderOR</h1>
      </div>
      <Slide duration={1500}>
        <div className="each-slide-effect">
          <img width="100%" src={welcome} alt="" />
        </div>
        <div className="each-slide-effect">
          <img width="100%" src={sky} alt="" />
        </div>
        <div className="each-slide-effect">
          <div>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default HeaderOR;
