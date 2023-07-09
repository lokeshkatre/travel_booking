import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings = {
        dots: true,
        Infinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlid: true,
        autoplaySpeed: 2000,
        slideToShow: 3,

        Responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }

        ]
    }
    return (
        <Slider {...settings}>

            <div className="testimonial py-4 px-3">

                <div className="d-flex align-item-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h4 className="mb-0 mt-3">Abhishek</h4>
                        <h6>Customer</h6>
                        <p>
                        A high-quality tour website should offer a diverse range of tours to cater to different interests 
                        and preferences. Look for a wide selection of destinations,
                         tour types, and durations to ensure you can find something that suits your needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">

                <div className="d-flex align-item-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h4 className="mb-0 mt-3">Rahul Rana</h4>
                        <h6>Customer</h6>
                        <p>
                        A good tour website should have an intuitive and user-friendly interface that makes 
                        it easy to navigate and find the information you need. Look for clear menu structures,
                         well-organized content, and user-friendly search and filtering options.
                        </p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <div className="d-flex align-item-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h4 className="mb-0 mt-3">Pankaj Kumar</h4>
                        <h6>Customer</h6>
                        <p>
                        The website should provide comprehensive and detailed information about each tour,
                         including highlights, itinerary, inclusions, exclusions, pricing, and any additional
                          relevant details. Look for well-written descriptions, images,
                         maps, and customer reviews to help you make informed decisions.
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial;
