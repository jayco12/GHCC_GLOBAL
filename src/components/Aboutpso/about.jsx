import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ps from '../../assets/img/pso/ps3.jpg';
export const Aboutpso = () => {

    return (
        <section className="aboutpso" id="about">
            <Container>
                <Row className="align-items-center">
                    <h1 class='titlepso'>PASTOR SEGUN ODUYEBO
                    </h1>
                    <br />
                    < br />
                    <br />
                    < br />
                    <Col size={12} md={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                    <h6>Apostle Emmanuel Iren is the Lead Pastor and Founder of Celebration Church International, where he lives out his ultimate passion of helping people discover and walk boldly in purpose. Under his leadership, Celebration Church has planted 13 campuses in Nigeria, 2 in North America and 4 in the United Kingdom. His achievements within Celebration Church International include but are not limited to:
                                        <br />
                                        <br />
                                    </h6>
                                    <p>
                                        <ul>
                                            <li>Developed and implemented the church organizational structure, ensuring effective and seamless operations. s</li>
                                            <li>He has successfully trained and discipled 47 resident and associate pastors who are now replicating his results by simply following his established structure.</li>
                                            <li>He has led a vibrant and efficient volunteer workforce in the purpose of achieving the set goals of the organization.
                                            </li>
                                            <li>He has developed a compendium of valuable resources to be used in the training and development of both pastors and congregants.

                                            </li>

                                        </ul>
                                    </p>

                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                    <div class="image-stack">
                                        <div class="image-stack__item image-stack__item--top">
                                            <img src={ps} alt="" className="ps" />      </div>
                                        <div class="image-stack__item image-stack__item--bottom">
                                        </div>
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
export default Aboutpso;