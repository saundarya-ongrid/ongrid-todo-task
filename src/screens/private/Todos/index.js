import React from 'react'
import { Agenda } from './container/Agenda/Agenda'
// import Agenda from './Agenda/AgendaClass'

import './index.css'
export const Todos = (props) => {
    return (
        <div>
            <h1>Todos</h1>
            <Agenda type={props.type}/>
        </div>
    )
}


