import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact section-bg">
    <div className='container' data-aos="fade-up">

      <div className="section-title">
        <h2>Contact</h2>
        <p className="fs-2">Have you any question ?<br/>
          Our Teams ready to tp answer you.</p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="info-box mb-4">
            <i className="bx bx-map"></i>
            <h3>Our Addresse :</h3>
            <p> Avenue des FAR, Tour des habous, Casablanca</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box  mb-4">
            <i className="bx bx-envelope"></i>
            <h3>Email :</h3>
            <p>contact@example.com</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box  mb-4">
            <i className="bx bx-phone-call"></i>
            <h3>TelePhone :</h3>
            <p><span>Casablanca</span>(+212) 707-143-777</p>
            <p><span>Rabat</span>(+212) 665-279-092</p>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-lg-6 ">
          <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100115.77990666922!2d-0.542736964740903!3d38.35781986509627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%2C%20Province%20d&#39;Alicante%2C%20Espagne!5e0!3m2!1sfr!2sma!4v1658698786059!5m2!1sfr!2sma" frameBorder="0" style={{'border':0, 'width': '100%', 'height': '384px',}} allowFullScreen title="maps"></iframe>
        </div>

        <div className="col-lg-6 php-email-form">
          
            <div className="row ">
              <div className="col-md-6 form-group">
              <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder='Enter full name ...'/>
</div>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
              <div class="input-group mb-3">
  
  <input type="email" class="form-control" placeholder='Enter your E-mail ...'/>
</div>
              </div>
            </div>
            <div className="form-group mt-3">
            <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder='Enter Subject ...'/>
</div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Votre Message a été bien envoyer. Merci a vous !</div>
            </div>
            <div className="text-center"><button variant="primary" type="submit">
              Envoyer Message
            </button></div>
          
        </div>

      </div>

    </div>
  </section>
    
  )
}

export default Contact