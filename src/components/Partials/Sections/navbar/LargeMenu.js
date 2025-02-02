// "use client"
// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Logo from "../../Elements/Logo/Logo";
// import ChaveronDown from "../../Elements/icons/ChaveronDown";
// import "./large-menu.css";
// import { getData } from '@/app/page';

// function LargeMenu() {
//   //   const {  homepage } = await getData();

//   const [services, setServices] = useState([]);

// //   useEffect(() => {
// //     async function getServices() {
// //       const { data } = await axios.get(SERVICES);
// //       setServices(data);
// //     }
// //     getServices();
// //   }, []);
// useEffect(() => {
//     async function getServices() {
//       const { homepage } = await getData();
//       setServices(homepage?.services);
//     }
//     getServices();
//   }, []);
//   return (
//     <div className="large_menu">
//       <div className="large_menu_wrapper">
//         <div className="logo">
//           <Logo />
//         </div>
//         <div className="menu">
//           <ul>
//             <li>
//               <Link
//                 className="nav_link services"
//                 href="/service"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 services
//                 <ChaveronDown />
//               </Link>
//               <div className="sub_menu">
//                 <div>
//                   {services?.map((data, index) => (
//                     <Link href={`/services/${data._id}`} key={index}>
//                       {data.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </li>
//             <li>
//               <Link className="nav_link" href="/pricing">
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" href="/case-studies">
//                 case-studies
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" href="/blog">
//                 blog
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" href="/security-compliance">
//                 {"security & compliance"}
//               </Link>
//             </li>
//             <li>
//               <Link className="nav_link" href="/about-us">
//                 about us
//               </Link>
//             </li>
//             <li>
//               <Link className="button border" href="/get-quote">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LargeMenu;


"use client";
import Link from "next/link";
import Logo from "../../Elements/Logo/Logo";
import ChaveronDown from "../../Elements/icons/ChaveronDown";
import "./large-menu.css";
import { getData } from "@/app/page";

function LargeMenu({ services }) {
  return (
    <div className="large_menu">
      <div className="large_menu_wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link
                className="nav_link services"
                href="/services"
                onClick={(e) => e.preventDefault()}
              >
                services
                <ChaveronDown />
              </Link>
              <div className="sub_menu">
                <div>
                  {services?.map((data, index) => (
                    <Link href={`/services/${data._id}`} key={index}>
                      {data.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link className="nav_link" href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="nav_link" href="/case-studies">
                case-studies
              </Link>
            </li>
            <li>
              <Link className="nav_link" href="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link className="nav_link" href="/security-compliance">
                {"security & compliance"}
              </Link>
            </li>
            <li>
              <Link className="nav_link" href="/about-us">
                about us
              </Link>
            </li>
            <li>
              <Link className="button border" href="/get-quote">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { homepage } = await getData(); 
  const services = homepage?.services || [];

  return {
    props: {
      services,
    },
  };
}

export default LargeMenu;
