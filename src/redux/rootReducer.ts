import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from '@/redux/theme/theme.slice'
import todoReducer from './todo/todoSlice'
import pokemonsReducer from './pokemonSlice'

export const rootReducer = combineReducers({
    theme: themeReducer,
    todo: todoReducer,
    pokemons: pokemonsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
