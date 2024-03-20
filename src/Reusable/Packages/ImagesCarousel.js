const ImagesCarousel = (props) => {
  return (
    <>
      <div className="car col-md-7">
        <div className="container">
          {/* {props.images.map((img, i) => (
            <div className="mySlides">
              <div className="numbertext">
                {i + 1} / {props.images.length}
              </div>
              <img src={`/images/${img}`} className="img-fluid" alt={img} />
            </div>
          ))} */}
          <div className="mySlides">
            <div className="numbertext">1 / 8</div>
            <img src="/images/lms1.png" className="img-fluid" alt="lm1" />
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 8</div>
            <img src="/images/lms2.png" className="img-fluid" alt="lm2" />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 8</div>
            <img src="/images/lms3.png" className="img-fluid" alt="lm3" />
          </div>

          <div className="mySlides">
            <div className="numbertext">4 / 8</div>
            <img src="/images/lms4.png" className="img-fluid" alt="lm4" />
          </div>

          <div className="mySlides">
            <div className="numbertext">5 / 8</div>
            <img src="/images/lms5.png" className="img-fluid" alt="lm5" />
          </div>

          <div className="mySlides">
            <div className="numbertext">6 / 8</div>
            <img src="/images/lms6.png" className="img-fluid" alt="lm6" />
          </div>

          <div className="mySlides">
            <div className="numbertext">7 / 8</div>
            <img src="/images/lms7.png" className="img-fluid" alt="lm7" />
          </div>

          <div className="mySlides">
            <div className="numbertext">8 / 8</div>
            <img src="/images/lms8.png" className="img-fluid" alt="lm8" />
          </div>

          <a className="prev" onclick="plusSlides(-1)" href="#a">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a className="next" onclick="plusSlides(1)" href="#a">
            <i className="fas fa-chevron-right"></i>
          </a>

          <div className="caption-container">
            <p id="caption"></p>
          </div>

          <div className="row thumb">
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms1.png"
                style={{ width: "100%" }}
                onclick="currentSlide(1)"
                alt="LMS Landing Page"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms2.png"
                style={{ width: "100%" }}
                onclick="currentSlide(2)"
                alt="Courses"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms3.png"
                style={{ width: "100%" }}
                onclick="currentSlide(3)"
                alt="Aboutus"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms4.png"
                style={{ width: "100%" }}
                onclick="currentSlide(4)"
                alt="Contact"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms5.png"
                style={{ width: "100%" }}
                onclick="currentSlide(5)"
                alt="Footer"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms6.png"
                style={{ width: "100%" }}
                onclick="currentSlide(6)"
                alt="MY Learning"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms7.png"
                style={{ width: "100%" }}
                onclick="currentSlide(7)"
                alt="classNameroom"
              />
            </div>
            <div className="column">
              <img
                className="demo cursor"
                src="/images/lms8.png"
                style={{ width: "100%" }}
                onclick="currentSlide(8)"
                alt="Your Courses"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesCarousel;
