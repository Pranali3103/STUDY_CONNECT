  import React from 'react';
  import { Container, Row, Col } from 'reactstrap';
  import aboutImg from '../../assests/about-us.png';
  import CountUp from 'react-countup';
  import './about.css';

  const AboutUs = () => {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi cupiditate animi deserunt libero nesciunt corporis
                  explicabo nobis ex quo molestiae!
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Study Sessions</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={200} duration={2} prefix="+" />
                      </span>

                      <p className="counter__title">Countries</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={95} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Study Goals Reached</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  export default AboutUs;
