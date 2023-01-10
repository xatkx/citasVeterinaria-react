import React, { useState } from 'react';
import { v4 as uuid} from 'uuid'

// components
import Notification from './notification';

import { valid } from '../function/extra';
const Form = ({addCitas}) => {
    // datos form
    const [pacienteObj, pacienteHandler] = useState(
        {
            mascota: '',
            propietario: '',
            hora: '',
            fecha: '',
            sintomas: ''
        })
        // error stado
    const [ error, errorHandler] = useState(false) 

    const formHandler = event => {
        pacienteHandler({...pacienteObj,[event.target.name]: event.target.value})
    }

    const formSubmint = event => {
        event.preventDefault()

        // validar
        if(!valid(pacienteObj))
        {
            errorHandler(true)
            return
        }

        // add id
        const obj = {...pacienteObj,id: uuid()}
        //add  cita
        addCitas(obj)
        // reset form 
        event.target.reset()
        errorHandler(false)
    }


    
    return (
        <React.Fragment>
            <h2>Crea una Cita</h2>
            { error ? <Notification title={'error'} msj={'todos los campos osn necesarios'} />: false}
            <form onChange={formHandler} onSubmit={formSubmint}>
                <label htmlFor="mascota">Mascota</label>
                <input 
                    type="text" 
                    name='mascota'
                    id='mascota'
                    placeholder='nombre de la mascota'
                    className='u-full-width'
                    // onChange={formHandler}
                />
                <label htmlFor='propietario'>Propietario</label>
                <input 
                    type="text" 
                    name='propietario'
                    id='propietario'
                    placeholder='nombre del propietario'
                    className='u-full-width'
                />
                <label htmlFor='fecha'>Fecha</label>
                <input 
                    type="date" 
                    name='fecha'
                    id='fecha'
                    className='u-full-width'
                />
                <label htmlFor='hora'>Hora</label>
                <input 
                    type="time" 
                    name='hora'
                    id='hora'
                    className='u-full-width'
                />
                <label htmlFor='sintomas' >Sintomas</label>
                <textarea name="sintomas" id="sintomas" className='u-full-width'></textarea>
                <button type="submit" className='u-full-width button-primary'>Guardar</button>
            </form>
        </React.Fragment>
    )
}

export default Form;