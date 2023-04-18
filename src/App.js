import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./utilities/globalstyles";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const setAuth = () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token && !axios.defaults.headers.common["Authorization"])
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  };
  setAuth();

  useEffect(() => {
    setAuth();
  }, [pathname]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
