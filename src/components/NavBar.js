import React from 'react';



function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top fuente-pixel" >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Iniciar sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registrarse">Registrarse</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Componentes PC</a></li>
                <li><a className="dropdown-item" href="/#">Accesorios y Periféricos</a></li>
                <li><a className="dropdown-item" href="/#">Portátiles</a></li>
                <li><a className="dropdown-item" href="/#">Monitores</a></li>
                <li><a className="dropdown-item" href="/#">Desktop</a></li>
                <li><a className="dropdown-item" href="/#">Servicios</a></li>
                <li><a className="dropdown-item" href="/#">Ofertas c:</a></li>
                <li><a className="dropdown-item" href="/#">Garantía SWOP+</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/#">Juegos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="/">LEVEL-UP</a>
            </li>
          </ul>

          {/* Buscador */}
          <form className="d-flex mx-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Carrito */}
          <ul className="nav-item position-relative">
            <a className="nav-link" href="/">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                2
              </span>
            </a>
          </ul>

          {/* Perfil */}
          <a href="/perfilusuario" rel="noopener noreferrer">
            <button type="button" className="btn btn-success ms-3">Perfil</button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
