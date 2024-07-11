import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/image.png";
import ibisImage from "./img/v226-ning-35-religion-a-job101.jpg";
import vscodeImage from "./img/9187522.png";
import gcbImage from "./img/guitara1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="overlay">
          <div className="container1">
            <div id="home-info">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div className="container mt-5">
                <div className="row ok">
                  <div className="col-lg-6">
                    <img src={myImage} alt="A descriptive alt text for myImage" />
                  </div>
                  <div className="col-lg-6 jao">
                    <div className="card">
                      <h2 className="display-3 text-center text-light pt-5 mb-5">
                        Greetings... <br /> I'm Christian B. Gallo
                      </h2>
                      <h4 className="text-light text-center mt-5">
                        When the Time is Right God will do Everything to Make it Happen
                      </h4>
                      <center>
                        <a href="/about" className="btn shadow mt-5">
                          Explore More
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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


      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                <h4 className="text-center title"><b>BIBLE</b></h4>
                <p>
                  It is a collection of books whose complex development is not completely understood.
                  The oldest books began as songs and stories orally transmitted from generation to generation.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                <h4 className="text-center title"><b>MUSIC</b></h4>
                <p>
                  The arrangement of sound to create some combination of form, harmony, melody, rhythm,
                  otherwise expressive content. Generally agreed to be a cultural universal that is present in all human societies.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid pink" }}>
                <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                <h4 className="text-center title"><b>INSTRUMENT</b></h4>
                <p>
                  An instrument is usually a tool for making music, like a piano or a guitar, but it can also
                  be used for almost any kind of tool. Also tool for specific tasks like creating music or scientific measurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
