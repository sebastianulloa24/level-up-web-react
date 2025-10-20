import React from 'react'

import { Link } from 'react-router-dom'
import BannerInicio from '../components/Banner'


function Home() {
  return (
    <div className='fondo-pantalla-claro'>
        <BannerInicio/>
        <Link to="/registrarse" className="btn btn-success btn-lg mt-3">
          ¡Regístrate Ahora!
        </Link>
    </div>

  )
}

export default Home