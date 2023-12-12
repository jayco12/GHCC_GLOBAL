import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import drd from '../assets/img/drd.jpg';
import pso from '../assets/img/PasorSegun.jpg'

// import {
//     BrowserRouter as Router
// } from "react-router-dom";
export const About = () => {


    return (
        <section className="aboutbanner" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} lg={6} md={8} sm={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__bounceInDown"
                                        : ""
                                }>
                                    <div >
                                        <Col>
                                        <img src={pso} alt=""className="ab"/>
                                        <img src={drd} alt=""className="abc"/>
                                        </Col>
                                    </div>
                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} lg={6} md={4} sm={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                    <h1><span>We train a people for Christ</span>
                                    </h1>
                                    <br />
                                    <h5>

                                        “All scripture is given by inspiration of God and is useful for doctrine, for reproof, for correction, and for training in righteousness.”
                                        <br/>
                                        <br/>
                                        The next most important thing after salvation is knowledge. God desires that you grow in your knowledge of what Christ has done, and what you have as a result. Celebration Church is committed to your progress and joy in the faith, and we have a spiritual curriculum to partner with you towards that purpose – to know Christ and to make Him known.
                                    </h5>
                                    <div className="link">
                                        <HashLink to='#about'>
                                            <button>Listen to sermons</button>
                                        </HashLink>

                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}