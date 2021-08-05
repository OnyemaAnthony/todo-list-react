import React from 'react';
import {Button, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import '../css/Todo.css'
import {db} from "../firebase";

const Todo = ({todo}) => {
    return (

            <List className='todo_list'>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo.todo} secondary='Crazy deadline' />
                </ListItem>
                <Button onClick={event=>db.collection('todos').doc(todo.id).delete()}>Delete me</Button>
            </List>

    );
};

export default Todo;