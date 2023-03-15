import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "../../assets/css/global1.css";
import "./style.css";

const Payment = () => {
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

      <main className="container bg-image" style={{ height: "115vh" }}>
        <aside className="menuact">
          <div className="pymtnheader">
            <h1 className="rubik font35px-bld text-white">
              Checkout your item now!
            </h1>
          </div>

          <section className="card-detail radius20px">
            <div className="ovrtxtarr">
              <h1>Order Summary</h1>
            </div>
            <div className="paymentlist">
              <img src={require("../../assets/images/latte.png")} />
              <div className="txtgroup">
                <p className="nomargin">{data.name}</p>
                <p className="nomargin">x 1</p>
                <p className="nomargin">Regular</p>
              </div>
              <div className="cxoutcta">
                <p>{data.price}</p>
              </div>
            </div>
            {/* <div className="paymentlist">
              <img src={require("../../assets/images/wing.png")} />
              <div className="txtgroup">
                <p className="nomargin">Chicken Fire Wings</p>
                <p className="nomargin">x 2</p>
                <p className="nomargin">-</p>
              </div>
              <div className="cxoutcta">
                <p>IDR 20.0</p>
              </div>
            </div> */}
            <hr style={{ width: "100%" }} />
            <div className="pymnttxtarr">
              <p className="nomargin">SUBTOTAL</p>
              <p className="nomargin">IDR 120.000</p>
            </div>
            <div className="pymnttxtarr">
              <p className="nomargin">TAX & FEES</p>
              <p className="nomargin">IDR 20.000</p>
            </div>
            <div className="pymnttxtarr">
              <p className="nomargin">SHIPPING</p>
              <p className="nomargin">IDR 10.000</p>
            </div>
            <div className="pymnth1">
              <h1 className="nomargin">TOTAL</h1>
              <h1 className="nomargin">IDR 150.000</h1>
            </div>
          </section>
        </aside>

        <section className="menu">
          <div className="dtlpymnt">
            <h1 className="nomargin">Address details</h1>
            <h1 className="nomargin">edit</h1>
          </div>
          <div className="card-addres radius20px">
            <div className="txtalign">
              <p>
                <strong>Deliver</strong> to Iskandar Street
              </p>
              <hr />
              <p>Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
              <hr />
              <p>+62 81348287878</p>
            </div>
          </div>

          <div className="dtlpymnt" style={{ marginTop: "25px" }}>
            <h1 className="nomargin">Payment method</h1>
          </div>
          <div className="card-addres-1 radius20px">
            <div className="txtalign">
              <div className="pymntmethod">
                <img
                  src={require("../../assets/images/radblk.png")}
                  className="icn18"
                />
                <img
                  src={require("../../assets/images/card1.png")}
                  className="icn60"
                  style={{ padding: "0px 19px" }}
                />
                <p>Card</p>
              </div>
              <hr />
              <div className="pymntmethod">
                <img
                  src={require("../../assets/images/radslct.png")}
                  className="icn18"
                />
                <img
                  src={require("../../assets/images/card2.png")}
                  className="icn60"
                  style={{ padding: "0px 19px" }}
                />
                <p>Card</p>
              </div>
              <hr />
              <div className="pymntmethod">
                <img
                  src={require("../../assets/images/radblk.png")}
                  className="icn18"
                />
                <img
                  src={require("../../assets/images/card3.png")}
                  className="icn60"
                  style={{ padding: "0px 19px" }}
                />
                <p>Card</p>
              </div>
            </div>
            <a href="#">
              <button className="btnnew btn-log-brwn radius20px">
                Confirm and Pay
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
