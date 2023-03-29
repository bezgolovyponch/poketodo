import { addTodo, deleteTodo } from '@/redux/todo/todoSlice'
import {
    Button, IconButton, List,
    ListItem, ListItemSecondaryAction, ListItemText, TextField
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import { Container, Grid, Paper } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}))

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}))

const ToDo = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            name,
            description,
            time,
        }
        dispatch(addTodo(newTodo))
        setName('')
        setDescription('')
        setTime('')
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <StyledContainer maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledPaper>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Time"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Add Todo
                            </Button>
                        </StyledForm>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper>
                        <List>
                            {todos.map((todo) => (
                                <ListItem key={todo.id}>
                                    <ListItemText primary={todo.name} secondary={todo.description} />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            color="primary"
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => handleDelete(todo.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    )
}

export default ToDo
