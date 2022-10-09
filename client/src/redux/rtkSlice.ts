import { createSlice, current } from '@reduxjs/toolkit';
import { filmsType } from '../interfaces/interfaces';

interface InitState {
    films: filmsType[]
    favorites: filmsType[]
}

const initFilmsState: InitState = {
        films: [],
        favorites: []
    }


const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: initFilmsState,
    reducers: {
        setFilms(state, action) {
            state.films = action.payload
        },
        setFilmRating(state, action) {
            state.films = [...current(state.films)].map((el: any) => {
                if (el.id === action.payload.id) {
                    return {...el, ...action.payload.rate, rated: true}
                } else {
                    return el
                }
            }) 
        },
        addToFavorite(state, action) {
            state.favorites.push({...action.payload, favorite: true})
        },
        delFromFavorite(state, action) {
            state.favorites = state.favorites.filter((el: any) => {
                return el.id !== action.payload
            })
        }
    },
});

export default rtkSlice.reducer;
export const { setFilms, setFilmRating, addToFavorite, delFromFavorite } = rtkSlice.actions;
