const Title = () => {
    return (
      <a href="/">
        <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CA"></img>
      </a>);
  };

const Header = () => {
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

  export default Header;