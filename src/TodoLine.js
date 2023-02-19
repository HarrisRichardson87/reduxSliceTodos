import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { remove, edit } from './store/todoSlice';
import { TableRow, TableCell, Input, Button } from '@mui/material';

export const TodoLine = ({todo, i}) => {
    const [newName, setName ] = useState(todo.name);
    const [editMode, setEditMode ] = useState(false);
    // Dispatch to our todos slice
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        // Dispatch to redux changes
        dispatch(edit({ todo: {name: newName, id:todo.id }, index: i }));

        // get rid of edit more
        setEditMode(false);
    }
    const handleEditMode = (e) =>{
        e.preventDefault();
    
        // Dispatch to redux changes
        setEditMode(!editMode)      
    }
    const handleDelete = (e) =>{
        e.preventDefault();
    
        // Dispatch to redux changes
        dispatch(remove({ id: todo.id }));
    }
  return (
    <TableRow onDoubleClick={handleEditMode} hover>
        { !editMode && 
                <TableCell>{todo.name} </TableCell>
        }
        { editMode && 
            <TableCell>
                <form onSubmit={handleSubmit}>
                    <Input value={newName} onChange={handleChange}/>
                </form>
            </TableCell>
        }
        <TableCell style={{textAlign:"right"}}><Button onClick={handleDelete}>Delete</Button></TableCell>
    </TableRow>
  )
}
 export default TodoLine;