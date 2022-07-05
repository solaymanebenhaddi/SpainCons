import React from 'react'
import slider1 from  "./slider1.jpg";
import slider2 from  "./slider2.jpg";
import slider3 from  "./slider3.jpg";
import slider4 from  "./slider4.jpg";
import slider5 from  "./slider5.jpg";

function Header() {
  return (
   <>
    {/* <!-- ======= Hero Section ======= --> */}
    <div className="">

  <section id="hero" class="d-flex flex-column justify-content-end align-items-center container-fluid header p-0">
    
    <div className="row container-fluid d-flex text-center">
        <div className="col-md-6">

    <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade " data-bs-ride="carousel">

      {/* <!-- Slide 1 --> */}
      <div class=" animated carousel-item active ">
        <div class="carousel-container">
          {/* <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Selecao</span></h2> */}
          <img src={slider1} alt="" className='slideimg animate__animated fanimate__adeInUp '  />
          
        </div>
      </div>

      {/* <!-- Slide 2 --> */}
      <div class="animated carousel-item" >
        <div class="carousel-container"Style="nackgound-image: url(../img/slider1.jpg)!important;
     background-size: cover !important;">
          {/* <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2> */}
        
            <img src={slider3} alt="" className='slideimg animate__animated animate__fadeInUp'  />
          
        </div>
      </div>

      {/* <!-- Slide 3 --> */}
      <div class=" animated carousel-item">
        <div class="carousel-container">
          {/* <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2> */}
         <img src={slider2} alt="" className='slideimg animate__animated animate__fadeInUp'  />
        </div>
        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
      </div>

      <div class="animated carousel-item">
        <div class="carousel-container">
          {/* <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2> */}
         <img src={slider4} alt="" className='slideimg animate__animated animate__fadeInUp'  />
        </div>
        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
      </div>

      <div class="animated carousel-item">
        <div class="carousel-container">
          {/* <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2> */}
         <img src={slider5} alt="" className='slideimg animate__animated animate__fadeInUp'  />
        </div>
        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
      </div>

      

    </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column pt-5  ">
            <h1 className='text-light ' data-aos="zoom-in" data-aos-delay="100">Start Your Investement Today and Change Your life</h1>
            <h6 className='text-warning' data-aos="zoom-in" data-aos-delay="350">We will help you to Begin your futur life with your family in Spain.  </h6>
            <h4 className='my-2  text-light ' data-aos="zoom-in" data-aos-delay="450">Our team has the best skills and experiences to provide you with all kind of services to start yourbusiness in spain and to stabilise with your family too in spain.</h4>
            <a href="/" className='btn-get-started'><strong>BOOK Now</strong></a>
            
            
            
        </div>
    </div>

    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
  </defs>
  <g className="wave1">
    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
  </g>
  <g className="wave2">
    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
  </g>
  <g className="wave3">
    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
  </g>
</svg>

  </section>
    </div>
  {/* <!-- End Hero --> */}
   </>
  )
}

export default Header