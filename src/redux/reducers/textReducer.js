import types from '../types';

export default function text(state = {data: []}, action) {
  switch (action.type) {
    case types.ADD:
      return {
        data: [...state.data, action.message]
      };
    case types.REMOVE:
      return {data: []};
    default:
      return state;
  }
}
