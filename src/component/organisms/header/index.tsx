import img1 from "../../../assets/01.jpg";
import img2 from "../../../assets/02.jpg";
import img3 from "../../../assets/03.jpg";
import img4 from "../../../assets/04.jpg";
import img5 from "../../../assets/05.jpg";
import img6 from "../../../assets/06.jpg";
import img7 from "../../../assets/07.jpg";
import img8 from "../../../assets/08.jpg";
import img9 from "../../../assets/09.jpg";
import img10 from "../../../assets/10.jpg";
import img11 from "../../../assets/11.jpg";
import img12 from "../../../assets/12.jpg";
import img13 from "../../../assets/13.jpg";
import img14 from "../../../assets/14.jpg";
import img15 from "../../../assets/15.jpg";
import img16 from "../../../assets/16.jpg";
import "react-slideshow-image/dist/styles.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Slide } from "react-slideshow-image";
import "./style.css";

const HeaderOR = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customStyle: any = { "--i": 1 };
  return (
    <div className="relative">
      <div className="absolute w-full top-[30%] text-center text-white z-10">
        <div className="waviy text-pink-100">
          <span style={customStyle}>L</span>
          <span style={customStyle}>E</span>
          <span style={customStyle}> </span>
          <span style={customStyle}>T</span>
          <span style={customStyle}>H</span>
          <span style={customStyle}>A</span>
          <span style={customStyle}>N</span>
          <span style={customStyle}>H</span>
          <span style={customStyle}> </span>
          <span style={customStyle}>H</span>
          <span style={customStyle}>A</span>
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
