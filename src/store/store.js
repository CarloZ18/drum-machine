import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { bankReducer, powerReducer } from "./amount/reducers";

export const store = configureStore(
  {
    reducer: {
      bank: bankReducer,
      power: powerReducer,
    },
  },
  composeWithDevTools()
);
