import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./componets/Todo";
import {db} from "./firebase";
import firebase from "firebase";

function App() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        })

    }, []);
    const addTodo = async (event) => {
        event.preventDefault();
        if(input.trim()){
           await db.collection('todos').add({
                todo: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }

        setInput('');
    }

    return (
        <div className="App">
            <h1>Hello codersHub fam </h1>
            <form>

                <FormControl>
                    <InputLabel> Write a Todo</InputLabel>
                    <Input onChange={event => setInput(event.target.value)} value={input}/>
                </FormControl>
                <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={addTodo}>Add Todo
                </Button>

            </form>
            {todos.length <= 0 ? <h1 className='empty_todo'>You dont have a todo yet</h1> :

                <ul>
                {todos.map(todo => (

                    < Todo todo={todo}/>
                ))

                }

            </ul>

            }

        </div>
    );
}

export default App;
