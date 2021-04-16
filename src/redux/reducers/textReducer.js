import types from '../types';

export default function text(state = {data: []}, action) {
  switch (action.type) {
    case types.ADD:
      return {
        data: [...state.data, action.message]
      };
    case types.REMOVE:
      let newData = state.data;

      newData.splice(Number(action.message), 1);

      return {data: [...newData]};
    default:
      return state;
  }
}
