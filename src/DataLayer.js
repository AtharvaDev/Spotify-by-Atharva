// same as stateprovider.js only file name is different in this clone
// refer React context APi for better info abt this page

import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); // this is preparing the data layer

// 1. here the DataLayer is defined and used in app.js
// 2. initialState, reducer, children are the props passed
// 3. Children is what you see in index.js
// 4. reducer takes whatever we pass in as prop
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
