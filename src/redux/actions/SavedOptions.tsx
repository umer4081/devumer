// import {addMessage} from '../reducers/SavedOptions';
// import store from '../store';
// const {dispatch} = store;

// export const saveMultipleInputs = (inputs: {key: string; data: any}[]) => {
//   inputs.forEach(input => {
//     dispatch(addMessage({key: input.key, data: input.data}));
//   });
// };

// src/redux/actions/SavedOptions.ts

import {addMessage} from '../reducers/SavedOptions';
import {AppDispatch} from '../store';

export const updateChildTextInput = (key: string, data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(addMessage({key, data}));
  };
};
