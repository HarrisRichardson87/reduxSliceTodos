import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { add } from './store/todoSlice';
import TodoLine from './TodoLine';
import { Table, FormControl, Input } from "@mui/material";

export const App = () => {
  const [name, setName ] = useState("");

  // use todos from our redux store
  const { todos } = useSelector(state => state.todosStore);
  
  // Dispatch to our todos slice
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setName(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    // Dispatch to redux changes
    dispatch(add({ name }))

    // Reset name input
    setName("");
  }
 
  return (
    <div className="App">
      <Table>
        {todos.map((x, i) => <TodoLine todo={x} i={i}/>)}
      </Table>

      <form onSubmit={handleSubmit}>
        <Input placeholder='Add a todo...' type="text" value={name} onChange={handleChange}/>
        <Input type="submit"/>
      </form>

    </div>
  );
}

export default App;
