import { FETCH_POSTS,FETCH_POST,DELETE_POST } from '../actions';
import _ from 'lodash';

export default function( state = {}, action){
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); //Returns the new mapped object.
      //action.payload.data => [Object, Object, Object]  an Array
      //_.mapKeys(action.payload.data, 'id') => ex. {106099: Object, 106133: Object, 106134: Object} become an Object.
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;

  }
}
