import React, { useEffect, useState } from "react";
import data from "../data";
import FooterPage from "../footer/footerpage";
import HeaderPage from "../header/headerpage";
import "./gallerypage.css";

function GalleryPage() {
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
  const [noOfElement, setnoOfElement] = useState(8);
  const loadMore = () => {
    setnoOfElement(noOfElement + 8);
  };

  const slice = data.imgData.slice(0, noOfElement);
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
      <div className="gallery">
        <div className="container-fluid">
          <div className="row">
            {slice.map((item) => {
              return (
                <div className="col-lg-3 col-sm-6 col-12">
                  <a href={item.link}>
                    <img src={item.img} className="gallery-img" />
                  </a>
                </div>
              );
            })}
            {noOfElement < data.imgData.length && (
              <div className="morebtn">
                <button onClick={() => loadMore()}>More Images</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default GalleryPage;
