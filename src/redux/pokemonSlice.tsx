import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async ({ limit, offset }) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const pokemons = response.data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url)
            return {
                name: pokemonDetails.data.name,
                image: pokemonDetails.data.sprites.front_default,
            }
        })
        return Promise.all(pokemons)
    } catch (error) {
        console.error('Error fetching pokemons:', error)
        throw error
    }
})

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = [...state.data, ...action.payload]
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default pokemonsSlice.reducer
