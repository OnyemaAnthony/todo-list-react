import React from 'react';
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import '../css/Todo.css'

const Todo = ({todo}) => {
    return (

            <List className='todo_list'>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo} secondary='Crazy deadline' />
                </ListItem>
            </List>

    );
};

export default Todo;