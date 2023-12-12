import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import dance from '../assets/img/dance.jpeg';
import dance1 from '../assets/img/dance1.jpg';
import dance2 from '../assets/img/dance2.jpg';
import dance3 from '../assets/img/dance3.jpg';

// import {
//     BrowserRouter as Router
// } from "react-router-dom";
export const Ministries = () => {


    return (
        <section className="minsitries" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                       <h1><span>We redeploy a people with joy</span>
                                    </h1>
                                    <br />
                                    <h5>

                                        ““Convinced of this, I know I shall abide and continue with you all for your progress and joy in the faith.””
                                        <br/>
                                        <br/>
                                        With loud shrieks, unclean spirits came out of many who were possessed, and many of the paralyzed and lame were healed. So there was great joy in that city.
                                    </h5>
                                    <div className="link">
                                        <HashLink to='#about'>
                                            <button>Our Arms</button>
                                        </HashLink>

                                    </div>
                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} lg={6} md={12} sm={12}><div >
                                       
                                    </div>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeInDown"
                                        : ""
                                }>
                                    <Col>
                                  <Col>
                                        <img src={dance} alt=""className="minb1"/>
                                        <img src={dance1} alt=""className="mina1"/>
                                        </Col>
                                        <br/>
                                        <Col>
                                  
                                        <img src={dance3} alt=""className="minb2"/>
                                        <img src={dance2} alt=""className="mina2"/>
                                        </Col>
                                        </Col>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}