import React from 'react'
import pass from "./pass.png"

function Residancy() {
  return (
    <div>
        <section id="services" class="residance">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>Spanish residency</p>
        </div>

        <div class="row">
          <div class="col-md-6 text-light"data-aos="zoom-in-left">
           <p>
           Year after year, thousands of foreigners from all around the world move to Spain. A varied landscape combined with nice people, plus delicious food and good weather 365 days per year make it the perfect place to start a new life.
           </p>
           <p >
           Spain's residence by investment program allows foreign nationals to make a significant investment in the country and apply for an investor visa. We granted successful applicants and their families visa-free access across Europe's Schengen Area.
           </p>
           <p>
           In AREC SPAIN We are a specialist in Spanish residency. We can offer you the best service in the world. As we help our client to start their investment in Spain. AREC SPAIN will help to get your residency in Spain for you and your family.
           </p>
          </div>
          <div class="col-md-6 mt-5 mt-md-0" data-aos="zoom-in-left" data-aos-delay="100">
            <img src={pass} alt="" srcset="" className='img-fluid' />
            
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Residancy