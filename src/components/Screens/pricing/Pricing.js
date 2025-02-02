"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGE_URL, PRICINGS_API } from "../../../Utilities/APIs";
import WcaCard from "../../Partials/Layouts/cards/WcaCard";
// import Hero from '../../Partials/Layouts/hero/Hero';
import "../../Partials/Layouts/title-desc/title-desc.css";
// import ContactUs from '../../Partials/Sections/contact-us/ContactUs';
import LoadingJson from "./PricingLottie.json";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../../Partials/Layouts/hero/Hero"), {
  ssr: false,
});

const ContactUs = dynamic(
  () => import("../../Partials/Sections/contact-us/ContactUs"),
  {
    ssr: false,
  }
);

function Pricing() {
  const WcaData = [
    {
      id: 1,
      Icon: require("../../../assets/images/wca-1.png"),
      Title: "Complexity",
      desc: "From experience we have a rough idea how much time standard operations usually take, and our standard pricing is estimated based on that. However, we will evaluate your individual project tasks and specifications before giving the final quote.",
    },
    {
      id: 2,
      Icon: require("../../../assets/images/wca-2.png"),
      Title: "Specialization ",
      desc: "Certain projects may need annotators to be subject-matter experts (e.g. Doctors / medical students for biomedical datasets, or linguistic experts for NLP data sets, etc.)We source such annotators whenever needed; however, the cost of such resources obviously is a little higher than that of our standard labellers.",
    },
    {
      id: 3,
      Icon: require("../../../assets/images/wca-3.png"),
      Title: "Quality Specs",
      desc: "We source such annotators whenever needed; however, the cost of such resources obviously is a little higher than that of our standard labellers.However, certain projects can require double or even triple checks per label – often by specialized teams and / or unique individuals.",
    },
    {
      id: 4,
      Icon: require("../../../assets/images/wca-4.png"),
      Title: "Urgency",
      desc: "If you have super-tight deadlines, we can deploy additional resources to get the tasks completed on-time in-full. While it costs a little-extra, we’ve found that many of our clients who’re on the clock appreciate this option.",
    },
  ];

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function getPricings() {
      const { data } = await axios.get(PRICINGS_API);
      setPrices(data);
    }
    getPricings();
  }, []);

  return (
    <>
      <Hero
        title="at less than $5/hour"
        text="So you can focus on building great models – Leave the grind of annotation to us!"
        imgSrc={LoadingJson}
      />
      <div className="">
        <section className="head_desc">
          <div className="container">
            <h2 className="sc_title">
              <span className="text_gradient">Let us know what you need</span>
            </h2>
            <p className="text">
              Every project is unique. Our standard pricing can give you a
              ball-park estimate of what your project might cost; however,
              project-specific nuances may cause the complexity or the time
              needed to execute standard operations to vary – thus affecting
              your final cost.We work with our clients before each project to
              assess their specific needs before providing a final quote.
            </p>
          </div>
        </section>
      </div>

      <section className="standard_pricing pt-100 pb-140" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sc_hd_box">
                <h6 className="sc_sub_title">pricing</h6>
                <h1 className="sc_title">Our Standard Pricing</h1>
                <p className="text">
                  We approach pricing in one of two ways. The approach
                  best-suited for you will depend on your project’s nature:
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="grid_container">
                {prices.map((data, index) => (
                  <div className="sp_tab_box gird_item" key={index}>
                    <h2 className="title">
                      {/* <Image
												src={IMAGE_URL + data.image}
												alt="icon"
												width="0"
												height="0"
												sizes="100vw"
												style={{
													width: 'auto',
													height: '61px',
												}}/> */}
                      <Image
                        src={IMAGE_URL + data.image}
                        alt="icon"
                        width={300}
                        height={61}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    
                      <span>{data.name}</span>
                    </h2>

                    <div className="con_text rich_upload">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.description,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price_factors pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="sc_hd_box">
                <h6 className="sc_sub_title">Price Factors</h6>
                <h1 className="sc_title">
                  Factors which may cause your pricing to vary
                </h1>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="factors_cards">
                {WcaData.map((data, index) => (
                  <WcaCard wcadata={data} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
}

export default Pricing;

// 'use client';

// import dynamic from 'next/dynamic';
// import axios from 'axios';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { IMAGE_URL, PRICINGS_API } from '../../../Utilities/APIs';
// import WcaCard from '../../Partials/Layouts/cards/WcaCard';
// import styles from './pricing.css';

// const Hero = dynamic(() => import('../../Partials/Layouts/hero/Hero'), {
//   ssr: false,
// });

// const ContactUs = dynamic(() => import('../../Partials/Sections/contact-us/ContactUs'), {
//   ssr: false,
// });

// function Pricing() {
//   const WcaData = [
//     {
//       id: 1,
//       Icon: require('../../../assets/images/wca-1.png'),
//       Title: 'Complexity',
//       desc: 'From experience we have a rough idea how much time standard operations usually take, and our standard pricing is estimated based on that. However, we will evaluate your individual project tasks and specifications before giving the final quote.',
//     },
//     {
//       id: 2,
//       Icon: require('../../../assets/images/wca-2.png'),
//       Title: 'Specialization',
//       desc: 'Certain projects may need annotators to be subject-matter experts (e.g. Doctors / medical students for biomedical datasets, or linguistic experts for NLP data sets, etc.)We source such annotators whenever needed; however, the cost of such resources obviously is a little higher than that of our standard labellers.',
//     },
//     {
//       id: 3,
//       Icon: require('../../../assets/images/wca-3.png'),
//       Title: 'Quality Specs',
//       desc: 'We source such annotators whenever needed; however, the cost of such resources obviously is a little higher than that of our standard labellers.However, certain projects can require double or even triple checks per label – often by specialized teams and / or unique individuals.',
//     },
//     {
//       id: 4,
//       Icon: require('../../../assets/images/wca-4.png'),
//       Title: 'Urgency',
//       desc: 'If you have super-tight deadlines, we can deploy additional resources to get the tasks completed on-time in-full. While it costs a little-extra, we’ve found that many of our clients who’re on the clock appreciate this option.',
//     },
//   ];

//   const [prices, setPrices] = useState([]);

//   useEffect(() => {
//     async function getPricings() {
//       try {
//         const { data } = await axios.get(PRICINGS_API);
//         setPrices(data);
//       } catch (error) {
//         console.error('Failed to fetch pricing data:', error);
//       }
//     }
//     getPricings();
//   }, []);

//   return (
//     <>
//       <Hero
//         title="at less than $5/hour"
//         text="So you can focus on building great models – Leave the grind of annotation to us!"
//         imgSrc="/path-to-loading-json-image"
//       />
//       <section className={styles.headDesc}>
//         <div className="container">
//           <h2 className="sc_title">
//             <span className="text_gradient">Let us know what you need</span>
//           </h2>
//           <p className="text">
//             Every project is unique. Our standard pricing can give you a ball-park estimate of what your project
//             might cost; however, project-specific nuances may cause the complexity or the time needed to execute
//             standard operations to vary – thus affecting your final cost. We work with our clients before each
//             project to assess their specific needs before providing a final quote.
//           </p>
//         </div>
//       </section>

//       <section className={`${styles.standardPricing} pt-100 pb-140`} id="pricing">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="sc_hd_box">
//                 <h6 className="sc_sub_title">pricing</h6>
//                 <h1 className="sc_title">Our Standard Pricing</h1>
//                 <p className="text">
//                   We approach pricing in one of two ways. The approach best-suited for you will depend on your project’s
//                   nature:
//                 </p>
//               </div>
//             </div>
//             <div className="col-12">
//               <div className={styles.gridContainer}>
//                 {prices.map((data, index) => (
//                   <div className={styles.spTabBox} key={index}>
//                     <h2 className={styles.title}>
//                       <Image
//                         src={`${IMAGE_URL}${data.image}`}
//                         alt="icon"
//                         width={100}
//                         height={61}
//                         sizes="100vw"
//                       />
//                       <span>{data.name}</span>
//                     </h2>
//                     <div
//                       className={styles.conText}
//                       dangerouslySetInnerHTML={{ __html: data.description }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="price_factors pb-140">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-4">
//               <div className="sc_hd_box">
//                 <h6 className="sc_sub_title">Price Factors</h6>
//                 <h1 className="sc_title">Factors which may cause your pricing to vary</h1>
//               </div>
//             </div>
//             <div className="col-12 col-md-8">
//               <div className={styles.factorsCards}>
//                 {WcaData.map((data, index) => (
//                   <WcaCard wcadata={data} key={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ContactUs />
//     </>
//   );
// }

// export default Pricing;
