import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>hello, Ishika.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see for road trip</p>
            <img src={assets.compass_icon}></img>
          </div>
          <div className="card">
            <p>Brefily summarizwe this concept: urban planning</p>
            <img src={assets.bulb_icon}></img>
          </div>
          <div className="card">
            <p>Brainstometeambonding activities for our work</p>
            <img src={assets.message_icon}></img>
          </div>
          <div className="card">
            <p>Imporve the reading of code</p>
            <img src={assets.code_icon}></img>
          </div>
        </div>

        <div className="main-bottom">
          <div className="serach-box">
            <input type="text" placeholder="Enter a prompt here"></input>
            <div>
              <img src={assets.gallery_icon}></img>
              <img src={assets.mic_icon}></img>
              <img src={assets.send_icon}></img>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display ,info including about people,so souble-vhevk its
            response.Your privacy and gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
