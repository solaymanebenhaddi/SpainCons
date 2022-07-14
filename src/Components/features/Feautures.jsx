import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faBuilding,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import f1 from "./features-1.jpg";
import f2 from "./features-2.jpg";
import f3 from "./features-3.jpg";
import f4 from "./features-4.jpg";

function Feautures() {
  return (
    <div>
      <section id="features" class="features">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>Services</h2>
            <p>Real estate investment in Spain</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Spain has many elements that attract many tourists to it, its
                wonderful beaches and its various historical monuments derived
                from the Roman and Andalusian civilizations. Quick profit
                considering the robust economy and the high standard of living
                and luxury in Spanish society.
              </p>
              <p className="mb-4">
                Spain plays an influential role in politics and the global
                economy, and the country has implemented a set of tax and
                banking reforms that have led to the recovery of its real estate
                market, where mortgage rates are the cheapest, the minimum for
                real estate investment is lower, and the possibility of
                obtaining a loan to finance real estate with a value that
                exceeds the minimum investment, besides the visa program Golden
                residence for foreign investors.
              </p>
              <p>
                <strong>AREC SPAIN </strong> simplify all the process for you to
                get start your investment in real estate here in Spain, we can
                help you buy or sell your properties, we do all the hard work
                for you, and bring you the good quality services to satisfy you
                at any cost.
              </p>
              <p>
                Here u can see the major categories in Real Estate that{" "}
                <strong>AREC SPAIN </strong> offre :
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-12">
              <ul class="nav nav-tabs row d-flex">
                <li class="nav-item col-3" data-aos="zoom-in">
                  <a
                    class="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    <FontAwesomeIcon className="fs-2 px-3" icon={faHome} />
                    <h4 class="d-none d-lg-block">Villas</h4>
                  </a>
                </li>
                <li
                  class="nav-item col-3"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                    <FontAwesomeIcon className="fs-2 px-3" icon={faBuilding} />
                    <h4 class="d-none d-lg-block">Appartement</h4>
                  </a>
                </li>
                <li
                  class="nav-item col-3"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                    <FontAwesomeIcon
                      className="fs-2 px-3"
                      icon={faAlignJustify}
                    />
                    <h4 class="d-none d-lg-block">Luxury Home Container</h4>
                  </a>
                </li>
                <li
                  class="nav-item col-3"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                    <FontAwesomeIcon
                      className="fs-2 px-3"
                      icon={faLocationDot}
                    />
                    <h4 class="d-none d-lg-block">Lands</h4>
                  </a>
                </li>
              </ul>

              <div class="tab-content" data-aos="fade-up">
                <div class="tab-pane active show" id="tab-1">
                  <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>
                        Get Your Dream Independent Villas today with AREC SPAIN
                      </h3>
                      <p>
                        Villas that make the best options for home buyers. Of
                        recent, villa homes are garnering greater interest from
                        property investors as truth be told, everyone’s dream
                        home is an independent house with a backyard to putter
                        around in and a beautiful front garden to show off.
                        Villa homes fit this bill perfectly, offering niche
                        lifestyles and speaking volumes about the owner’s choice
                        of home. Here’s a look at some benefits of investing in
                        villa homes.
                      </p>

                      <p>
                        Villas make significant investments as you are not only
                        buying the building but also the plot on which the
                        building stands. And with rising property costs, the
                        appreciation value of your land multiplies substantially
                        over the years. This makes for better profit margins in
                        case of a resale.
                      </p>

                      <p>
                        Villa addresses are a symbol of pride, of your having
                        made it in life. They are a sign of your social status
                        representing sophistication, exclusivity and luxury. And
                        also, your neighbors here will also be of similar social
                        status as yourself, thus making for like-minded
                        neighbors. Your kids will also have neighboring friends
                        with similar backgrounds to grow up with.
                      </p>

                      <p>
                        The best part of villa living is the freedom that goes
                        with it.
                      </p>

                      <ul>
                        <li>
                          <i class="ri-check-double-line"></i> You won’t need to
                          take permission from any resident’s association or
                          worry about altering the interiors or exteriors of
                          your home.
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i> You can add
                          another floor, construct more rooms for the growing
                          needs of the family or grow a garden on your terrace
                          or even use it as a party zone.
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i> You can renovate
                          and redecorate without having to worry about its
                          impact on neighbors with shared walls about other
                          people’s permission!
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i>
                          You won’t need to take permission from any resident’s
                          association or worry about altering the interiors or
                          exteriors of your home.
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i>
                          You can renovate and redecorate without having to
                          worry about its impact on neighbors with shared walls
                          about other people’s permission!
                        </li>
                      </ul>
                    
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                      <img src={f1} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-2">
                  <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>
                        Buy or Sell your Apartement in Spain, today AREC SPAIN make it easy and simple for you.
                      </h3>
                      <p>
                      properties if you want to earn passive income. Apartments are a great real estate investment because they provide monthly rental income. You can purchase an apartment building with a loan, or you can buy a single-family home and convert it into a multi-unit property.
                      </p>
                      <p class="fst-italic">
                      Get an Apartement is a better return on your money. Find a good Apartement in a growing area, and make sure it’s in good condition. Keep up maintenance on the Apartement, and keep an eye out for when it’s time to sell. Make sure you have enough money to cover your expenses and maintenance, and make sure you can get a good return on the Apartement if you have to sell it.
                      </p>
                      <p> Apartment is a great investment because of a few reasons:</p>
                     

                      <ul>
                        <li>
                          <i class="ri-check-double-line"></i> 1. Prices are always increasing: prices for apartments tend to increase over time due to supply and demand. This is because there are only so many apartments, and more and more people are looking to buy them.
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i>2. Rental income: if you own an apartment, you can rent it out and collect monthly payments from tenants. This can be a great source of passive income and help you pay down your mortgage debt quicker.
                        </li>
                        <li>
                          <i class="ri-check-double-line"></i>3. Tax benefits: when you invest in an apartment, you can write off interest payments and taxes on your investment property. This will lower your tax bill and put more money in your pocket each year.
                        </li>
                        
                      </ul>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                      <img src={f2} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-3">
                  <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>
                        AREC SPAIN Create houses from shipping Container and give you luxury Property .
                      </h3>
                      <p>
                        <h5>What are shipping containers?</h5>
                      

These are large cargo boxes that are typically 36 feet long and 8 feet wide. They are mainly used for the transportation of goods. They can be moved on trains, ships, and trucks. They can be purchased or rented. The best thing about these containers is that they can be repurposed into anything you want, from a home to an office or a shop.
                      </p>
                      <p>
                        AREC SPAIN with a professional team can now Create a luxury house o any kind of property you want all based on this shipping Container.
                      </p>
                      
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                      <img src={f3} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>  
                <div class="tab-pane" id="tab-4">
                  <div class="row">
                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>
                        Invest in  Lands in Spain with the Help of AREC SPAIN
                      </h3>
                      <p>
                      invest in lands by purchasing a plot in a housing society or by purchasing land and building a home. Land is a great investment as it does not depreciate in value. It is a long-term investment where you can expect to make good returns.
                      </p>
                      <p class="fst-italic">
                      Select lands that provide a solid return on investment. For example, you can purchase lands near a growing city and lease out the land for commercial or residential development. You can also purchase lands with natural resources, such as timber, oil, or minerals.
                      </p>
                      <p>
                      Another option is to purchase undeveloped lands near tourist destinations and develop them into tourist attractions.
                      </p>
                      <p>
                      There are lots of different types of land that you can invest in, and each one comes with its own set of risks. For example, farmland is a great long-term investment, or Industrial properties like warehouses are another option.
                      </p>
                      
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                      <img src={f4} alt="" class="img-fluid" />
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

export default Feautures;
