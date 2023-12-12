import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const WhoWeAre = () => {

    return (
        <section className="whoweare" id="about">
            <Container>
                <Row className="align-items-center">
                <h1 class= 'title'>We Serve God By His Spirit
                                    </h1>
                                    <br/>
                                   < br/>
                                   <br/>
                                   < br/>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                 
                                    <br />
                                    <div >
                                        <h5>

                                            Celebration Church International is a prolific teaching ministry where we envision all men celebrating endless life in Christ Jesus. Celebration Church was established in November 2012, and is led by Apostle Emmanuel Iren, who partners with in the faith. At Celebration Church International, we believe fully in the death, burial, and resurrection of Christ; and in the saving power of the gospel. We are committed to knowing Christ and making Him known. We grow in the knowledge of Christ, and build ourselves up through regular in-depth teaching services, prayer sessions, and evangelistic outreaches.
                                        </h5>
                                    </div>
                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <br/>
                    <br/>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                    <h5>

                                        We are a mission-minded church that believes in spreading the gospel to the uttermost ends of the earth, because we are the hands and feet of Christ on the earth. We believe that the gifts of the Spirit are at work in the life of the believer, so our services are an experience of the uninhibited flow of the Spirit through prayer, prophecies, and
                                        spiritual songs. We believe that the Word of God is the ultimate standard for doctrine. We believe that the Father’s biggest display of affection towards us is in the redemptive work of Christ. We believe that we are blessed because righteousness is credited to us through the grace of our Lord Jesus Christ.

                                    </h5>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default WhoWeAre;