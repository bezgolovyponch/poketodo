import { Card, CardContent, Typography, CardMedia } from '@mui/material'

const PokemonCard = ({ pokemon }) => {
    if (!pokemon) return null

    return (
        <Card style={{ width: '300px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CardMedia component="img" image={pokemon.image} alt={pokemon.name} />
            <CardContent>
                <Typography variant="h6">{pokemon.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonCard
