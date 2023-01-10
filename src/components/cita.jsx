import React from 'react';
import PropTypes from 'prop-types'

const Cita = ({cita, delCita}) => {
    const { mascota, hora, fecha, sintomas,propietario, id } = cita;





    return ( 
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <div>
                <button className='button-primary mr10'>edite</button>
                <button onClick={() => delCita(id)}  className='button eliminar'>delete</button>
            </div>
        </div>
     );
}
 Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    delCita: PropTypes.func.isRequired
 }
export default Cita;