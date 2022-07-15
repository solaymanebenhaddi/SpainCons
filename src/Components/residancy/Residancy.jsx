import { faDollar, faGlobe, faHandHoldingDollar, faHourglass, faPassport, faPeopleRoof} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <div className="col-md-6 d-flex align-items-start">
            <ul className='list float-start'>
              <li className='d-flex align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faHourglass} className='fs-3 text-light mx-3'/></span>
                <div><h6>Time to citizenship</h6></div>
                <div><p>Visa-free to 29 Schengen countries</p></div>
              </li>
              <li className='d-flex justify-content-between align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faGlobe} className='fs-3 text-light mx-3'/></span>
                <div><h6>Visa free travel</h6></div>
                <div><p>10 years (and must reside in Spain)</p></div>
              </li>
              <li className='d-flex justify-content-between align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faHandHoldingDollar} className='fs-3 text-light mx-3'/></span>
                <div><h6>Investment type</h6></div>
                <div><p>Real Estate</p></div>
              </li>
              <li className='d-flex justify-content-between align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faDollar} className='fs-3 text-light mx-3'/></span>
                <div><h6>Investment cost</h6></div>
                <div><p>EUR 500,000</p></div>
              </li>
              <li className='d-flex justify-content-between align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faPeopleRoof} className='fs-3 text-light mx-3'/></span>
                <div><h6>Family dependents</h6></div>
                <div><p>Spouse and children below 18. Adult children above 18, and parents of main applicant qualify as long as they prove financial dependency</p></div>
              </li>
              <li className='d-flex justify-content-between align-items-center p-0'>
                <span ><FontAwesomeIcon icon={faPassport} className='fs-3 text-light mx-3'/></span>
                <div><h6>Passport validity</h6></div>
                <div><p>10 years (and must reside in Spain)</p></div>
              </li>
            </ul>
           
          </div>
          <div className="col-md-6"> <div className='section-title'><p className='text-dark'>The The Spanish “Golden Visa” with AREC SPAIN</p></div>

            <p className='text-light'>
            The Spanish “Golden Visa” Law was introduced in 2013, allowing non-EU citizens and members of their families the opportunity to get a Temporary Residence Permit. The Temporary Resident Permits will also be granted to Spouses and any dependent children (under 18 years of age) but will not give the resident benefits such as free healthcare and education or other social benefits and so the investor and his or her family must have health insurance and be able to show sufficient financial resources to support themselves.
            </p></div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Residancy