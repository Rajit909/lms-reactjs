import React from "react";

const Testimonial = () => {
  return (
    <>
      {/* <!-- testimonial-section --> */}
      <section class="testimonal-section">
        <div class="container tests">
          <h4 class="section-title">What People says</h4>
          <p class="text-secondary text-center">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/images/clients.png" alt="client" class="client" />
                <div class="card">
                  <h5 class="topic">Michael</h5>
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                  <p>
                    <i class="fas fa-quote-left"></i>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ip'sum has been the industry's
                    standard dummy text ever since the 1500s.."
                    <i class="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/images/clients.png" alt="client" class="client" />
                <div class="card">
                  <h5 class="topic">Michael</h5>
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                  <p>
                    <i class="fas fa-quote-left"></i>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ip'sum has been the industry's
                    standard dummy text ever since the 1500s.."
                    <i class="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/images/clients.png" alt="client" class="client" />
                <div class="card">
                  <h5 class="topic">Michael</h5>
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                  <p>
                    <i class="fas fa-quote-left"></i>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ip'sum has been the industry's
                    standard dummy text ever since the 1500s.."
                    <i class="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
