import "../../assets/css/global.css";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  console.log("ini data", loginForm);
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        // localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        // navigate("/products");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  // console.log(localStorage.getItem("@userLogin"));
  // useEffect(() => {
  //   if (localStorage.getItem("@userLogin")) {
  //     navigate("/products");
  //   }
  // }, []);
  return (
    <>
      <main className="container">
        <section className="sidebg"></section>
        <section className="fillform">
          <nav className="container navbar">
            <section className="logo">
              <img
                className="icn30"
                src={require("../../assets/images/logo.png")}
              />
              <h1 className="textlogo">Coffee Shop</h1>
            </section>
            <a href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/sign%20up/index.html">
              <button className="btn btn-primnav eff-btn-orange">
                Sign Up
              </button>
            </a>
          </nav>

          <div className="loginarr">
            <h3 className="rubik font35px-bld text-brown nomargin">Login</h3>
            <form onSubmit={handleLogin} className="inputarr">
              <div className="formipt">
                <label
                  className="rubik font16px-bld text-grey"
                  for="email-input"
                >
                  Username :
                </label>
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
                      username: e.target.value,
                    })
                  }
                  className="filllyt"
                  id="username-input"
                  type="text"
                  placeholder="Enter your email adress"
                />
              </div>
              <div className="formipt">
                <label
                  className="rubik font16px-bld text-grey"
                  for="password-input"
                >
                  Password :
                </label>
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
                      password: e.target.value,
                    })
                  }
                  className="filllyt"
                  id="password-input"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <a
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/forgot%20password/index.html"
                style={{ paddingTop: "20px" }}
              >
                <u
                  className="rubik font20px-bld text-brown"
                  style={{ paddingTop: "20px" }}
                >
                  Forgot password?
                </u>
              </a>
            </form>
            <div className="logcta">
              {/* <a
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Product%20Page/index.html"
                className="btn-log loginbtn eff-btn-orange"
              > */}
              <button
                onClick={() => navigate("products")}
                type="submit"
                className="btn-log loginbtn eff-btn-orange"
              >
                Log in
              </button>
              {/* </a> */}
              <div className="cont-btn-g btn-g loginbtn">
                <img
                  src={require("../../assets/images/google.png")}
                  className="icn30"
                />
                <button className="btn-g-txt">Login with Google</button>
              </div>
            </div>
          </div>
        </section>
        <section className="hvrcontainer">
          <div className="hvrcnttxt">
            <h1 className="rubik font35px-med text-black">
              Get your member card now!
            </h1>
            <p className="rubik font16px-reg text-grey">
              Let's join with our member and enjoy the deals.
            </p>
          </div>
          <a href="#">
            <button className="abs-btn eff-btn-orange">Create Now</button>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
