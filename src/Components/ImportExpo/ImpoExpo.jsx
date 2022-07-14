import React from "react";
import "./expo.scss"
import impo from "./import.jpg"
import expo from "./expo.png"

function ImpoExpo() {
  return (
    <div>
      <section id="impexp" class="impexp">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>Services</h2>
            <p>Import and Export</p>
          </div>

          <div class="row">
            <div class="col-md-6" data-aos="zoom-in-left">
              <div class="example-1 card">
                <div class="wrapper">
                <div>
                      <img src={expo} alt="" srcset=""  className="img" />
                  </div>
                  <div class="data">
                  <div class="content">
                      <span class="author">AREC SPAIN</span>
                      <h1 class="title">
                        <a href="/#">
                          SERVICE EXPORT
                        </a>
                      </h1>
                      <p class="text">
                        Working many years in Exportation Services, AREC SPAIN ready to offer you the best service in the world. to develope your business localy and also around the world. 
                      </p>
                      <div><a href="/#" class="button">
                        Contact us NOW
                      </a></div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-5 mt-md-0" data-aos="zoom-in-left">
            <div class="example-2 card">
                <div class="wrapper">
                  <div>
                      <img src={impo} alt="" srcset=""  className="img" />
                  </div>
                  <div class="data">
                    <div class="content">
                      <span class="author">AREC SPAIN</span>
                      <h1 class="title">
                        <a href="/#">
                          SERVICE IMPORT
                        </a>
                      </h1>
                      <p class="text">
                        Working many years in Importation Services, AREC SPAIN ready to offer you the best service in the world. to develope your business localy and also around the world. 
                      </p>
                      <a href="/#" class="button">
                        Contact us NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImpoExpo;
