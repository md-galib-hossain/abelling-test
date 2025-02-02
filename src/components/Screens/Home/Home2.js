"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useCallback, Suspense } from "react";
import dynamic from "next/dynamic";
import videoThumb from "../../../assets/images/video-thumb.jpg";
import RightArrow from "../../Partials/Elements/icons/RightArrow";
import BlogCard from "../../Partials/Layouts/cards/BlogCard";
import HeroSlide from "./hero/HeroSlide";
import Head from "next/head";

// const HeroSlide = dynamic(() => import("./hero/HeroSlide"), {
//   ssr: false,
// });

const OurWorks = dynamic(() => import("./our-works/OurWorks"), { ssr: false });
const PlatformsTools = dynamic(
  () => import("./platforms-tools/PlatformsTools"),
  { ssr: false }
);
const Testimonials = dynamic(() => import("./testimonial/Testimonials"), {
  ssr: false,
});
const ContactUs = dynamic(
  () => import("../../Partials/Sections/contact-us/ContactUs"),
  { ssr: false }
);
const WeDo = dynamic(() => import("./what-we-do/WeDo"), { ssr: false });

function Home2({
  blogs,
  caseStudies,
  services,
  testimonials,
  contacts,
  sliders,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [vid, setVid] = useState("");

  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => a.precedence - b.precedence),
    [blogs]
  );
  const sortedCaseStudies = useMemo(
    () => [...caseStudies].sort((a, b) => a.precedence - b.precedence),
    [caseStudies]
  );

  const videoPlay = useCallback(() => {
    setIsOpen(true);
    setVid("Sim3L3G_GWk");
  }, []);

  const videoPause = useCallback(() => {
    setIsOpen(false);
    setVid("");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <>
   <Head>
  <title>Abelling - Innovative Solutions for Your Needs</title>
  <meta
    name="description"
    content="Welcome to Abelling, where we provide cutting-edge solutions for your business needs. Discover our services, case studies, blogs, and more!"
  />
  
</Head>

      {/* <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Loading...
          </div>
        }
      > */}
        <HeroSlide sliders={sliders} />
      {/* </Suspense> */}
      {/* <HeroSlide sliders={sliders} /> */}

      <section className="video_header">
        <div className="container">
          <h1 className="sc_title">
            <span id="click-below">
              click the video below to know what abelling does
            </span>
          </h1>
        </div>
      </section>
      <section className="video position-relative">
        <Image
          src={videoThumb}
          alt="background"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="gradiyent"></div>
        <button type="button" className="btn_play" onClick={videoPlay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
          >
            <path
              d="M38.3335 35.6633C38.3335 34.081 40.084 33.1253 41.415 33.981L59.0498 45.3176C60.2745 46.1049 60.2745 47.8951 59.0498 48.6824L41.415 60.019C40.084 60.8747 38.3335 59.919 38.3335 58.3367V35.6633Z"
              fill="#136AE8"
            />
            <circle
              cx="47"
              cy="47"
              r="46"
              stroke="url(#paint0_linear_604_2478)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_604_2478"
                x1="44.5325"
                y1="94"
                x2="97.3561"
                y2="35.2251"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#136AE8" />
                <stop offset="1" stopColor="#136AE8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#136AE8" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <div
          className={`video_modal ${isOpen ? "show" : ""}`}
          onClick={videoPause}
        >
          <div className="modal_content_wrapper">
            <div className="modal_content">
              <div className="modal-body">
                <iframe
                  src={`https://www.youtube.com/embed/${vid}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WeDo services={services} />
      <OurWorks works={sortedCaseStudies} />
      <Testimonials testimonials={testimonials} />
      <section className="pt-100 pb-140">
        <div className="container">
          <div className="sc_hd_box">
            <h6 className="sc_sub_title">blogs</h6>
            <h1 className="sc_title">Our Recent Blogs</h1>
          </div>
          <div className="blog_cards_wrapper">
            {sortedBlogs.slice(0, 3).map((data, index) => (
              <BlogCard blogData={data} key={index} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="viewall_btn_box">
            <Link href="blog" className="explore">
              view all
              <RightArrow />
            </Link>
          </div>
        </div>
      </section>
      <PlatformsTools />
      <ContactUs contacts={contacts} />
    </>
  );
}

export default Home2;
