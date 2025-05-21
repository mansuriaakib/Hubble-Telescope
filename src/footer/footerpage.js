import "./footerpage.css";
import footerlogo from "../assets/nasalogo.png";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function FooterPage() {
  return (
    <>
      <section id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="footer_sec_1">
                <a className="footerlogo" href="#">
                  <img src={footerlogo} />
                </a>
                <p>
                  The NASA Communications Office receives thousands of
                  communications each week from all over the world and we
                  endeavor to provide timely information and answers to
                  questions.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer_section">
                <h1>Quick Links</h1>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer_section">
                <h1>Info</h1>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <iconify-icon icon="mingcute:location-line"></iconify-icon>
                      </span>
                      Mary W. Jackson NASA Headquarters 300 E. Street SW, Suite
                      5R30
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <iconify-icon icon="ci:mail"></iconify-icon>
                      </span>
                      nasa@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <iconify-icon icon="solar:phone-outline"></iconify-icon>
                      </span>
                      +1(123)1546-2541
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border_bottom"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="footer_copyright">
                <p>© 2023. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="footer_icons">
                <a href="https://www.facebook.com/NASA/" target="_blank">
                  <FaFacebookF className="icon" />
                </a>
                <a href="https://www.instagram.com/nasa/?hl=en" target="_blank">
                  <FaInstagram className="icon" />
                </a>
                <a
                  href="https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  <BsTwitter className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterPage;
