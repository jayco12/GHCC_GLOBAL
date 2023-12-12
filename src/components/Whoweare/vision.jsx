import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cong from '../../assets/img/worshipp.jpg';

export const Vision = () => {


    return (
        <section className="vision" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__bounceIn"
                                        : ""
                                }>
                                    <div >
                                        <Col>
                                        <img src={cong} alt=""className="visionimg"/>
                                        </Col>
                                    </div>
                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeInRight"
                                        : ""
                                }>
                                    <div className="visiontext">
                                    <h1><span>Our Vision</span>
                                    </h1>
                                    <br />
                                    <h5>

                                        “All scripture is given by inspiration of God and is useful for doctrine, for reproof, for correction, and for training in righteousness.”
                                        <br/>
                                        <br/>
                                        The next most important thing after salvation is knowledge. God desires that you grow in your knowledge of what Christ has done, and what you have as a result. Celebration Church is committed to your progress and joy in the faith, and we have a spiritual curriculum to partner with you towards that purpose – to know Christ and to make Him known.
                                    </h5>
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