import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Button, Typography, Card, CardContent, CardMedia, Modal } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { fetchPokemons } from '@/redux/pokemonSlice'
import PokemonCard from './PokemonCard'

const useStyles = makeStyles(() => ({
    styledCard: {
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s',
        },
    },
    styledModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    styledGrid: {
        width: '100%',
        margin: '2vw',
        display: 'flex',
        justifyItems: 'center',
    },
}))

const PokemonList = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons.data)
    const classes = useStyles()

    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        dispatch(fetchPokemons({ limit: 8, offset: 0 }))
    }, [dispatch])

    const handleLoadMore = () => {
        dispatch(fetchPokemons({ limit: 20, offset: pokemons?.length }))
    }

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div
            style={{
                padding: '2vw',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            <Grid className={classes.styledGrid} container spacing={2}>
                {pokemons.map((pokemon, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card className={classes.styledCard} onClick={() => handleCardClick(pokemon)}>
                            <CardMedia component="img" image={pokemon.image} alt={pokemon.name} />
                            <CardContent>
                                <Typography variant="h6">{pokemon.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal className={classes.styledModal} open={openModal} onClose={handleCloseModal}>
                <PokemonCard pokemon={selectedPokemon} />
            </Modal>
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
                Load More
            </Button>
        </div>
    )
}

export default PokemonList
