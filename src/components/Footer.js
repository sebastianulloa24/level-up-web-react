import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/css/footer.css';


function Footer() {
  return (
      <footer className="footer-gamer text-center text-lg-start text-white">
        <div className="container p-4 pb-0">
          <div className="row">
            {/* Logo e intro */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">LEVEL UP</h5>
              <p>Tu portal gamer definitivo. Hardware, periféricos y accesorios de última generación ⚡</p>
            </div>

            {/* Enlaces internos */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li><Link className="footer-link" to="/">Inicio</Link></li>
                <li><Link className="footer-link" to="/servicios">Servicios</Link></li>
                <li><Link className="footer-link" to="/registrarse">Registrarse</Link></li>
                <li><Link className="footer-link" to="/iniciosesion">Iniciar Sesión</Link></li>
                <li><Link className="footer-link" to="/carritoCompra">Carrito</Link></li>
              </ul>
            </div>

            {/* Contacto y redes sociales */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">Contáctanos</h5>
              <ul className="list-unstyled footer-contact">
                <li><FaMapMarkerAlt className="footer-icon" /> Santiago, Chile</li>
                <li><FaPhone className="footer-icon" /> +56 9 4567 8910</li>
                <li><FaEnvelope className="footer-icon" /> contacto@levelup.cl</li>
              </ul>

              <div className="footer-social">
                {/* Enlaces externos siguen usando <a> */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-3 footer-bottom">
          © 2025 LEVEL UP. Todos los derechos reservados.
        </div>
      </footer>
    )
}

export default Footer