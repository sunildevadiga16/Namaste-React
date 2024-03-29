import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";

const Title = () => {
  return <p>Gud Fooood</p>
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="navbar">
      <h1 className="logo"><Title /></h1>
      <ul className="menu">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to="/contactUs"><li>Contact Us</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/instamart">
          <li>Instamart</li>
        </Link>
        <Link to="/cart">
          <li className="px-2" data-testid="cart">Cart- {cartItems.length} items</li>
        </Link>

      </ul>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )
      }
    </div>


  );
};

export default Header;