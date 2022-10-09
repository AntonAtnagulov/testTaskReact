import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material/';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RatingModal from '../RatingModal/RatingModal';
import { ICardProps, filmsType } from '../../interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, delFromFavorite } from '../../redux/rtkSlice';

export default function OneCard({ film }: ICardProps) {
    const dispatch = useDispatch();
    const favorites: filmsType = useSelector((store: any) => store.toolkit.favorites);
    const inFav = favorites.filter(el => el.id === film.id)
    const rated = film.scenario ? (film.scenario + film.actingSkill + film.cameraWork) / 3 : 0

    const addToFavoriteHandler = (): void => {
        dispatch(addToFavorite({ ...film, favorite: true }));
    };

    const delFromFavoriteHandler = (): void => {
        dispatch(delFromFavorite(film.id));
    }

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#d3d3d3', margin: '15px' }}>
            <CardMedia
                component="img"
                height="300"
                image={film.src}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {film.name}
                </Typography>
                <Typography
                    noWrap={true}
                    variant="body1"
                    color="text.secondary"
                >
                    {rated ? `Ваша оценка: ${rated.toFixed(2)}` : 'Оценки нет'}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{height: '40px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'pre-line' }}
                >
                    {film.description}
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                <RatingModal film={film} />
                {inFav[0]?.favorite ? (
                    <Button
                        onClick={delFromFavoriteHandler}
                        variant="outlined"
                        size="small"
                    >
                        <span>Удалить из </span>
                        <FavoriteBorderOutlinedIcon sx={{fontSize: '18px'}}/>
                    </Button>
                ) : (
                    <Button
                        onClick={addToFavoriteHandler}
                        variant="outlined"
                        size="small"
                    >
                        <span>Добавить в </span>
                        <FavoriteBorderOutlinedIcon sx={{fontSize: '18px'}}/>
                    </Button>
                )}
                </div>
            </CardActions>
        </Card>
    );
}
