import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { useEffect } from 'react';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "./ComingSoon.css"
import images from '../../constants/images';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ComingSoon = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(parseInt(localStorage.getItem('count') || 5*60 * 1000, 10));

  useEffect(() => {
    localStorage.setItem('count', count);
    // Update count every second
        const intervalId = setInterval(() => {
          setCount((prevCount) => Math.max(prevCount - 1000, 0));
        }, 1000);
    if (count <=0)
    {
      navigate("/home");
      localStorage.setItem('count', 300000);
     // localStorage.removeItem('count');
    }
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null)
    {
      localStorage.removeItem('count');
    }
    return () => {
      clearInterval(intervalId);
      localStorage.removeItem('count');
    };
  }, [count,navigate]);

  return (
    <section className="container__coming" style = {{
      background: `url(${images.coming_bg}) center/cover no-repeat`
  }} >
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() +  count}
          labels={["MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button__coming">Notify Me</button>
      </div>
    </section>
  );
}

export default ComingSoon;

