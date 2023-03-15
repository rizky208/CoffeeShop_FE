import "../../assets/css/global.css";
import "../../pages/productPage/style.css";

const Profile = (setIsLogin) => {
  return (
    <>
      <header className="navbar">
        <section className="logo">
          <img
            className="icn30"
            src={require("../../assets/images/logo.png")}
          />
          <h1 className="textlogo">Coffee Shop</h1>
        </section>
        <nav>
          <ul className="ul-navbar">
            <li className="li-navbar">
              <a
                className="p-s-gry eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/third%20alt%20coffe%20shop/index.html"
              >
                Home
              </a>
            </li>
            <li className="li-navbar">
              <a
                className="p-s-gry eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Product%20Page/index.html"
              >
                Product
              </a>
            </li>
            <li className="li-navbar">
              <a
                className="p-s-gry eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Detail%20Product/index.html"
              >
                Your Cart
              </a>
            </li>
            <li className="li-navbar">
              <a
                className="p-s-gry eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/history/index.html"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
        <section className="navcta">
          <div className="search-bar">
            <img
              className="icn18"
              src={require("../../assets/images/search.png")}
            />
            <input className="sb-fill" type="text" placeholder="Search.." />
          </div>
          <img src={require("../../assets/images/chat.png")} />
          <img src={require("../../assets/images/profnav.png")} />
        </section>
      </header>
    </>
  );
};

export default Profile;
