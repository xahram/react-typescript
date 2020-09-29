import React from 'react';
import { TodoShape } from '../Todos'
import { Paper,List, ListItem, ListItemText, IconButton, Typography, Box, Divider, ListItemSecondaryAction, Checkbox } from '@material-ui/core'
// import classes from './TodoList.module.css';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((themes: __MaterialUI.Styles.ThemePalette) => {
    return {
        root: {
            width: "100%",
            // margin: 'auto'
        },
        tasks: {
            width: "100%",
            
        },
        task: {
            width: "60%",
            margin:"auto"
        }
    }
})
const TodoList: React.FC<{ items: TodoShape[] }> = (props) => {
    // console.log(classes)
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <List className={classes.tasks}>
            {props.items.map((item) => {
                return <><ListItem className={classes.task}>
                    {/* <ListItemText><Box component="div" display="inline">{item.id}</Box> <Box component="div" display="inline">{item.task}</Box></ListItemText> */}
                    {/* <ListItemText>{item.id} </ListItemText ><ListItemText>{item.task}</ListItemText> */}
                    <ListItemText>{item.id} </ListItemText ><ListItemText>{item.task}</ListItemText>
                    <IconButton><Checkbox checked={true} ></Checkbox></IconButton>
                    <ListItemSecondaryAction></ListItemSecondaryAction>
                    <ListItemSecondaryAction>
                        <IconButton >  <Checkbox checked={true} /></IconButton>
                    </ListItemSecondaryAction> */}
                </ListItem>
                    <Divider /></>
            })}
            </List>
        </Paper >
    )
}

export default TodoList;