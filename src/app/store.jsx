
import { configureStore } from '@reduxjs/toolkit';

import { CryptoApi } from '../services/CryptoApi';

import {cryptoNewsApi} from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware, CryptoApi.middleware)
});




