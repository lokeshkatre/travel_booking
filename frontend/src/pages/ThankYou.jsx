import React from 'react'
import '../styles/thank-you.css'

import {Container, Row, Col,  Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Newsletter from '../shared/Newsletter';

const ThankYou = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='12'className='d-flex align-align-items-center
                justify-content-center pt-5 text-center'>
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h3 className="mb-4">your tour is booked.</h3>

                        <Button className="btn primary__btn "><Link to='/'>Back to Home</Link></Button>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default ThankYou
