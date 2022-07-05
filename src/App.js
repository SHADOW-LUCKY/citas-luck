import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import PropTypes from 'prop-types'
function App() {
 //aver si hay citas
 let citasguardadas = JSON.parse(localStorage.getItem('citas'))
 if (!citasguardadas) {
  citasguardadas = []
 }
 //citas para agregar
 const [citas, editcitas] = useState(citasguardadas)
 //todas las citas
 const crearCita = (cita) => {
  editcitas([...citas, cita])
 }
 //actualizacion del state por medio de use effect
 useEffect(() => {
  if (citasguardadas) {
   localStorage.setItem('citas', JSON.stringify(citas))
  } else {
   localStorage.setItem('citas', JSON.stringify([]))
  }
 }, [citas, citasguardadas])
 //  eliminar las citas por id
 const eliminarcita = (id) => {
  const nuevascitas = citas.filter((cita) => cita.id !== id)
  editcitas(nuevascitas)
 }
 const titulo = citas.length === 0 ? 'no hay citas' : 'administre sus citas'
 return (
  <Fragment>
   <h1>administrador de pacientes</h1>
   <div className='container'>
    <div className='row'>
     <div className='one-half column'>
      <Formulario crearCita={crearCita} />
     </div>
     <div className='one-half column'>
      <h2>{titulo}</h2>
      {citas.map((cita) => (
       <Cita cita={cita} key={cita.id} eliminarcita={eliminarcita} />
      ))}
     </div>
    </div>
   </div>
  </Fragment>
 )
}
Formulario.propTypes = {
 crearCita: PropTypes.func.isRequired,
}
export default App
