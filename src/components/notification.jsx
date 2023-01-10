import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({title,msj}) => {
    return (  
        <div className='alerta-error'>
            <span>{title}</span>
            <p>{msj}</p>
        </div>
    );
}
 Notification.propTypes = {
    title: PropTypes.string,
    msj: PropTypes.string.isRequired
 }
export default Notification;