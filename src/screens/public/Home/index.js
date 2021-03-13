import React from 'react'
import { CustomButton } from '../../../shared/UI/CustomButton'
import { WelcomeHead } from './components/WelcomeHead/WelcomeHead'


export const Home = (props) => {
    return (
        <div>
            <WelcomeHead />
            <CustomButton title='Login' onClick={()=>props.history.push('/login')}/>
        </div>
    )
}
