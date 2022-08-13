import React, {  createContext, CreateContext,useReducer  } from "react"
import authInitialState from "./initialStates/authInitialState";
import contactsInitialState from "./initialStates/contactsInitialState";
import expatsInitialState from "./initialStates/expatsInitialState";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";
import expatsReducer from './reducers/expatsReducer';


export const GlobalContext = createContext({})

const GlobalProvider = ({children}) =>{
   const [authState, authDispatch] = useReducer(auth, authInitialState)
   const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);
   //expatsProvider
    const [expatsState, expatsDispatch] = useReducer(
      expatsReducer,
      expatsInitialState
    );
    return (
      <GlobalContext.Provider
        value={{
          authState,
          authDispatch,
          contactsState,
          contactsDispatch,
          expatsState,
          expatsDispatch,
        }}>
        {children}
      </GlobalContext.Provider>
    );
}
export default GlobalProvider;