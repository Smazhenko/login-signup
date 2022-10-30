import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "../SignUp";
import Login from "../Login";
import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";
import styles from "./style.module.scss";

const Toggler = (props) => {
  let [indicator, setIndicator] = useState(false);
  const clickHandler = () => {
    setIndicator((indicator = !indicator));
  };

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Link className={styles.img} to="/">
          <img alt="Hi" src="https://www.squadhelp.com/img/logo.png" />
        </Link>
        <Link
          className={styles.button}
          onClick={clickHandler}
          to={indicator ? "Signup" : "Login"}
        >
          {indicator ? "Signup" : "Login"}
        </Link>
      </div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} /> 
         <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Toggler;
