import React from 'react';
import {List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

const Todo = ({todo}) => {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo} secondary='Crazy deadline' />
                </ListItem>
            </List>
        </div>
    );
};

export default Todo;