import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducers/Root";
export function configureStore(initialState) {
    const middlewares = [
        thunkMiddleware,
        createLogger(),
    ];
    const composeEnhancers = DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
    if (module.hot) {
        module.hot.accept("./../Reducers/Root", () => {
            store.replaceReducer(require("../Reducers/Root"));
        });
    }
    return store;
}
//# sourceMappingURL=CreateStore.js.map