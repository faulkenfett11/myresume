import { FETCH_COMMENTS, FETCHED_COMMENTS, ERROR_FETCHING, CREATE_COMMENT, ERROR_CREATING, FETCH_COMMENT, DELETE_COMMENT, ERROR_DELETING } from '../actions';

  

 const initialState = {
   comments: [],
   comment: {},
   fetchingComments: false,
   creatingComment: false,
   fetchComment: false,
//  updatingComment: false,
   deletingComment: false,
   error: null
 }


export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, { fetchingComments: true });

    case FETCHED_COMMENTS:
      return Object.assign({}, state, {
        comments: [ ...action.payload ],
        fetchingComments: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
      });

      case CREATE_COMMENT:
      return Object.assign({}, state, {
        comments: [...action.payload],
        creatingComment: true,
        error: null
    });

    case ERROR_CREATING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    case DELETE_COMMENT:
    return Object.assign({}, state, {
      comments: [...state],
      deletingComment: true
    });

    case ERROR_DELETING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    case FETCH_COMMENT:
      return Object.assign({}, state, {
        comment: action.payload , 
        fetchComment: true });
    
    default:
      return state;
    }
};

export default rootReducer;