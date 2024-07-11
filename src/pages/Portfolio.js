import React, { useEffect, useRef } from 'react';
import './Portfolio.css';
import Navbar from './Navbar';
import calcuImage2 from './img/IMG_20240708_150300_345.jpg';
import jao3Image from './img/Screenshot 2024-07-10 005308.png';
import jao4Image from './img/IMG_20240708_135420_725.jpg';
import jao5Image from './img/1720677961886.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const projects = [
  { img: calcuImage2, title: "Calculator Project" },
  { img: jao3Image, title: "My React Project" },
  { img: jao4Image, title: "Frontend Project" },
  { img: jao5Image, title: "Capstone Project" }
];

const Portfolio = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateLinePosition = () => {
      const img = imgRef.current;
      const text = textRef.current;

      if (img && text) {
        const imgRect = img.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        const startX = imgRect.right - canvasRect.left;
        const startY = imgRect.bottom - canvasRect.top;
        const endX = textRect.left - canvasRect.left;
        const endY = textRect.top - canvasRect.top;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const img = imgRef.current;
    if (img) {
      img.addEventListener('mouseenter', updateLinePosition);
      img.addEventListener('mouseleave', clearCanvas);
    }

    return () => {
      if (img) {
        img.removeEventListener('mouseenter', updateLinePosition);
        img.removeEventListener('mouseleave', clearCanvas);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="portfolio-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                Projects
              </h1>
            </div>
          </div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
          <div className="raindrop"></div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>


      <div id="portfolio">
          <div className="row justify-content-center">
            <div className="col-8">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
              >
                {projects.map((item, index) => (
                  <div className="portfolio-item" data-aos="flip-left" key={index}>
                    <div className="carousel-3d">
                      <h4 className="mt-5">{item.title}</h4>
                      <img src={item.img} alt={item.title} className="carousel-image" />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
      </div>

      <div id="content">
        <canvas ref={canvasRef} width="800" height="600"></canvas>
        <div className="container">
          <div className="row">
            <div className="col-4">
                <img ref={imgRef} className="four" src={calcuImage2} alt="Calculator Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">The project began when our instructor assigned us a specific task, which laid the groundwork
                 for our collaborative effort. With our mentor's guidance, we started the project with clear
                 goals and objectives outlined in the assignment. The instructor's instructions provided a 
                 roadmap, guiding our actions and decisions throughout the project's development. As a team,
                 we took on the challenge, utilizing our skills and expertise to effectively complete the task. 
                 The project's inception can be traced back to the moment our instructor gave us this responsibility,
                 sparking our motivation and drive to achieve a successful outcome.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao3Image} alt="My React Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">This Portfolio assignment is very important since it meets the requirements for compliance 
                and proficiency as stated in our PCIT 15 course's grading guidelines. It is a cornerstone of our academic assessment,
                demonstrating our comprehension and application of course material. In order to achieve our instructor's academic requirements and
                demonstrate our understanding of the course subject, the project must be completed. We have the chance to 
                demonstrate our abilities, expertise, and commitment to attaining academic success through this project. 
                Completing the requirements of our PCIT 15 course and guaranteeing our academic success depend on the effective completion of our Portfolio project.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao4Image} alt="Frontend Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">One of the most important tasks that entails building the user interface and experience for
                 our examination platform is creating a front-end design for our exam. All test takers should have an easy-to-use 
                 and visually appealing experience thanks in large part to this front-end design. Our goal in concentrating on front-end design is to
                 improve test interface usability, accessibility, and user pleasure in general. Our objective is to produce a fluid and
                 user-friendly design that enhances the exam-taking process and maximises user satisfaction. We work hard to create a front-end interface that
                 satisfies the requirements and expectations of our exam participants by paying close attention to detail and applying user-centric design concepts.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao5Image} alt="Capstone Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">This project serves as our capstone endeavor,
                 focusing on the development and implementation of a Cattle Production under the title "RFID CPSU Cattle Production" 
                 The project aims to address the intricacies of Cattle, emphasizing the importance of efficient planning and execution
                  in the Cattle process. By delving into the intricacies of Cattle, we seek to enhance our understanding of 
                  Cattle practices and their impact on overall project success. The Rfid CPSU Cattle Production represents a 
                  culmination of our learning and practical application of Cattle principles, showcasing our ability to strategize
                   and implement effective Cattle strategies. Through this capstone project, we aspire to demonstrate our proficiency 
                   in Cattle and contribute valuable insights to the field.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
