import merge from 'lodash/merge';

import {
  RECEIVE_SELLER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sellerReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SELLER:
      const seller = action.payload.user;
      return merge({}, seller);
    default:
      return state;
  }
};

export default sellerReducer;
