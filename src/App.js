
import './App.css';
import {useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./componets/Todo";

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  const addTodo =(event)=>{
      event.preventDefault();
      setTodos([...todos,input]);
      setInput('');
  }

  return (
    <div className="App">
     <h1>Hello world</h1>
        <form>

            <FormControl>
                <InputLabel> Write a Todo</InputLabel>
                <Input onChange={event => setInput(event.target.value)} value={input}/>
            </FormControl>
            <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={addTodo} >Add Todo
            </Button>

        </form>
        <ul>
            {todos.map(todo=>(

              <Todo todo={todo}/>
            ))}

        </ul>
    </div>
  );
}

export default App;
