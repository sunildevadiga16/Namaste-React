import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CA"></img>
    </a>);
};

const Body = () => {
  return (
    <div className="body">
      <h1>Body</h1>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <h1>Footer</h1>
    </div>
  );
}

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About</li>
          <li> Contact Us</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
