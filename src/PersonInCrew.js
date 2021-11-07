import React from 'react';

const PersonInCrew = (props) =>{
    return(
        <div className='personInCrew'>
            imie: {props.imie},
            nazwisko: {props.nazwisko},
            wiek: {props.wiek},
            stopien: {props.stopien},
            e-mail: {props.adresEmail}
        </div>
    )
}

export default PersonInCrew;