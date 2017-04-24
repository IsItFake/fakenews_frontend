import { createStore, applyMiddleware, compose, Store, Middleware, Reducer } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../Reducers/Root";
import { StoreState } from "./StoreState";

export function configureStore(initialState?: StoreState): Store<StoreState> {
    const middlewares: Middleware[] = [
        thunkMiddleware,
        createLogger(),
    ];

    const composeEnhancers =
        DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    if (module.hot) {
        module.hot.accept("./../Reducers/Root", () => {
            store.replaceReducer((require("../Reducers/Root") as Reducer<StoreState>));
        });
    }

    return store;
}
