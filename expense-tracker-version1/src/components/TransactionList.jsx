import React,{useContext} from 'react';
import { GlobleContext } from '../context/GlobleState';
import Transation from './Transation';
  export const TransactionList=()=>{
    const {transations}=useContext(GlobleContext );
    
    
  return (
    <>
       <h3>History</h3>
      <ul id="list" className="list">
          {transations.map(transation=>(<Transation key={transation.id} transation={transation}></Transation> ))}
      </ul>
    </>
  )
}

export default TransactionList
