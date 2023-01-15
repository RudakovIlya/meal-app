import {combineReducers} from "redux";
import {catalogReducer} from "./catalogReducer";
import {categoryReducer} from "./categoryReducer";
import {recipeReducer} from "./recipeReducer";
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    category: categoryReducer,
    recipe: recipeReducer,
    search: searchReducer
})