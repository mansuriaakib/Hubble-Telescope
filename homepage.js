import FooterPage from "../footer/footerpage";
import HeaderPage from "../header/headerpage";
import "./homepage.css";
import homesectionimg1 from "../assets/mission_1.jpg";
import homesectionimg2 from "../assets/mission_2.jpg";
import homesectionimg3 from "../assets/mission_3.jpg";
import homesectionimg4 from "../assets/homesectionimage4.jpeg";
import mainimage from "../assets/main_banner.jpg";
import imagetwo from "../assets/image_002.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useState } from "react";

function HomePage() {
  const { id } = useState();
  console.log(id);

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
      <div className="home">
        <div className="home-headings">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-12 h-left">
                <div className="heading-c">
                  30 years of Hubble Space Telescope
                </div>
              </div>
              <div className="col-lg-4 col-12 h-right">
                <p>
                  Named in honor of the trailblazing astronomer Edwin Hubble,
                  the Hubble Space Telescope is a large, space-based
                  observatory, which has revolutionized astronomy since its
                  launch and deployment by the space shuttle Discovery in 1990.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-img">
          <img src={mainimage} />
        </div>

        <section id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="h-section">
                  <p>Our Missions</p>
                  <h1>
                    NASA’s Goddard Space Flight Center work together to monitor
                    Hubble
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="hsectionimages-details">
                  <img src={homesectionimg3} />
                  <div className="inner_card">
                    <h4>Hubble Space Telescope</h4>
                    <p>
                      Since its 1990 launch, Hubble has changed our fundamental
                      understanding of the universe.
                    </p>
                    <a href="/about/1">
                      <button>Read More</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="hsectionimages-details">
                  <img src={homesectionimg2} />
                  <div className="inner_card">
                    <h4>Commercial Crew Program</h4>
                    <p>
                      NASA's Commercial Crew Program is a partnership to develop
                      and fly human space transportation systems.
                    </p>
                    <a href="/about/2">
                      <button>Read More</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="hsectionimages-details">
                  <img src={homesectionimg1} />
                  <div className="inner_card">
                    <h4>Artemis</h4>
                    <p>
                      Artemis I is the first in a series of increasingly complex
                      missions that will enable human exploration to the Moon
                      and Mars.
                    </p>
                    <a href="about/3">
                      <button>Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="homedescription">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 d-block d-sm-none">
                <div className="homedetailsdes">
                  <img src={imagetwo} />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="home-details">
                  <h2>
                    The Hubble Space Tele-
                    <br />
                    scope Explore
                  </h2>
                  <p>
                    Indulge your curiosity and dive into the science around
                    Hubble observations. Find out how Hubble uses light to
                    reveal much more information than the human eye alone can
                    see, or turn your own telescope on the night sky and compare
                    your view with Hubble’s. Take your own cosmic tour via
                    galleries and videos featuring some of Hubble’s most
                    striking images, and see how Hubble’s technology has
                    branched out to affect everyday life on Earth.
                  </p>
                  <a href="/about/4">
                    <button>Read More</button>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-12 d-none d-sm-block">
                <div className="homedetailsdes">
                  <img src={imagetwo} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="discovercontent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="discoverimg-details">
                  <img src={homesectionimg4} />
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="discoverimg-details-content">
                  <h2>The Hubble Observatory</h2>
                  <p>
                    The Hubble Space Telescope was the first astronomical
                    observatory to be placed into orbit around Earth with the
                    ability to record images in wavelengths of light spanning
                    from ultraviolet to near-infrared. Launched on April 24,
                    1990, aboard the space shuttle Discovery, Hubble is located
                    about 340 miles (547 km) above Earth’s surface, where it
                    completes 15 orbits per day — approximately one every 95
                    minutes.
                  </p>
                  <a href="/about/5">
                    <button>Discover More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="homeimg-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="imgdes">
                  <span>Get in touch</span>
                  <h1>Your career at Involve Space</h1>
                  <p>
                    Be a part of us on a virtual space adventure Discover the
                    <br />
                    secrets of outer space together.
                  </p>
                  <a href="/contact">
                    <button>Contact Us</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default HomePage;
