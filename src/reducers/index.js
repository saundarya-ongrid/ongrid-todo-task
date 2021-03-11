import {customAsyncData} from './reducers';
import {loginReducer} from './loginReducer';

import {combineReducers } from  'redux';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history)=>combineReducers({router: connectRouter(history),customAsyncData, loginReducer});
export default rootReducer;