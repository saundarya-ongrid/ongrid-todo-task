import {customAsyncData} from './reducers';
import {loginReducer} from './loginReducer';
import {todoReducer} from './todoReducer';
import {combineReducers } from  'redux';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history)=>combineReducers({router: connectRouter(history),customAsyncData, loginReducer, todoReducer});
export default rootReducer;