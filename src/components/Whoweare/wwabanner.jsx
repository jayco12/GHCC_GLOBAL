import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const WWabanner = () => {
 

  return (
    <section className="wwabanner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                   "animate__animated animate__fadeIn"
                    : ""
                    }>
                  
                  <h1> ABOUT GREAT HOUSE CHRISTIAN CENTRE</h1>
                
                </div>
                }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                   isVisible ?
                   "animate__animated animate__zoomIn" 
                   :""
                   }>
                  {/* <img src={headerImg} alt="Header Img" /> */}
                </div>
                }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}