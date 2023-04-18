const Title = () => {
  return <p>Gud Fooood</p>
}

export const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo"><Title /></h1>
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        
      </ul>
    </div>
  );
};