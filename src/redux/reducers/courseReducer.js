import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      debugger;
      return [...state, { ...action.course }];            
    default:
      return state;
  }
}
