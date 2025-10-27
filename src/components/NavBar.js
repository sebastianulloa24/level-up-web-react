import React from 'react';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <div className='row'>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top fuente-pixel" >
        <div className=" navbar justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/home"> LEVEL-UP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Iniciar sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registrarse">Registrarse</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/#">Componentes PC</Link></li>
                <li><Link className="dropdown-item" to="/#">Accesorios y Periféricos</Link></li>
                <li><Link className="dropdown-item" to="/#">Portátiles</Link></li>
                <li><Link className="dropdown-item" to="/#">Monitores</Link></li>
                <li><Link className="dropdown-item" to="/#">Desktop</Link></li>
                <li><Link className="dropdown-item" to="/#">Servicios</Link></li>
                <li><Link className="dropdown-item" to="/#">Ofertas c:</Link></li>
                <li><Link className="dropdown-item" to="/#">Garantía SWOP+</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/#">Juegos</Link></li>
              </ul>
            </li>

          </ul>

          {/* Buscador */}
          <form className="d-flex mx-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Carrito */}
          <ul className="nav-item position-relative">
            <Link className="nav-link" to="/">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span className="badge bg-danger rounded-pill position top-0 start-100 translate-middle">
                2
              </span>
            </Link>
          </ul>

          {/* Perfil */}
          <Link to="/perfilusuario" rel="noopener noreferrer">
            <button type="button" className="btn btn-success ms-3">Perfil</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
