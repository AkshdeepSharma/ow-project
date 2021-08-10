import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import profileReducer from "./ducks/profile";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
