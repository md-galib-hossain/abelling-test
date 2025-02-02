import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

function OurWorksOwlCarousel() {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
    
            }
        },
    };
    return (
        <section className="ow_section">
            <div className="container">
                <h6 className="sc_sub_title">use cases</h6>
                <h1 className="sc_title">What we do</h1>
            </div>
            <div className="owc_wrpper">
                <OwlCarousel {...options}>
                    <div className="item">
                        <h1>lksdf111</h1>
                    </div>
                    <div className="item">
                        <h1>lksdf222</h1>
                    </div>
                    <div className="item">
                        <h1>lksdf333</h1>
                    </div>
                    <div className="item">
                        <h1>lksdf111</h1>
                    </div>
                    <div className="item">
                        <h1>lksdf222</h1>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default OurWorksOwlCarousel