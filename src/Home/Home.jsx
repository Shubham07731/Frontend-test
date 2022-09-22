import React from "react";
import movie from "../images/Landing.svg";
import "./Home.css";
import { MdCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/event");
  };
  return (
    <div className="home-color">
      <div>
        <img src={movie} alt="" />
      </div>
      <div className="body-text">
        <span className="imagine">Imagine If</span>
        <span className="snapchat">Snapchat</span>
        <span className="events">had events.</span>
        <div className="add-class">
          Easily host and share events with your friends across any social media
        </div>
        <div className="btn-sbt">
          <button onClick={handleSubmit}>
            <MdCelebration
              style={{
                Display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",

                fontSize: "20px",
              }}
            />{" "}
            Create my event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
