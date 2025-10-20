import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"
                href="/">Iniciar sesion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                href="/registrarse">Registrarse</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"
                  href="/">Componentes PC</a>
                </li>
                <li><a className="dropdown-item" href="/#">Accesorios y Perifericos</a></li>
                <li><a className="dropdown-item" href="/#">Portatiles</a></li>
                <li><a className="dropdown-item" href="/#">Monitores</a></li>
                <li><a className="dropdown-item" href="/#">Desktop</a></li>
                <li><a className="dropdown-item" href="/#">Servicios</a></li>
                <li><a className="dropdown-item" href="/#">OFERTAS c:</a></li>
                <li><a className="dropdown-item" href="/#">Garantia SWOP+</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="/#">Juegos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href='/'>LEVEL-UP</a>
            </li>
          </ul>


          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {/* <!--AQUI ESTA EL CARRITO DE COMPRA--> */}
          <ul className="nav-item position-relative">
            <a className="nav-link" href="/">
              <i className="fas fa-shopping-cart fa-2x"></i>
              {/* <!-- Badge simulando 2 productos --> */}
              <span
                className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                2 </span>
            </a>
          </ul>

        </div>
        <a href="perfilusuario.html" rel="noopener noreferrer">
          <button type="button" className="btn btn-success">Perfil</button>
        </a>
      </nav >
    </div >
  )
}

export default NavBar