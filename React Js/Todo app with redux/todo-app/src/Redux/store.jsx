import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
  };
  

  const persistedReducer = persistReducer(persistConfig, todoReducer);
  export default () => {
    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ],
    });
    const persistor = persistStore(store);
    return { store, persistor };
  };