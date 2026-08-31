import { useNavigate } from "react-router-dom";

const ActionButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Agar onClick function diya gaya hai to pehle usko chalao
    if (props.onClick) {
      props.onClick();
    }

    // Agar link diya gaya hai to navigate karo
    if (props.link) {
      navigate(props.link);
    }
  };

  return (
    <>
      <br />
      <button
        onClick={handleClick}
        style={{
          backgroundColor: props.bgcolor,
          color: props.color,
          width: "100%",
          height: "44px",
          borderRadius: "10px",
          outline: 0,
          cursor: "pointer",
        }}
      >
        {props.title}
      </button>
    </>
  );
};

export default ActionButton;





