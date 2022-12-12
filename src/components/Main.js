import React from "react";
import icon from "../images/4.png";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <h2>What we do?</h2>
          <div className="services">
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>Text Text Text Text Text Text Text Text Text Text Text Text</div>
              <a href="#">Learn More</a>
            </div>
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>
                Text Text Text Text Text Text TextText Text TextT ext Text
              </div>
              <a href="#">Learn More</a>
            </div>
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>
                Text Text Text Text Text Text TextText Text TextT ext Text
              </div>
              <a href="#">Learn More</a>
            </div>
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>
                Text Text Text Text Text Text TextText Text TextT ext Text
              </div>
              <a href="#">Learn More</a>
            </div>
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>
                Text Text Text Text Text Text TextText Text TextT ext Text
              </div>
              <a href="#">Learn More</a>
            </div>
            <div className="services__card">
              <img src={icon} alt="pic" />
              <h4>Marketing and CEO Agency</h4>
              <div>
                Text Text Text Text Text Text TextText Text TextT ext Text
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
