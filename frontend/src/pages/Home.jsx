import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import tourist from './../assets/images/tourist.jpg'
import experienceImg from "../assets/images/tourists.jpg";
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeatureTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/*===============hero section start================*/}
      <section>
        <Container>
          <Col lg='2' style={{margin:"0px 10vw"}}>
            <SearchBar />
          </Col>
          <Row>
            <Col lg='4' className='mt-7'>
              <div className="hero__img-box">
                <img src={tourist} alt='' />
              </div>
            </Col>
            <Col lg='8'>
              <div className="hero__content">
                <h1>
                  Get your self free to  make and  experience wonderful{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Welcome to our tour booking site, your gateway to unforgettable adventures and
                  experiences around the world! Whether you're a seasoned traveler or a first-time
                  explorer, our platform is designed to provide you with a seamless
                  and exciting booking experience.
                  Discover a vast array of carefully curated tours, designed to cater to every
                  interest and preference. From thrilling outdoor expeditions to cultural immersions, historical journeys,
                  and culinary delights,
                  we offer a diverse selection of tours that showcase the best each destination has to offer.
                  Our user-friendly interface allows you to easily navigate through our extensive
                  collection of tours. Explore destinations spanning the globe, from popular tourist
                  hotspots to off-the-beaten-path gems waiting to be discovered.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section >
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">Our Services</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*==============featured tour section start============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
      {/*==============featured tour section end============*/}
      {/*==============experience section start=============*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content mt-3 mb-5">
                <h1>Experience</h1>
                <h2>We will serve you<br /> with all our experience</h2>
                <p>Embark on a seamless and unforgettable journey with our tour booking site.
                   We have crafted an immersive and user-centric experience to ensure that 
                  your travel planning is as enjoyable as the adventures that await you.
                  From the moment you arrive on our site, you'll be greeted by a visually captivating and intuitive interface.
                   Our clean and modern design makes it easy to navigate through the plethora of tour options available,
                   allowing you to focus on finding the perfect match for your travel aspirations.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular client</h6>
                </div>

                <div className="counter__box">
                  <span>15yr</span>
                  <h6>Years experience</h6>
                </div>
              </div>

            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==============experience section end=============*/}
      {/*=============gallery starts================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className='gallery__subtitle'>Gallery</h1>
              <h2 className='gallery__title'>Tour gallery of our customer</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*=============gallery end================*/}
      {/*==============testimonial start==================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='testimonial__title'>Some customers review</h2>
            </Col>
            <Col>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/*==============testimonial end==================*/}
      {/*==============newsletter start==================*/}
      <Newsletter />
      {/*==============newsletter end==================*/}

    </>
  )
}

export default Home;
