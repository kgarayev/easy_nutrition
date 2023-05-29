import { initialState } from "./initialState";
import { NEW_API_DATA, USER_INPUT, SET_FILTER, SET_SORT } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      console.log(action.payload);
      return { ...state, nutritionData: action.payload };

    case USER_INPUT:
      console.log(`user input occured. it is ${action.payload}`);
      return { ...state, userInput: action.payload };

    case SET_FILTER:
      return { ...state, filterInput: action.payload };

    case SET_SORT:
      return { ...state, sortInput: action.payload };

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
