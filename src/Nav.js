import logo from './lo.png';
import './App.css';
function Navbar() {
  return (
    <nav className="navbar bg-white"> {/* Updated class: bg-white */}
      <div className="container-fluid">
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <img src={logo} alt="Logo" width="auto" height="50" className="d-inline-block align-text-top"/>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Courses
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" href="#">Action</button></li>
                <li><button className="dropdown-item" href="#">Another action</button></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" href="#">Something else here</button></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Programs
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" href="#">Action</button></li>
                <li><button className="dropdown-item" href="#">Another action</button></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" href="#">Something else here</button></li>
              </ul>
            </li>
          <form className="searchBox" role="search">
          <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" href="/">
            <img src="https://www.edyoda.com/static/media/icon-search-black.659381fa.svg" alt="Search Icon" />
            </button>
          </form>
            <li className="nav-item">
          <button className="btn1" href="/">Log in</button>
        </li>
        <li className="nav-item">
          <button className="btn" href="/">JOIN NOW</button>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
