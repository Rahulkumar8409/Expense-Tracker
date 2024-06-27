import React ,{useContext} from 'react'
import { GlobleContext } from '../context/GlobleState';
export const Transation=({transation})=>{
  console.log("hii",transation);
  const {deleteTransatin}=useContext(GlobleContext);
  const sign=transation.amount < 0 ? '-' : '+';
  return (
      <li className={transation.amount < 0 ? "minus" : 'plus'}>
          <span> {transation.text}</span>
           
           <span>{sign}${Math.abs(transation.amount)}</span><button onClick={()=>deleteTransatin(transation.id)} className="delete-btn">x</button>
        </li>
   
  )
}

export default Transation
