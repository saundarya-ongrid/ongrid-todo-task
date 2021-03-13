import {customAsyncData} from './reducers';
import {loginReducer} from './loginReducer';
import {combineReducers } from  'redux';
import { connectRouter } from 'connected-react-router';
import { todoReducer } from '../screens/private/Todos/reducers/todoReducer';



const rootReducer = (history)=>combineReducers({router: connectRouter(history),customAsyncData, loginReducer, todoReducer});
export default rootReducer;