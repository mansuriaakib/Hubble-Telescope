import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./home/homepage";
import AboutPage from "./about/aboutpage";
import GalleryPage from "./gallery/gallerypage";
import ContactPage from "./contact/contactpage";
import HeaderPage from "./header/headerpage";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about/:id?" element={<AboutPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
