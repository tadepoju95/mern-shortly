import _ from 'lodash';


export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_LINKS':
      return [ ...state, ...action.payload ];
    case 'CREATE_LINKS':
      return [ ...state, action.payload ];
    default:
      return state;
  }
};
