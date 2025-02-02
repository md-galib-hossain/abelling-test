"use client";
import { useEffect, useState } from "react";

import Facebook from "../../../../assets/icons/facebook.png";
import LinkedIn from "../../../../assets/icons/linkedin.png";
import Youtube from "../../../../assets/icons/youtube.png";
import FooterLogo from "../../../../assets/images/footer-logo.svg";

import { CONTACTS } from "@/Utilities/APIs";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";
import { getData } from "@/app/page";

function Footer({contacts}) {
  // const [contacts, setContacts] = useState([]);
  // useEffect(() => {
  //   async function getContacts() {
  //     // const { data } = await axios.get(CONTACTS);
  //     const {  homepage } = await getData();

  //     setContacts(homepage?.contacts[0]);
  //   }
  //   getContacts();
  // }, []);

  return (
    <footer className="py-100" style={{ transform: "translateY(51px)" }}>
      <div className="container footer_container">
        <div className="footer_content">
          <div className="footer_logo_wrapper">
            <div className="footer_logo">
              <Image
                src={FooterLogo}
                alt="f-logo"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="social d-none d-md-block">
              <a
                href={`${contacts?.facebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a
                href={`${contacts?.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href={`${contacts?.youtube}`} target="_blank" rel="noreferrer">
                <Image src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
          <div className="about_info">
            <div className="block_box">
              <h2>About</h2>
              <Link href="/about-us">Our Story</Link>
              <Link href="/about-us">Team</Link>
            </div>
          </div>
          <div className="usa_info">
            <div className="block_box">
              <h2>usa</h2>
              <p>+17472772767</p>
              <p>us@abelling.com</p>
              <p>San Francisco, CA, USA</p>
            </div>
          </div>
          <div className="bd_info">
            <div className="block_box">
              <h2>bangladesh</h2>
              <p>{contacts?.phone}</p>
              <p>{contacts?.email}</p>
              <p>Mirpur DOHS, Dhaka-1216</p>
            </div>
          </div>
          <div className="pt-100 social_wrapper">
            <div className="social_terms">
              <div className="social">
                <a
                  href={`${contacts?.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={Facebook} alt="Facebook" />
                </a>
                <a
                  href={`${contacts?.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={LinkedIn} alt="LinkedIn" />
                </a>
                <a
                  href={`${contacts?.youtube}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={Youtube} alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="created_by">
        Made with ❤ by{" "}
        <a href="https://theantopolis.com/" className="developer">
          Antopolis
        </a>
      </p>
    </footer>
  );
}

export default Footer;
