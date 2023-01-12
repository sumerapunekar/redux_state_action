import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import store from './store';

function App() {
  const {counter} = useSelector(store => store)

  const dispatch = useDispatch();

  const increment = () =>{
   dispatch ({type : "increment"})
  }

  const decrement = () =>{
    dispatch ({type : "decrement"})
   }

   const add = (x) =>{
    dispatch ({type : "add", payload : x})
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
