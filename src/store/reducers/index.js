
import {combineReducers } from  'redux';
import { connectRouter } from 'connected-react-router';
import { todoReducer } from '../../screens/private/Todos/reducers/todoReducer';
import { loginReducer } from '../../screens/public/Login/reducers/loginReducer';


const rootReducer = (history)=>combineReducers({router: connectRouter(history),loginReducer, todoReducer});
export default rootReducer;