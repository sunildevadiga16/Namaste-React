import { Link } from "react-router-dom";

const Title = () => {
  return <p>Gud Fooood</p>
}

export const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo"><Title /></h1>
      <ul className="menu">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to="/contactUs"><li>Contact Us</li></Link>
        <Link to="/cart"><li>Cart</li></Link>

      </ul>
    </div>
  );
};