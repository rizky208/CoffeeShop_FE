import "../../pages/productPage/style.css";

const Footer = () => {
  return (
    <>
      <footer className="footcont">
        <section className="leftft">
          <section className="logo">
            <img
              className="icn30"
              src={require("../../assets/images/logo.png")}
            />
            <h1 className="textlogo">Coffee Shop</h1>
          </section>
          <p className="p-s-gry-med">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className="socicn">
            <img
              src={require("../../assets/images/Socmed/Facebook.png")}
              className="icn33"
            />
            <img
              src={require("../../assets/images/Socmed/Twitter.png")}
              className="icn33"
            />
            <img
              src={require("../../assets/images/Socmed/Instagram.png")}
              className="icn33"
            />
          </div>
          <p className="p-s-gry">2020CoffeeStore</p>
        </section>
        <section className="rightft">
          <div className="ctaft">
            <ul className="ul-ctaft">
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Product
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Download{" "}
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Pricing
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Locations
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Countries
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="ctaft">
            <ul className="ul-ctaft">
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Engage
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Coffe Shop ?{" "}
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  FAQ
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  About Us
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="li-ctaft">
                <a className="p-s-gry eff-nav" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
