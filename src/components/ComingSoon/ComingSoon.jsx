import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { useEffect } from 'react';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "./ComingSoon.css"
import images from '../../constants/images';
import React from 'react'

const ComingSoon = () => {
  const redirectToHome = () => {
    window.location.href = '/home';
  };

  useEffect(() => {
    setTimeout(redirectToHome, 5 * 60 * 1000);
  }, []);
  return (
    <section className="container__coming" style = {{
      background: `url(${images.coming_bg}) center/cover no-repeat`
  }} >
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() +  5*60*1000}
          labels={["MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button__coming">Notify Me</button>
      </div>
    </section>
  );
}

export default ComingSoon;