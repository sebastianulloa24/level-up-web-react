import React from 'react'
import { Link } from 'react-router-dom'
import BannerInicio from '../components/Banner'
import fondo from '../../src/backgrounds/gif-fondo-paisaje.gif'

function Home() {
  return (
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>


      <div className='fondo-pantalla-claro'>
        <div className='col-lg-12'><BannerInicio />

          <Link to="/registrarse" className="btn btn-success btn-lg mt-3">
            ¡Regístrate Ahora!
          </Link>

        </div>
      </div>
    </div>


  )
}

export default Home