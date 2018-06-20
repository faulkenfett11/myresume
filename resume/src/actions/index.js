import axios from 'axios';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCHED_COMMENTS = 'FETCHED_COMMENTS';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const ERROR_CREATING = 'ERROR_CREATING';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ERROR_DELETING = 'ERROR_DELETING';

export const getComments = () => {
    const comments = axios.get(`https://justinfaulkenberryresume.herokuapp.com/comments`);
    return dispatch => {
      dispatch({ type: FETCH_COMMENTS });
      comments
        .then(response => {
            console.log( response.data );
          dispatch({
            type: FETCHED_COMMENTS,
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR_FETCHING,
            payload: 'ERROR Fetching Comments'
          });
        });
    };
  };

  export const createComment = data => {
    const comments = axios.post(`https://justinfaulkenberryresume.herokuapp.com/comments`, data);
      return dispatch => {
        comments
        .then(response=> {
          dispatch({ type: CREATE_COMMENT })
        })
        .catch(err => {
          dispatch({
            type: ERROR_CREATING,
            payload: 'ERROR creating comment'
          });
        });
      };
  };

  export const getComment = id => {
    const comment = axios.get(`https://justinfaulkenberryresume.herokuapp.com/comments/${id}`)
    return dispatch => {
    comment
      .then(response => {
        console.log(response.data, "getComment")
        dispatch({ type: FETCH_COMMENT, payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
    };
  };

  export const deleteComment = id => {
    const comment = axios.delete(`https://justinfaulkenberryresume.herokuapp.com/comments/${id}`);
      return dispatch => {
        dispatch({ type: DELETE_COMMENT });
        comment
        .then(response=> {
          dispatch(getComments());
        })
        .catch(err => {
          dispatch({
            type: ERROR_DELETING,
            payload: 'ERROR deleting Comment'
          });
        });
      };
  };
