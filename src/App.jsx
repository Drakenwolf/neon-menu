import coffee_cup from "./assets/svgs/coffee.svg";
import croissant from "./assets/svgs/croissant.svg";
import bubble_tea from "./assets/svgs/bubble_tea.svg";
import cake from "./assets/svgs/cake.svg";
import "./App.css";
import "./Css/neonLight.css";
import "./Css/flickeringNeon.css";
import { Row, Col, Container } from "reactstrap";

function App() {
  return (
    <Container id="coffe-menu" className="main-div main-div2 mt-5 mb-5">
      <Container className="inner">
        <Row className="">
          <div className="title-container">
            <h1 className="d-flex justify-content-center align-items-center">
              The <span id="#offset">Cascade</span> Cafe
            </h1>
          </div>
        </Row>

        <Row className="mt-3 mb-3">
          <Col sm={12} md={12} lg={6} xl={6}>
            <Row>
              <Col>
                <img className="showroom-img" src={coffee_cup} alt="" />
              </Col>
              <Col>
                <img className="showroom-img" src={croissant} alt="" />
              </Col>
              <Col>
                <img className="showroom-img" src={bubble_tea} alt="" />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <Row className="combo-attractive">
              <Col>
                <img src={cake} alt="" />
              </Col>
              <Col className="combo-more">
                <div className="main-div main-div3">
                  <h2>Atractive Combo!</h2>
                </div>
                <p>You can pay with crypto</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="combo-more mb-5">
          <Col sm={12} md={12} lg={6} xl={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ipsam, quo magnam, aspernatur nemo nihil, sed adipisci
              voluptas.
            </p>
            <div className="main-div main-div1">
              <h2 className="d-flex justify-content-center mt-5 mb-5">
                A Fantastic Combo!!
              </h2>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ipsam, quo magnam, aspernatur nemo nihil, sed adipisci
              voluptas.
            </p>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ipsam, quo magnam, aspernatur nemo nihil, sed adipisci
              voluptas.
            </p>
            <div className="main-div main-div1">
              <h2 className="d-flex justify-content-center mt-5 mb-5">
                A Fantastic Combo!!
              </h2>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem ipsam, quo magnam, aspernatur nemo nihil, sed adipisci
              voluptas.
            </p>
          </Col>
        </Row>

        <Row className="">
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="coffe-container">
              <h2>Coffee</h2>
              <p className="prices">
                <span>Small: $2</span> <span>Large: $4</span>
              </p>
              <dl>
                <dt>House Blend</dt>
                <dd className="description">
                  <p>Smoky, strong, and assertive, just like us.</p>
                </dd>
                <dt>Organic French Roast</dt>
                <dd className="description">
                  <p>Smooth and mellow with hints of molasses.</p>
                </dd>
                <dt>Organic Decaf</dt>
                <dd className="description">
                  <p>
                    Full bodied and rich, we promise you won't miss the
                    caffiene.
                  </p>
                </dd>
              </dl>

              <h2>Espresso Drinks</h2>
              <p className="prices">
                <span>Small: $3</span> <span>Large: $5</span>
              </p>
              <dl>
                <dt>Machiatto </dt>
                <dd className="description">
                  <p>
                    Espressso and steamed milk, served in a demitasse cup.{" "}
                    <span className="note">(Size Small Only)</span>
                  </p>
                </dd>
                <dt>Latte</dt>
                <dd className="description">
                  <p>
                    Espresso with steamed milk, and sometimes a little art on
                    top.
                  </p>
                </dd>
                <dt>Mocha</dt>
                <dd className="description">
                  <p>
                    Espresso with steamed chocolate milk and whipped cream. Also
                    available with white chocolate milk.
                  </p>
                </dd>
                <dt>Americano</dt>
                <dd className="description">
                  <p>1 shot espresso, two shots hot water.</p>
                </dd>
              </dl>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            More combos
          </Col>
        </Row>

        <Row className="">
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="tea-container">
              <h2>Tea</h2>
              <p>Served to brave people in our notorious antique tea cups.</p>
              <p className="prices">
                <span>Per Cup: $2</span>
                <span className="note">$200 if you break the cup</span>
              </p>
              <dl>
                <dt>Earl Grey </dt>
                <dd className="description">
                  <p>Black tea fragranced with bergamot.</p>
                </dd>
                <dt>Ginger Hibiscus</dt>
                <dd className="description">
                  <p>Floral, tart, and spicy. Caffeine free.</p>
                </dd>
                <dt>Cascade Green</dt>
                <dd className="description">
                  <p>
                    A blend of green teas hand selected by our master teamaker.
                  </p>
                </dd>
                <dt>Chamomile</dt>
                <dd className="description">
                  <p>
                    Soothing and slightly sweet. Try it with honey! Caffeine
                    free.
                  </p>
                </dd>
              </dl>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="bakery-container">
              <h2>From the Bakery</h2>
              <p className="prices">
                <span>Cookies: $2</span> <span>Muffins &amp; Pastries: $3</span>
              </p>
              <dl>
                <dt>Mallory's Famous Snickerdoodles </dt>
                <dd className="description">
                  <p>
                    Creamy cinnamony goodness made from scratch with our founder
                    Mallory's prizewinning recipe.
                  </p>
                </dd>
                <dt>Oatmeal Cookie</dt>
                <dd className="description">
                  <p>
                    Packed with rolled oats, raisins, and cranberries, these
                    monster cookies are (almost) good for ya!
                  </p>
                </dd>
                <dt>Mixed Berry Muffins</dt>
                <dd className="description">
                  <p>
                    Filled with the best berries of the season and topped with a
                    crumb crust.
                  </p>
                </dd>
                <dt>Croissant</dt>
                <dd className="description">
                  <p>
                    Our oversized croissants are buttery, flaky, and usually all
                    sold out by 7 a.m.
                  </p>
                </dd>
              </dl>
            </div>
          </Col>
        </Row>

        <Row className="">
          <div className="d-flex justify-content-around info-container">
            <address>
              <svg viewBox="0 0 384 512" width="15" title="map-marker-alt">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
              <p>123 Main Street &middot; Smalltown, PA</p>
              <svg viewBox="0 0 512 512" width="15" title="phone-alt">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <a href="4125550100">412-555-0100</a>
            </address>

            <table className="hours">
              <thead>
                <tr>
                  <th colspan="2">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mon. - Thurs.</td>
                  <td>6 a.m. - 9 p.m.</td>
                </tr>
                <tr>
                  <td>Fri. - Sat.</td>
                  <td>6 a.m. - 11 p.m.</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>8 a.m. - 2 p.m.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
