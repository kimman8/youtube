import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
  likedVideos: [],
};

//create context
export const GlobalContext = createContext();

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
  //actions
  function addingLikedVideo(likedVideo) {
    dispatch({
      type: 'ADD_LIKEDVIDEO',
      payload: likedVideo,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        likedVideos: state.likedVideos,
        addingLikedVideo,
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
