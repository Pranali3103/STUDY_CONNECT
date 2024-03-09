import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/study.png";
import greenDot from "../../assests/greendot.png"; // Add the path to your green dot image
import "./styles.module.css";

const HeroSection = () => {
  const onlineUsers = 5; // Replace with the actual number of online users

  const handleButtonClick = () => {
    window.location.href = "https://zoom.us/"; // Replace with the desired URL
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat !
              </p>
              <div className="hero__actions">
                <div className="hero__action">
                  <button className="btn" onClick={handleButtonClick}>
                    Join Online
                  </button>
                </div>
                <div className="hero__action">
                  <div className="online-users">
                  <img
                      src={greenDot}
                      alt="Online Dot"
                      style={{ width: "10px", height: "10px" }}
                    />
                    <span>{onlineUsers} Online</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img"  style={{ width: "400px", height: "400px"}}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
