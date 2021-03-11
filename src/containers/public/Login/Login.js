import React from 'react'
import { useDispatch } from "react-redux";
import { loginUserAction } from '../../../actions/allActions';


export const Login = () => {
    const dispatch = useDispatch();
    const logintest = () => {
      dispatch(loginUserAction());
    };
    return (
        <div>
            Login Page
            <button onClick={logintest}>Login Test</button>
        </div>
    )
}
