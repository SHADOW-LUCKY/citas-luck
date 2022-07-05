import React from 'react'
import PropTypes from 'prop-types'
const Cita = ({cita,eliminarcita}) => {
    return (
        <div className='cita'>
        <p>mascota: <span>{cita.mascota}</span></p>
        <p>propietario: <span>{cita.propietario}</span></p>
        <p>fecha: <span>{cita.fecha}</span></p>
        <p>hora: <span>{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>
        <button className='eliminar button u-full-width' onClick={()=> eliminarcita(cita.id)}>eliminar &times;</button>
        </div>
    );
}

export default Cita;