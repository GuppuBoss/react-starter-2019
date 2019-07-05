import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default combineReducers({
    router: connectRouter(history),
    counter,
});
