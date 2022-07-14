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
          <div class="col-md-6"data-aos="zoom-in-left">
           <p className='text-light' >
           Spain's residence by investment program allows foreign nationals to make a significant investment in the country and apply for an investor visa. We granted successful applicants and their families visa-free access across Europe's Schengen Area.
           </p>
          </div>
          <div class="col-md-6 mt-5 mt-md-0" data-aos="zoom-in-left" data-aos-delay="100">
            <img src={pass} alt="" srcset="" />
            
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Residancy