import {Grid, List, ListItem,ListItemText} from '@material-ui/core';
//import { fontWeight} from '@material-ui/system';
//import './Todo.css';

function Todo(props)
{    
    return (
    <Grid container justify="center">
    <List className="todo">
    <ListItem>
    <ListItemText primary={props.todo.todo} />
    </ListItem>
    </List>
    </Grid>
    )
}

export default Todo