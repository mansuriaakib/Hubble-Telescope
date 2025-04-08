import "./headerpage.css";
import logo from "../assets/nasalogo.png";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function HeaderPage() {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="offcanvas"
              data-bs-target="#rightOffcanvas"
              aria-controls="rightOffcanvas"
            >
              <iconify-icon icon="ci:hamburger-md"></iconify-icon>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={pathname === "/" ? "active" : ""}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      pathname === "/about" ||
                      pathname === "/about/1" ||
                      pathname === "/about/2" ||
                      pathname === "/about/3" ||
                      pathname === "/about/4" ||
                      pathname === "/about/5"
                        ? "active"
                        : ""
                    }
                    aria-current="page"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={pathname === "/gallery" ? "active" : ""}
                    aria-current="page"
                    href="/gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={pathname === "/contact" ? "active" : ""}
                    aria-current="page"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="rightOffcanvas"
        aria-labelledby="rightOffcanvasLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <iconify-icon icon="iconamoon:close-duotone"></iconify-icon>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <a
                className={pathname === "/" ? "active" : ""}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  pathname === "/about" ||
                  pathname === "/about/1" ||
                  pathname === "/about/2" ||
                  pathname === "/about/3" ||
                  pathname === "/about/4"
                    ? "active"
                    : ""
                }
                aria-current="page"
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className={pathname === "/gallery" ? "active" : ""}
                aria-current="page"
                href="/gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className={pathname === "/contact" ? "active" : ""}
                aria-current="page"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
