import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {action} from './store';

function App() {
  const {counter} = useSelector(store => store)

  const dispatch = useDispatch();

  const increment = () =>{
   dispatch (action.increment())
  }

  const decrement = () =>{
    dispatch (action.decrement())
   }

   const add = (x) =>{
    dispatch (action.add(x))
   }
   
  return (
    <div>
      <h1>My counter app</h1>
       <h3>{counter}</h3>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={() => add(5)}>Add</button>
    </div>
  );
}

export default App;
