import React from 'react';
import { Link } from 'react-router-dom';

// 2. NOMBRES DE COMPONENTES EMPIEZAN CON MAYÚSCULA
function Registrarse() {
  return (
    // Usamos un div contenedor para el fondo y centrado
    <div className="register-container body-registrarse">
      <div className="register-card">   
        <h2 className="register-title">Crea tu Cuenta</h2>
        
        {/* 3. CAMBIAMOS "class" POR "className" */}
        <form id="registerForm" className="row g-3">
          <div className="col-md-6">
            {/* 4. LAS ETIQUETAS <input> DEBEN CERRARSE SOLAS (/>) */}
            <input type="text" className="form-control" id="firstName" placeholder="Nombre" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" id="lastName" placeholder="Apellido" required />
          </div>
          <div className="col-12">
            <input type="email" className="form-control" id="email" placeholder="Correo Electrónico" required />
          </div>
          <div className="col-12">
            <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
          </div>
          <div className="col-md-6">
            <input type="number" className="form-control" id="age" placeholder="Edad" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" id="promoCode" placeholder="Código Promocional" />
          </div>
          
          <div className="col-12">
            <div className="form-check">
              {/* 5. CAMBIAMOS "for" POR "htmlFor" */}
              <input className="form-check-input" type="checkbox" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                Acepto los términos y condiciones
              </label>
            </div>
          </div>
          
          <div className="col-12 button-group">
            <button type="submit" className="btn btn-success">Registrarse</button>
            <button type="reset" className="btn btn-danger">Cancelar</button>
          </div>
        </form>

        <div className="text-center mt-4">
             <Link to="/" className='back-link'> Regresar al Inicio </Link>
        </div>
      </div>
    </div>
  );
}

export default Registrarse;
