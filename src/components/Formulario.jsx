import React,{Fragment,useState} from 'react'
import { v4 as uuidv4 } from "uuid"  
const Formulario = ({crearCita}) => {
    const[cita ,editcita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''     
    })
    const[error,editerror]=useState(false)
    //funcion ejectuda cada que el ususario escribe alga(para ver si no se le olvida nada)
    const changestate = e => {
        editcita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
    //get values(los valores)
    const{mascota,fecha,propietario,hora,sintomas}=cita
    //cuando envie el form
    const submitcita = e => {
       e.preventDefault()
       //validar el form
       if (mascota.trim()===''||fecha.trim()===''||propietario.trim()===''||sintomas.trim()===''||hora.trim()==='') {
        editerror(true)
        return
       }
      //elimina el message
      editerror(false)
      //asigna un id
         cita.id=uuidv4()
     //crearCita
     crearCita(cita)
     //restart form
     editcita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'' 
     })
    }
    return ( 
    <Fragment>    
    <h1>agende su cita</h1>
    {error ? <p className='alerta-error'>todos los campos son obligatorios</p> : null}
    <form onSubmit={submitcita}>

        <label>Nombre mascota</label>
        <input 
        type="text" 
        name="mascota" 
        className='u-full-width' 
        placeholder='nombre de la mascota' 
        onChange={changestate}
        value={mascota}/>

        <label>Nombre dueño</label>
        <input 
        type="text" 
        name="propietario" 
        className='u-full-width' 
        placeholder='nombre del dueño' 
        onChange={changestate}
        value={propietario}/>

        <label>Fecha</label>
        <input 
        type="date" 
        name="fecha" 
        onChange={changestate}
        className='u-full-width' 
        value={fecha}/>

        <label>Hora de alta</label>
        <input 
        type="time" 
        name="hora" 
        onChange={changestate}
        className='u-full-width' 
        value={hora}/>

        <label>sintomas</label>
        <textarea name="sintomas" className='u-full-width'onChange={changestate} value={sintomas}></textarea>

        <button type="submit" className='u-full-width button-primary'>agendar cita</button>
    </form>
    </Fragment>
    )
}
export default Formulario