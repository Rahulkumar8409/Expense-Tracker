import './App.css'
import Header  from './components/Header'
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import {GlobleProvider} from "./context/GlobleState";
function App() {
  return (
    <GlobleProvider>
   <Header/>
   <div className="container">
   <Balance></Balance>
   <IncomeExpense></IncomeExpense>
   <TransactionList></TransactionList>
   <AddTransaction></AddTransaction>
    </div>
    </GlobleProvider>
  )
}

export default App
