import React from 'react'
import { Link } from 'react-router-dom'
import BannerInicio from '../components/Banner'
import fondo from '../../src/backgrounds/gif-fondo-paisaje.gif'
import Cards from '../components/Cards'

function Home() {
  return (

    //Aqui se agrega un style en bruto para el fondo de pantalla fijo
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>

      <div className='col-lg-12'><BannerInicio />
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <Cards />
        </div>
      </div>
      <Link to="/registrarse" className="btn btn-success btn-lg mt-3">
        ¡Regístrate Ahora!
      </Link>
    </div>



  )
}

export default Home