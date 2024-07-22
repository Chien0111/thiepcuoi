import img1 from "../../../assets/01.jpeg";
import img2 from "../../../assets/02.jpeg";
import img3 from "../../../assets/03.jpeg";
import img4 from "../../../assets/04.jpeg";
import img5 from "../../../assets/05.jpeg";
import img6 from "../../../assets/06.jpeg";
import img7 from "../../../assets/07.jpeg";
import img8 from "../../../assets/08.jpeg";
import "react-slideshow-image/dist/styles.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slide } from "react-slideshow-image";
import "./style.css";

const HeaderOR = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customStyle: any = { "--i": 1 };
  return (
    <div className="relative">
      <div className="absolute w-full top-[30%] text-center text-white z-10">
        <div className="waviy text-pink-100">
          <span style={customStyle}>T</span>
          <span style={customStyle}>R</span>
          <span style={customStyle}>A</span>
          <span style={customStyle}>N</span>
          <span style={customStyle}> </span>
          <span style={customStyle}>L</span>
          <span style={customStyle}>I</span>
          <span style={customStyle}>N</span>
          <span style={customStyle}>H</span>
          <span style={customStyle}> </span>
          <span style={customStyle}>C</span>
          <span style={customStyle}>H</span>
          <span style={customStyle}>I</span>
        </div>
      </div>
      <Slide duration={1500}>
        {images.map((img, index) => (
          <div key={index} className="each-slide-effect">
            <img
              className="object-cover"
              width="100%"
              src={img}
              alt={`Slide ${index + 1}`}
            />
            <img
              className="sm:h-[1000px]  object-cover"
              width="100%"
              src={img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HeaderOR;
