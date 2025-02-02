import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Lottie from "react-lottie";
import { SLIDERS_API } from "../../../../Utilities/APIs";

import axios from "axios";
import "swiper/css";
import "./hero-slide.css";

// import AboutLottie from "../../about-us/AboutLottie.json";
// import PricingLottie from "../../pricing/PricingLottie.json";
// import OutsourcingLottie from "./ReliablyOutsourceLotti-05.json";

import AboutLottie from "./../../../../../public/AboutLottie.json";
import PricingLottie from "./../../../../../public/PricingLottie.json";
import OutsourcingLottie from "./../../../../../public/ReliablyOutsourceLotti-05.json";
import Head from "next/head";

function HeroSlide({sliders}) {
  const loadingOptions = [
    {
      loop: true,
      autoplay: true,
      animationData: OutsourcingLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: PricingLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: AboutLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  ];

  // const [sliders, setSliders] = useState([]);

  // useEffect(() => {
  //   async function getSliders() {
  //     const { data } = await axios.get(SLIDERS_API);
  //     setSliders(data);
  //   }
  //   getSliders();
  // }, []);


  return (
    <>
     <Head>
        <title>Abelling - Innovative Solutions for Your Needs</title>
        <meta
          name="description"
          content="Welcome to Abelling, where we provide cutting-edge solutions for your business needs. Discover our services, case studies, blogs, and more!"
        />
      </Head>
      <section className="hero_section">
        <Swiper
          rewind={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="hero_slider"
        >
          {sliders
            .sort((a, b) => (a.precedence > b.precedence ? 1 : -1))
            .map((data, index) => (
              <SwiperSlide key={index}>
                <div className="container">
                  <div className="row grid_container">
                    <div className="col-12 col-lg-6 align-self-center col-item grid_item">
                      <div className="content">
                        <h1 className="sc_title hero">
                          <span className="text_gradient">
                            {data.colorTitle}
                          </span>
                          <br />
                          {data.name}
                        </h1>
                        <p className="hero_text tmb">{data.description}</p>
                        <a href={data.link} className="button hero_btn border">
                          Explore
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-item align-self-center">
                      <div className="anim">
                        <Lottie options={loadingOptions[index]} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
}

export default HeroSlide;
