import { useEffect, useState, useRef } from "react";
import groom from "../../../assets/01.jpg";
import fb from "../../../assets/fb.png";
import ig from "../../../assets/ig.png";
import heart from "../../../assets/big_heart.png";
import "./style.css";

const CoupleOR = () => {
  const couple = [
    {
      name: "Nguyen Xuan Chien",
      img: groom,
      local: "Một chàng trai sinh ra và lớn lên tại Chí Linh, Hải Dương",
      intro: "Là một chàng IT chăm chỉ hiền lành và yêu thương cô gái đó",
      linkFb: "https://www.w3schools.com/js/default.asp",
      linkIg: "https://www.w3schools.com/js/default.asp",
    },
    {
      name: "Le Thanh Hai",
      img: groom,
      local: "Một chàng trai sinh ra và lớn lên tại Chí Linh, Hải Dương",
      intro: "Là một chàng IT chăm chỉ hiền lành và yêu thương cô gái đó",
      linkFb: "https://www.w3schools.com/js/default.asp",
      linkIg: "https://www.w3schools.com/js/default.asp",
    },
  ];
  return (
    <>
      <div className="m-auto text-center relative">
        <h2 className="text-5xl">Cô dâu & Chú rể</h2>
        <p className="text-slate-400">
          Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần
          thiết cho chính bạn
        </p>
        <div
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            WebkitTransform: "translate(-50%, -50%)",
          }}
        >
          <img
            className="w-[100px] h-[100px] animate-heart"
            src={heart}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <div className="flex">
            {couple.map((item) => {
              return (
                <div>
                  <div className="flex justify-center">
                    <div className="w-[250px] h-[250px] rounded-full">
                      <img
                        className="w-[250px] h-[250px] rounded-full border-4 border-pink-500 p-[5px]"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.local}</p>
                  <p>{item.intro}</p>
                  <div className="flex justify-center">
                    <a href={item.linkFb} target="_blank">
                      <img className="w-[30px]" src={fb} alt="" />
                    </a>
                    <a href={item.linkIg} target="_blank">
                      <img className="w-[30px]" src={ig} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoupleOR;
