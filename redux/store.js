import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist-indexeddb-storage";
import toDoReducer from "./features/ToDoList";

const rootReducer = combineReducers({
  todo: toDoReducer,
});

const persistConfig = {
  key: "root",
  storage: storage("database"),     //store redux data on indexed DB
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  ],
});

export const persistor = persistStore(store);
