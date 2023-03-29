import React, { useState } from 'react'
import ToDo from '@/components/ToDo'
import PokemonList from '@/components/PokemonList'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'

export const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('todo')

    const handleMenuClick = (component) => {
        setActiveComponent(component)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => handleMenuClick('todo')}
                        variant={activeComponent === 'todo' ? 'outlined' : 'text'}
                    >
                        To Do
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleMenuClick('pokemon')}
                        variant={activeComponent === 'pokemon' ? 'outlined' : 'text'}
                    >
                        Pokemon List
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                {activeComponent === 'todo' && <ToDo />}
                {activeComponent === 'pokemon' && <PokemonList />}
            </Container>
        </div>
    )
}
