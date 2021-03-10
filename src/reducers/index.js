import {customAsyncData} from './reducers';
import {combineReducers } from  'redux';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history)=>combineReducers({router: connectRouter(history),customAsyncData});
export default rootReducer;