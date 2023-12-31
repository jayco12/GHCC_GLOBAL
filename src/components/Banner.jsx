import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from "react-router-dom";
import videoSource from '../assets/vid/pso.mp4';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Helping men find fulfilment in life through Christ",
    "Reaching, Raising, equipping men in their walk with God and work for God"
  ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const navigate = useNavigate();

  return (
    <section className="banner" id="home">
      <Container fluid>
        <div id="background-video">
          <video autoPlay muted loop>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-content">
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`${
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      } text-container`}
                    >
                      <h3>
                        <span>What we envision</span>
                      </h3>
                      <br />
                      <br />
                      <span className="tagline">
                        GREAT HOUSE CHRISTIAN CENTRE
                      </span>
                      <h1>
                        <span
                          className="txt-rotate"
                          dataPeriod="500"
                          data-rotate='[ "Helping men find fulfilment in life through Christ", "  Reaching, Raising, equipping men in their walk with God and work for God" ]'
                        >
                          <span className="wrap">{text}</span>
                        </span>
                      </h1>
                      <div className="about">
                        <button onClick={() => navigate("/wwa")}>
                          Who we are
                        </button>
                        <HashLink to="#connect">
                          <button>Latest Sermon</button>
                        </HashLink>
                      </div>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`${
                        isVisible ? "animate__animated animate__zoomIn" : ""
                      }`}
                    >
                      {/* <img src={headerImg} alt="Header Img" /> */}
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};
