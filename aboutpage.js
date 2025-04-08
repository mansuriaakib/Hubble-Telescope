import FooterPage from "../footer/footerpage";
import HeaderPage from "../header/headerpage";
import "./aboutpage.css";
import aboutimg1 from "../assets/big_img.jpg";
import aboutimg2 from "../assets/contactimage.jpeg";
import aboutimg4 from "../assets/obsv.jpg";
import aboutimg5 from "../assets/aboutimage5.jpeg";
import aboutimg6 from "../assets/aboutimage6.jpeg";
import aboutimg7 from "../assets/aboutimage7.jpeg";
import { FiLayers } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Show the scroll-to-top button when scrolling beyond a certain threshold
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { id } = useParams();
  useEffect(() => {
    if (id == 2) {
      const element = document.getElementById("commercial");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (id == 3) {
      const element = document.getElementById("artemis");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (id == 4) {
      const element = document.getElementById("thehubblespace");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (id == 5) {
      const element = document.getElementById("about_last_content");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <HeaderPage />
      <div
        className="scroll-to-top"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={scrollToTop}
      >
        &#8593;
      </div>
      <div className="about">
        <section id="top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 aboutimg1">
                <img src={aboutimg1} />
              </div>
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-lg-6 col-12 about_p">
                    <p>
                      Hubble’s capabilities have grown immensely in its over 30
                      years of operation. This is because new, cutting-edge
                      scientific instruments have been added to the telescope
                      over the course of five astronaut servicing missions. By
                      replacing and upgrading aging parts, these servicing
                      missions have greatly extended the telescope’s lifetime.
                    </p>
                    <p>
                      Telescopes have a particular range of light that they can
                      detect. Hubble’s domain extends from the ultraviolet
                      through the visible (which our eyes see) and into the
                      near-infrared. This range has allowed Hubble to deliver
                      stunning images of stars, galaxies, and other astronomical
                      objects that have inspired people around the world and
                      changed our understanding of the universe.
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 aboutimg2">
                    <img src={aboutimg2} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="about_details">
                      <span>
                        1.<p>The Hubble Story</p>
                      </span>
                      <ul>
                        <li>
                          Since the dawn of civilization, humans have been
                          limited in their understanding of the universe by
                          their vision and imagination.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="about_details">
                      <span>
                        2.<p>Hubble History Timeline</p>
                      </span>
                      <ul>
                        <li>
                          First conceived in the 1940s and initially called the
                          Large Space Telescope, the Hubble Space Telescope took
                          decades of planning and research before it launched on
                          April 24, 1990.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="about_details">
                      <span>
                        3.<p>Hubble Facts</p>
                      </span>
                      <ul>
                        <li>
                          Do you know how much data Hubble sends to Earth? Can
                          you guess the size of its mirror? Get the facts and
                          figures behind the Hubble Space Telescope.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="commercial">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img src={aboutimg5} />
              </div>
              <div className="col-lg-6 col-12">
                <div className="commercial_details">
                  <h1>Commercial Crew Program</h1>
                  <p>
                    NASA's Commercial Crew Program has worked with several
                    American aerospace industry companies to facilitate the
                    development of U.S. human spaceflight systems since 2010.
                    The goal is to have safe, reliable and cost-effective access
                    to and from the International Space Station and foster
                    commercial access to other potential low-Earth orbit
                    destinations.
                  </p>
                  <p>
                    NASA selected Boeing and SpaceX in September 2014 to
                    transport crew to the International Space Station from the
                    United States. These integrated spacecraft, rockets and
                    associated systems will carry up to four astronauts on NASA
                    missions, maintaining a space station crew of seven to
                    maximize time dedicated to scientific research on the
                    orbiting laboratory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artemis">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="artemis_details">
                  <h1>Artemis</h1>
                  <p>
                    Artemis I is the first in a series of increasingly complex
                    missions that will enable human exploration to the Moon and
                    Mars.
                  </p>
                  <p>
                    Previous cameras in lunar orbit were designed to acquire
                    images of sunlit surfaces. Developed by Malin Space Science
                    Systems and Arizona State University, ShadowCam’s primary
                    function is to collect images within permanently shadowed
                    regions near the lunar poles. These areas never receive
                    direct sunlight and are thought to contain water ice – a
                    significant resource for exploration that can be used as
                    fuel or oxygen and for other habitation applications.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <img src={aboutimg6} />
              </div>
            </div>
          </div>
        </section>

        <section id="thehubblespace">
          <div className="container_fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img src={aboutimg7} />
              </div>
              <div className="col-lg-6 col-12">
                <div className="thehubblespace_details">
                  <h1>The Hubble Space Telescope Explore</h1>
                  <p>
                    The Hubble Space Telescope is a large telescope in space. It
                    was launched into orbit by space shuttle Discovery on April
                    24, 1990. Hubble orbits about 535 kilometers (332 miles)
                    above Earth. It is the length of a large school bus and
                    weighs as much as two adult elephants. Hubble travels about
                    5 miles per second: That is like traveling from the eastern
                    coast of the United States to the western coast in 10
                    minutes. Hubble is solar-powered.
                  </p>
                  <p>
                    Hubble takes sharp pictures of objects in the sky such as
                    planets, stars and galaxies. Hubble has made more than one
                    million observations. These include detailed pictures of the
                    birth and death of stars, galaxies billions of light years
                    away, and comet pieces crashing into Jupiter's atmosphere.
                    Scientists have learned a lot about the universe from these
                    pictures. Many of them are beautiful to look at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="middle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 know_heading">
                <h1>know us better</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    The length of Hubble
                    <h2>13.3 meters (43.5 feet) long</h2>
                  </p>
                  <i>
                    <iconify-icon icon="fluent:arrow-fit-16-regular"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    Hubble celestial targets
                    <h2>38,000</h2>
                  </p>
                  <i>
                    <iconify-icon icon="fe:target"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    Hubble mission began
                    <h2>Year 1990</h2>
                  </p>
                  <i>
                    <iconify-icon icon="octicon:rocket-24"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    Hubble data per month
                    <h2>844 gigabytes</h2>
                  </p>
                  <i>
                    <iconify-icon icon="bxs:data"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    Power
                    <h2>2,800 watts</h2>
                  </p>
                  <i>
                    <iconify-icon icon="streamline:image-flash-1-flash-power-connect-charge-electricity-lightning"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="card">
                <div className="about_boxes">
                  <p>
                    Diameter
                    <h2>2.4 m (7 ft 10 in)[6]</h2>
                  </p>
                  <i>
                    <iconify-icon icon="iconoir:diameter"></iconify-icon>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about_content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="aboutimage3">
                  <div className="col-lg-6 col-12">
                    <h1>
                      A Look at the Numbers as NASA's Hubble Space Telescope
                    </h1>
                    <p>
                      On April 24, 1990, the space shuttle Discovery lifted off
                      from Earth with the Hubble Space Telescope nestled
                      securely in its bay. The following day, Hubble was
                      released into space, ready to peer into the vast unknown
                      of space.
                    </p>
                    <a href="/contact">
                      <button>Contact Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about_last_content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="about_last_section">
                  <h1>The Hubble Observatory</h1>
                  <p>
                    The Hubble Space Telescope was the first astronomical
                    observatory to be placed into orbit around Earth with the
                    ability to record images in wavelengths of light spanning
                    from ultraviolet to near-infrared. Launched on April 24,
                    1990, aboard the space shuttle Discovery, Hubble is located
                    about 340 miles (547 km) above Earth’s surface, where it
                    completes 15 orbits per day — approximately one every 95
                    minutes. The satellite moves at the speed of about five
                    miles (8 km) per second, fast enough to travel across the
                    United States in about 10 minutes.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="about_last_image">
                  <img src={aboutimg4} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterPage />
    </>
  );
}

export default AboutPage;
