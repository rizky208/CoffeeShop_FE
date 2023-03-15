import { useEffect, useState } from "react";
import Profile from "./authenticated";
import LogNav from "./unauthenticated";

// const pageTitle = (title) => {
//   if (typeof title == "undefined") {
//     return "Coffee Shop";
//   }
//   return `${title} - Coffee Shop`;
// };

const Header = ({ headerShown, title }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(`@userLogin`)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <nav>{isLogin ? <Profile setIsLogin={setIsLogin} /> : <LogNav />}</nav>
      {/* {headerShown && <Header/>} */}
    </>
  );
};

export default Header;