import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import heart from "../../../assets/big_heart.png";
import { playMusic } from "../../../store/playMusic";
import "./style.css";

const InvitationTemplates = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(playMusic());
    navigate("/home");
  };
  return (
    <>
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
        <button onClick={handleClick}>
          <img src={heart} alt="" width={"100px"} />
        </button>
      </div>
      <div
        style={{
          margin: 0,
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          WebkitTransform: "translate(-50%, -50%)",
        }}
        className="css-typing"
      >
        <p>Vui lòng click trái tim để mở thiệp</p>
        <p>Typed text 2 Longer</p>
        <p>Typed text 3</p>
      </div>
    </>
  );
};

export default InvitationTemplates;
