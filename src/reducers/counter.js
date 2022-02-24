import { decrement, increment } from "../actions";

const initialState = {
  count: 0,
  numberInputted:0,
  click : 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        click : state.click + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
       
        click : state.click + 1
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number,
        click : (state.click = 0)
        };
    case 'INPUT_NUMBER':
      return {
          ...state,
        count: parseInt(state.numberInputted, state.resetNumber),
        numberInputted: null,
        
          };
    

    default:
      return state;
  }
}

export default counterReducer;