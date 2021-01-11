import {Link} from "react-router-dom";

function Header() {
    const ulStyle={display:"flex",
          justifyContent: "space-around"};
    return (
      <div >
        <nav style={{width:"50%"}}>
          <ul style={ulStyle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;