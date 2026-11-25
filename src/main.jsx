import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import { ApiDataProvider } from "./context/ApiDataContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ApiDataProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApiDataProvider>
  </LanguageProvider>
);
