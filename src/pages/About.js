import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/1720535937651.jpg"


const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark">
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col">
                <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                    About Page
                </h1>
            </div>
        </div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
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



      <div id="about">
            <div className="container">
                <div className="col">
                    <div className="card shadow mt-5 p-5 mb-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <center><img src={myImage} alt="About Me" /></center>
                            </div>
                            <div className="col-lg-8">
                                <div className="card box shadow mb-3 p-3 bg-dark">
                                    <h4 className="text-white"><span>About Me</span></h4>
                                    <p className="text-white">
                                        Christian B. Gallo, 22 years of age from Brgy Oringao, Kabankalan City, Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Music Instrument.
                                    </p>
                                    <p className="text-white">
                                    But by the grace of God I am what I am: and his grace which was bestowed upon me was not in vain; but I laboured more abundantly than they all: yet not I, but the grace of God which was with me.
                                    </p>
                                </div>
                                <div className="card box shadow p-3 bg-dark">
                                    <h4 className="text-dark"><span>Academic</span></h4>
                                    <p className="text-white">
                                        Primary: Oringao Elementary School S.Y:2014 <br />
                                        Secondary: Junior High: Florentino Galang Sr. National High School S.Y:2017 <br />
                                        Senior High: Florentino Galang Sr. High School S.Y:2020 <br />
                                        Tertiary: Central Philippines State University (CPSU) S.Y:2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;
