import React from 'react'
import { CustomButton } from '../../../shared/UI/CustomButton'


export const Home = (props) => {
    return (
        <div>
            Home Page
            <CustomButton title='Login' onClick={()=>props.history.push('/login')}/>
        </div>
    )
}
