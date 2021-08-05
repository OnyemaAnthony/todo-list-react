import React, {useState} from 'react';
import {Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal} from "@material-ui/core";
import '../css/Todo.css'
import {db} from "../firebase";
import {DeleteForever} from "@material-ui/icons";

const  useStyles = makeStyles((theme)=>({
    paper:{
        position: 'absolute',
        width:400,
        height:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
}));

const Todo = ({todo}) => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input,setInput] = useState('');

    const  handleOpen =()=>{
        setOpen(true);
    }
    const  handleClose = ()=>{
        setOpen(false);
    }
    const updateTodo = ()=>{
        db.collection('todos').doc(todo.id).update({
            todo:input
        },{merge:true})
        setOpen(false);
    }
    return (
         <>
             <Modal open={open} onClose={e=>setOpen(false)}>
                 <div  className={classes.paper} >
                     <h1>hello world</h1>
                     <input placeholder={todo.todo} value={input} onChange={event=>setInput(event.target.value)} />
                     <Button onClick={updateTodo}>Edit</Button>
                 </div>
             </Modal>


             <List className='todo_list'>
                 <ListItem>
                     <ListItemAvatar>
                     </ListItemAvatar>
                     <ListItemText primary={todo.todo} secondary='Crazy deadline' />
                 </ListItem>
                 <button onClick={event => setOpen(true)}>Edit</button>
                 <DeleteForever onClick={event=>db.collection('todos').doc(todo.id).delete()}/>
             </List>

         </>


    );
};

export default Todo;