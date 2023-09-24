import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.jpg";

function NavBar() {
  return (
    <nav>
      <img className="logo" src={Logo} />
      <h2>Social Hub</h2>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Groups</a>
        <a href="#">Video</a>
      </div>
      <img className="avatar" src={Avatar} />
    </nav>
  );
}

export default NavBar;
