import React, { createContext , useContext, useReducer } from 'react'


// creating the context using below function
export const DataLayerContext = createContext(null);

export const AppProvider = ({reducer, initialState, children }) => {
   return <DataLayerContext.Provider value={useReducer(reducer, initialState )}>{children}</DataLayerContext.Provider>
}

export const useContextValue = () => useContext(DataLayerContext);