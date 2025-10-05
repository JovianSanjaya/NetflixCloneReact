import {Link} from 'react-router-dom';
import '../css/Navbar.css'

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"><img className="netflix-logo" src="/netflix.png" alt="" /></Link>
        </div>
          <div className="navbar-links">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar;
