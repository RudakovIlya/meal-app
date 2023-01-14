import {combineReducers} from "redux";
import {catalogReducer} from "./catalogReducer";
import {categoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    category: categoryReducer
})