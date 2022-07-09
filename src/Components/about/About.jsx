import React from "react";
import aboutimg from "./about.jpg"
function About() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h2>About</h2>
          <p>Who we are</p>
        </div>

        <div class="row content" >
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <p>
            <strong>AREC SPAIN</strong> existed for make dreams real for their customers, we
              believe you are unique and u deserve an exceptional service, our
              company provide you with this in 4 important field :
              
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i> Real estate investment in Spain.
              </li>
              <li>
                <i class="ri-check-double-line"></i> Import/Export.
              </li>
              <li>
                <i class="ri-check-double-line"></i>  Tourism in Spain.
              </li>
              <li>
                <i class="ri-check-double-line"></i>Spanish  residency.
              </li>
            </ul>
            <p>
              If you looking to start a life and a business in
              Europe, Spain is the best destination today for all leaders and
              businessmen.
              </p> 
              <p> 
                <strong>AREC SPAIN</strong> with clear vision will help you achieve your goels to moae on with your family to spain and start your business living the life you want . 
                <strong>AREC SPAIN</strong> Team will help you in all things you well need to stabilize your life wherever you want.
              </p>
              <p>
              We master this game so u don’t worry about anything just
              make the first step and we will do the rest for you
              </p>
              
            
            <a href="/#" class="btn-learn-more">
            <strong>BOOK NOW</strong>
            </a>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <img src={aboutimg} alt="" className="img-fluid"  />           
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
