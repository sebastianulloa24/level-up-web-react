//RUTAS///////////////////////////////////////////////
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//STYLES//////////////////////////////////////////////
import './styles/css/home.css';
import './styles/css/footer.css';
import './App.css';
//PAGES///////////////////////////////////////////////
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import Iniciosesion from './pages/InicioSesion';
import CarrtitoCompra from './pages/CarritoCompra';
import Perfil from './pages/Perfil'
import Producto from "./pages/Producto";

//importacion de componentes/////////////////////////////7
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//importacion de imagen para fondo general///////////////////7



function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciosesion" element={<Iniciosesion />} />
          <Route path="/carritoCompra" element={<CarrtitoCompra />} />
          {/* <Route path="/servicios" element={<Servicios/>} /> */}
          <Route path="/Productos" element={<Producto/>} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



/*
========================================================
EXPLICACIÓN DETALLADA DEL ARCHIVO App.jsx
========================================================

1. IMPORTACIONES PRINCIPALES
--------------------------------------------------------
Se importan los siguientes módulos y componentes:

- Desde "react-router-dom":
  • BrowserRouter (renombrado como Router): contenedor principal que habilita las rutas en la aplicación.
  • Routes: agrupa todas las rutas disponibles.
  • Route: define cada ruta y el componente que se mostrará para esa URL.

- Archivos de estilos:
  • home.css → estilos específicos de la página principal.
  • footer.css → estilos del pie de página.
  • App.css → estilos generales o globales.

- Páginas del proyecto:
  • Home → página de inicio.
  • Registrarse → formulario de registro de usuario.
  • Iniciosesion → página de inicio de sesión.
  • CarritoCompra → muestra los productos en el carrito.
  • Perfil → página del perfil del usuario.

- Componentes reutilizables:
  • NavBar → barra de navegación fija visible en todas las rutas.
  • Footer → pie de página visible en todas las rutas.

--------------------------------------------------------

2. FUNCIÓN PRINCIPAL: App()
--------------------------------------------------------
El componente App() es el componente raíz de toda la aplicación React
y el primero que se monta al iniciar la aplicación.

Dentro de App():
- Todo el contenido está envuelto en <Router>, lo que permite usar el sistema de rutas.
- El componente <NavBar> se muestra en la parte superior en todas las páginas.
- <Routes> contiene las distintas rutas definidas con <Route>.

Cada <Route> incluye:
- path: define la URL (por ejemplo, "/perfil").
- element: indica qué componente se renderiza al acceder a esa URL.

Ejemplos:
- "/" o "/home" → renderiza <Home />.
- "/registrarse" → renderiza <Registrarse />.
- "/perfil" → renderiza <Perfil />.

El componente <Footer /> se coloca fuera de <Routes>, por lo tanto se muestra en todas las páginas.

--------------------------------------------------------

3. FLUJO DE COMUNICACIÓN ENTRE COMPONENTES
--------------------------------------------------------
NavBar y Footer son componentes globales, visibles en todas las páginas
por estar fuera del bloque <Routes>.

Cuando se hace clic en un enlace del NavBar, cambia la URL.
El Router detecta este cambio y renderiza el componente correspondiente dentro de <Routes>.

Los componentes de página (Home, Perfil, etc.) pueden comunicarse con subcomponentes
a través de props, permitiendo el envío de información dinámica.

Ejemplo:
En "/perfil", el componente Perfil puede importar y renderizar ItemPerfil,
pasándole los datos del usuario mediante props.

--------------------------------------------------------

4. CONCEPTO GENERAL DE FUNCIONAMIENTO
--------------------------------------------------------
App.jsx define la estructura base de la aplicación SPA (Single Page Application).
El sistema de enrutamiento gestionado por react-router-dom permite cambiar de página
sin recargar el navegador.

NavBar y Footer son persistentes y visibles en todas las vistas,
mientras que el contenido principal cambia dinámicamente según la ruta.

--------------------------------------------------------
En resumen:
- App.jsx define la estructura principal.
- Router gestiona la navegación.
- Routes define las rutas y sus componentes.
- NavBar y Footer son elementos globales.
- Las páginas (Home, Perfil, etc.) se comunican con sus subcomponentes mediante props.
========================================================
*/
