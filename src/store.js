import { createStore, combineReducers } from "redux";
import { todos } from "./Components/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
  todos
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers(reducers);
const presistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(presistedReducer);
