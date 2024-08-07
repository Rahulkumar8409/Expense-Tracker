import React , {useContext} from 'react'
import { GlobleContext } from '../context/GlobleState';
const Balance = () => {
  const {transations}=useContext(GlobleContext );
  const amounts=transations.map(transation=>transation.amount);
  
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
