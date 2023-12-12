import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cong from '../../assets/img/cong1.jpg';

export const Mission = () => {


    return (
        <section className="mission" id="about">
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
                                    <h1><span>Our Mission</span>
                                    </h1>
                                    <br />
                                    <h5>

                                        To enlist, to disciple, and redeploy a people in Christ, for Christ, with joy.
                                        <br />
                                        <br />
                                    </h5>
                                    <h5>
                                        <ul>
                                            <li>To be an effective evangelical ministry, enlisting people in Christ</li>
                                            <li>To be an effective teaching ministry, raising people in Christ</li>
                                            <li>To emphasize the surpassing delight in Christ above all things</li>
                                            <li>To be an effective mission-minded ministry, redeploying people for Christ
                                            </li>

                                        </ul>
                                    </h5>

                                </div>

                            }
                        </TrackVisibility>
                    </Col>
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
                                            <img src={cong} alt="" className="missionimg" />
                                        </Col>
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