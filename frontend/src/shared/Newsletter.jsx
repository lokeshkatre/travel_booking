import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/couple.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newletter__content">
                            <h2>Subscribe now</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>
                            <h2>To get all the information related Tour</h2>
                            <p>Subscribe to our newsletter and embark on a journey of inspiration, discovery, and adventure.
                                Our tour website's newsletter is your passport to a world of captivating travel stories,
                                exclusive offers, and insider tips that will enhance your travel experiences.
                                By subscribing to our newsletter, you'll gain access to a wealth of valuable content
                                delivered directly to your inbox. Immerse yourself in our expertly curated travel guides,
                                featuring hidden gems, must-visit destinations, and insider recommendations from seasoned travelers.
                                Get inspired by breathtaking photographs and engaging narratives that
                                will ignite your wanderlust and leave you yearning to explore new horizons.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
