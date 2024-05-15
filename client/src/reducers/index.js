import { combineReducers } from 'redux';
import shortenLinkReducer from './shortenLinkReducer';
import linksReducer from './linksReducer';

export default combineReducers({
	shortenLink: shortenLinkReducer,
	theLinks: linksReducer
});