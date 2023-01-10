import React, { useState } from 'react'


import Form from './components/form'
import Cita from './components/cita'
const App = () => {

    const [ citas, citasHandler] = useState([])

    const addCitas = obj => {
        citasHandler([...citas, obj])
    }
    const delCita = id => {
        const filter = citas.filter( date => date.id !== id)
        citasHandler([...filter])
    }

    const title = citas.length ? 'Lista de citas' : 'No hay Citas'

    return (
        <React.Fragment>
            <div className="container">
                {/* <h1>Administrador de mascotas</h1> */}
                <div className="row">
                    <div className="one-half column blue">
                        <Form addCitas={addCitas}/>
                    </div>
                    <div className="one-half column ">
                        <h2>{title}</h2>
                        <div className='orange'>
                            {citas.map( cita => <Cita key={cita.id} cita={cita} delCita={delCita} /> )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App