import React, { useState, Fragment } from "react";
import "./App.css";
import { FirstPage, SecondPage, ThirdPage } from "./components";

function App() {
  const [page, setPage] = useState(0);
  const handleClick = () => {
    const currentPage = page + 1;
    setPage(currentPage);
  };
  const renderPage = () => {
    switch (page) {
      case 0:
        return <FirstPage handleClick={handleClick} />;
      case 1:
        return <SecondPage handleClick={handleClick} />;
      case 2:
        return <ThirdPage />;
      default:
        break;
    }
  };
  return <Fragment> {renderPage()}</Fragment>;
}

export default App;
