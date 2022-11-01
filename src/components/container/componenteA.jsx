import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';
import { useState } from 'react';

const ComponenteA = () => {
    const [contacto1, setcontacto1] = useState(new Contacto('Santiago', 'Cubides', 'scubides@sedic.com.co', true));
    const online = () =>{
        setcontacto1(new Contacto(contacto1.name, contacto1.lastName, contacto1.email, contacto1.status ? false : true))
    }

    return (
        <div>
            <ComponenteB contacto={contacto1}></ComponenteB>
            <button onClick={online}>Conectar/Desconectar</button>
        </div>
    );
}

export default ComponenteA;
