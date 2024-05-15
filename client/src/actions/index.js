import shrtCodeApi from '../apis/shrtCodeApi';
import links from '../apis/links';


export const fetchLink = inputValue => async dispatch => {
	const response = await shrtCodeApi.post('/api/v1/shorten', {
		url: inputValue
	});
	console.log(response.data);
	dispatch({ type: 'FETCH_LINK', payload: {
                resultUrl: response.data.result_url,
                inputValue: inputValue
  }});
};

export const fetchAllLinks = () => async dispatch => {
	const response = await links.get('/api/links');
	console.log(response.data);
	dispatch({ type: 'FETCH_ALL_LINKS', payload: response.data });
}

export const createLinks = (url, shorturl) => async (dispatch) => {
  const response = await links.post('/create-link', { url, shorturl});
  console.log(response.data);
  dispatch({ type: 'CREATE_LINKS', payload: response.data });
};


