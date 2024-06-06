import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InformacionPrincipal from '../components/inicio/InformacionPrincipal'
import InicioSesionUsuario from '../components/inicioSesionUsuario/pages/InicioSesion'
import RegistroUsuario from '../components/registroUsuario/pages/Registro'
import Chat from '../components/chat/pages/Chat'
import CrearMetas from '../components/crearMetas/pages/CrearMeta'
import Entrenadores from '../components/entrenadores/Entrenadores'
import EvaluacionUsuario from '../components/evaluacionUsuario/pages/EvaluacionUsuario'
import GenerarRutina from '../components/generarRutina/pages/GenerarRutina'
import Metas from '../components/metas/pages/Metas'
import PerfilCliente from '../components/perfilCliente/pages/Perfil'

const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<InformacionPrincipal />} />
                    <Route path="/IniciarSesionUsuario" element={<InicioSesionUsuario />} />
                    <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                    <Route path='/Chat' element={<Chat />} />
                    <Route path='/CrearMetas' element={<CrearMetas />} />
                    <Route path='/Entrenadores' element={<Entrenadores />} />
                    <Route path='/EvaluacionUsuario' element={<EvaluacionUsuario />} />
                    <Route path='/GenerarRutina' element={<GenerarRutina />} />
                    <Route path='/Metas' element={<Metas />} />
                    <Route path='/PerfilCliente' element={<PerfilCliente />} />
                </Routes>
            </Router>
        </>
    )
}

export default Rutas