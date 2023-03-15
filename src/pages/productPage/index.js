import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.css";

const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/product/?page=1&limit=10")
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  return (
    <>
      <Header />

      <main className="container">
        <aside className="tdyprom">
          <div className="tdypromarr">
            <h1 className="h3-bld-brwn">Promo Today</h1>
            <p className="p-xs-blck txtprom nomargin">
              Coupons will be updated every weeks. Check them out!{" "}
            </p>
            <div className="card-cont">
              <section className="card-grn">
                <img
                  src={require("../../assets/images/ilust1.png")}
                  style={{ width: 84, height: 94 }}
                />
                <div className="ilusttxt">
                  <p className="nomargin p-xs-blck-bld">HAPPY MOTHER’S DAY!</p>
                  <p className="nomargin p-xs-blck">
                    Get one of our favorite menu for free!
                  </p>
                </div>
              </section>
              <section className="card-ylw">
                <img
                  src={require("../../assets/images/ilust2.png")}
                  style={{ width: 84, height: 94 }}
                />
                <div className="ilusttxt">
                  <p className="nomargin p-xs-blck-bld">
                    Get a cup of coffee for free on sunday morning
                  </p>
                  <p className="nomargin p-xs-blck">Only at 7 to 9 AM</p>
                </div>
              </section>
              <section className="card-grn">
                <img
                  src={require("../../assets/images/ilust1.png")}
                  style={{ width: 84, height: 94 }}
                />
                <div className="ilusttxt">
                  <p className="nomargin p-xs-blck-bld">HAPPY MOTHER’S DAY!</p>
                  <p className="nomargin p-xs-blck">
                    Get one of our favorite menu for free!
                  </p>
                </div>
              </section>
              <section className="card-brwn">
                <img
                  src={require("../../assets/images/ilust3.png")}
                  style={{ width: 84, height: 94 }}
                />
                <div className="ilusttxt">
                  <p className="nomargin p-xs-blck-bld">HAPPY HALLOWEEN!</p>
                  <p className="nomargin p-xs-blck">
                    Do you like chicken wings? Get 1 free only if you buy pinky
                    promise
                  </p>
                </div>
              </section>
            </div>
            <a href="#" className="btn-log-brwn loginbtn eff-btn">
              <button className="btn-log-brwn loginbtn">Apply Coupon</button>
            </a>
            <div className="tncarr">
              <p className="p-xs-blck-bld nomargin">Terms and Condition</p>
              <ol type="1" className="ul-prom p-xs-blck nomargin">
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ol>
            </div>
          </div>
        </aside>
        <section className="menu">
          <nav>
            <ul className="ul-navmenu">
              <li className="li-navbar">
                <a className="p-m-brwn-bld eff-nav" href="#">
                  Favorite & Promo
                </a>
              </li>
              <li className="li-navbar">
                <a className="p-s-gry eff-nav" href="#">
                  Coffee
                </a>
              </li>
              <li className="li-navbar">
                <a className="p-s-gry eff-nav" href="#">
                  Non Coffee
                </a>
              </li>
              <li className="li-navbar">
                <a className="p-s-gry eff-nav" href="#">
                  Foods
                </a>
              </li>
              <li className="li-navbar">
                <a className="p-s-gry eff-nav" href="#">
                  Add-on
                </a>
              </li>
            </ul>
            <div className="hrmenuarr">
              <hr className="mnunderline nomargin" />
            </div>
          </nav>

          <section className="menuarr">
            {data.map((item) => {
              return (
                <Link to={`/products/${item.id}`}>
                  <div className="card-wrapper">
                    <div className="dsc">
                      <p className="h3-xbld-poppins nomargin">10%</p>
                    </div>
                    <div className="mn-card">
                      <img
                        src={`http://localhost:5000/uploads/${item.image}`}
                      />
                      <div className="mn-txt">
                        <h1 className="h1-cardmn nomargin">{item.name}</h1>
                        <h2 className="h2-cardmn nomargin">{item.price}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
          <p className="mnlbl">
            *the price has been cutted by discount appears
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
