import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: {contacto.name} {contacto.lastName}</h2>
            <h3>Email: {contacto.email}</h3>
            <h4>Estado: {contacto.status ? 'Contacto En Línea': 'Contacto No Disponible'}</h4>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
