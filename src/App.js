import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurServices from "./components/OurService/OurServices";
import Portfolio from "./components/Portfolio/Portfolio";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login/Login";
import Dashboard from "./components/Login/Dashboard";
import Register from "./components/Login/Register";
// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("token");
//   if (isLoggedIn) {
//     return <>{children}</>;
//   } else {
//     return <Navigate to="/" />;
//   }
// };
const App = () => {
  const HomePage = () => {
    return (
      <div>
        <Header />
        <OurServices />
        <AboutUs />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      {/* <Router>
      <Routes>
        <Route path="/welcome" element={<ComingSoon/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/services" element={<HomePage/>} />
        <Route path="/about" element={<HomePage/>} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/footer" element={<HomePage/>} />
      </Routes>
      </Router>      */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/welcome" element={<ComingSoon />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/footer" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
