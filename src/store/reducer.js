import { initialState } from "./initialState";
import { NEW_API_DATA } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      return;

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
