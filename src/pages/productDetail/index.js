import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";

const ProductDetail = () => {
  let { id } = useParams(); //diambil dari react-router-dom
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/product/${id}`).then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <>
      <Header />

      <main className="container bg-grey" style={{ height: "115vh" }}>
        <aside className="menuact">
          <div className="breadcrumb">
            <p className="p-m-gry">Favorite & Promo</p>
            <p className="p-m-brwn-bld">{data.name}</p>
          </div>
          <img src={require("../../assets/images/dtlimg.png")} />
          <div className="dtltxtarr">
            <h1 className="nomargin">{data.name}</h1>
            <h2 className="nomargin">{data.price}</h2>
          </div>
          <div className="dtlcta">
            <a href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/payment/index.html#">
              <button className="btn-fullsize btn-log radius20px eff-btn">
                Add to Cart
              </button>
            </a>
            <a href="#">
              <button className="btn-fullsize btn-log-brwn radius20px eff-btn-sec">
                Ask a Staff
              </button>
            </a>
          </div>
        </aside>

        <section className="menu" />
        <div className="dtlarr">
          <section className="card-detail radius20px">
            <div className="ovrtxtarr">
              <p>
                Delivery only on <strong>Monday to friday</strong>Monday to{" "}
                <strong>friday</strong> at
                <strong>1- 7 pm</strong>
              </p>
              <p>
                Cold brewing is a method of brewing that combines ground coffee
                and cool water and uses time instead of heat to extract the
                flavor. It is brewed in small batches and steeped for as long as
                48 hours.
              </p>
            </div>
            <div className="dtltxtarr">
              <h3>Choose a size</h3>
              <div>
                <img src={require("../../assets/images/size/r.png")} />
                <img src={require("../../assets/images/size/l.png")} />
                <img src={require("../../assets/images/size/xl.png")} />
              </div>
            </div>
          </section>
          <div className="delivact">
            <h3>Choose Delivery Methods</h3>
            <div className="sizebtn">
              <a href="#">
                <button className="btn-small btn-log-sec-brown radius20px eff-btncrd2">
                  Dine in
                </button>
              </a>
              <a href="#">
                <button className="btn-small btn-log-sec-brown radius20px eff-btncrd2">
                  Door Delivery
                </button>
              </a>
              <a href="#">
                <button className="btn-small btn-log-sec-brown radius20px eff-btncrd2">
                  Pick up
                </button>
              </a>
            </div>
            <div className="timefill">
              <label className="" for="time-input">
                Set time :
              </label>
              <input
                className=""
                id="time-input"
                type="number"
                placeholder="Enter the time you’ll arrived"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="cxout">
        <div className="cxoutarrtxt">
          <img
            src={require("../../assets/images/dtlimg.png")}
            className="img-cxout"
          />
          <div className="txtgroup">
            <h1 className="h1 nomargin">{data.name}</h1>
            <p className="nomargin">x1 (Large)</p>
            <p className="nomargin">x1 (Regular)</p>
          </div>
          <div className="cxoutcta">
            <img
              src={require("../../assets/images/plus.png")}
              className="icn30"
            />
            <h1>2</h1>
            <img
              src={require("../../assets/images/min.png")}
              className="icn30"
            />
          </div>
        </div>
        <a href="#">
          <button className="cxbtn eff-btn">See Promo</button>
        </a>
      </section>

      <footer className="footcont" style={{ paddingTop: "100px" }}>
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

export default ProductDetail;
