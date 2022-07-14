import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCar, faHotel, faMapLocationDot
  
} from "@fortawesome/free-solid-svg-icons";
import tours from "./tours.jpg"

function Services() {
  return (
    <div>
        <section id="services" className="services red">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>Tourism in Spain</p>
        </div>
        <div className="row">
        <div className="col-md-6">
        <img src={tours} alt="" class="img-fluid" data-aos="zoom-out" />
        </div>
        <div className="col-md-6">
            
            <p  data-aos="zoom-out">
            Spain is one of the leading tourist destinations in the world. Its wide range of tourist resources and attractions, its hotels, Spaniards’ friendliness, and a highly professional tourist industry lead 75 million international tourists to select Spain as their destination every year.

            </p>
            <p  data-aos="zoom-out">
            The tourism industry in Spain is thriving as many tourists are looking to visit this European country. This can be attributed to the fact that Spain is a popular tourist destination due to its cultural heritage, beaches, and stunning landscapes. Moreover, the affordability of the country makes it an ideal vacation spot.
            </p>
            <p  data-aos="zoom-out">
            The tourism industry in Spain is expected to grow in the coming years. Several factors, such as improving tourism infrastructure, better connectivity, and greater awareness can help in achieving this. In fact, the tourism industry in Spain is one of the most promising tourism markets in the world.
            </p>
        </div>
        
        </div>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center text-center align-items-center p-4 my-5 text-light"  data-aos="zoom-out">
            AREC SPAIN as a leader in Tourism around Spain and Europe and north Africa, we offer to our clients best VIP services with customised requests from our Client to make their vacance super fantastic and agreeable.
            AREC SPAIN Team do the hard work to offer you many suitable Services including :

            </div>
        </div>

        <div className="row my-5">

          <div className="col-lg-4 col-md-6">
            <div className="icon-box border border-2 border-warning" data-aos="zoom-in-left">
              <div><FontAwesomeIcon icon={faCar} className='icon'/></div>
              <h4 className="title"><a href="/">VIP Transport</a></h4>
              <p className="description">
              AREC SPAIN provide you with best Super Luxury car that you love to spend your vacancy with, from you arrival until the last day of your vacance.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div className="icon-box border border-2 border-warning" data-aos="zoom-in-left" data-aos-delay="100">
              <div><FontAwesomeIcon icon={faMapLocationDot} className='icon'/></div>
              <h4 className="title"><a href="/">Tours</a></h4>
              <p className="description">AREC SPAIN organise for you the most beautiful Tours around magical cities in Spain, also when u chose other destination in Europe, Our teams will give you always the best Tours with top VIP SERVICES in all your  vacance days</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
            <div className="icon-box border border-2 border-warning" data-aos="zoom-in-left" data-aos-delay="300">
              <div><FontAwesomeIcon icon={faHotel} className='icon'/></div>
              <h4 className="title"><a href="/">Tourist accommodation</a></h4>
              <p className="description">AREC SPAIN offers you luxury accommodation during your vacation and your tourist circuit either in Spain or throughout Europe depends on your choice of destination</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
    </div>
  )
}

export default Services
