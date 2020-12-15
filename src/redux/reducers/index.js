import { combineReducers } from "redux";
import todos from "./todos";
import doneTodos from "./doneTodo";

const rootReducer = combineReducers({
  todos,
  doneTodos,
});
export default rootReducer;

// export type RootState = ReturnType<typeof rootReducers>;
