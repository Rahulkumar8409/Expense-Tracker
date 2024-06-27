import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
const initialState={
  transations:[
    {
    id:1,text:"flower",amount:-20},
    {
      id:2,text:"salary",amount:300},
      {
        id:3,text:"book",amount:-10},
        {
          id:4,text:"Camera",amount:150},
  ]
}
export const GlobleContext= createContext(initialState);
export const GlobleProvider=({children})=>{
  const[state,dispatch]=useReducer(AppReducer,initialState);
  function deleteTransatin(id){
    dispatch({
      type:'DELETE_TRANSATION',
      payload:id
    });
  }

  function addTransatin(transaction){
    dispatch({
      type:'ADD_TRANSATION',
      payload:transaction
    });
  } 

  return (<GlobleContext.Provider value={{transations:state.transations,deleteTransatin,addTransatin }}>
    {children}
  </GlobleContext.Provider>)
}