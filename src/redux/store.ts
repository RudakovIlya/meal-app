import {compose, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type AppDispatchType = typeof store.dispatch

export type RootStateType = ReturnType<typeof store.getState>