import types from '../types';

export default {
  add,
  remove
};

function add(message) {
  return { type: types.ADD, message };
};

function remove(message) {
  return { type: types.REMOVE, message };
}
