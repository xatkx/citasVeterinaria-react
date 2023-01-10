import React from 'react'


const Notification = ({title,msj}) => {
    return (  
        <div className='alerta-error'>
            <span>{title}</span>
            <p>{msj}</p>
        </div>
    );
}
 
export default Notification;